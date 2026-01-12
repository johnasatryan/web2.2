// Task 1 — Advanced Banking System Simulation (JavaScript / Node.js)
// Features:
// - Abstract base class (BankAccount) + concrete IndividualAccount/JointAccount
// - Validation via Object.defineProperty (descriptor-like)
// - Encapsulation via #private fields
// - Decorator-like wrappers (HOF) for logging + permission
// - Custom exceptions
// - Transaction history per account

'use strict';

// -----------------------------
// Custom Exceptions
// -----------------------------
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class InvalidTransactionError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidTransactionError';
  }
}

class InsufficientFundsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InsufficientFundsError';
  }
}

class AuthorizationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthorizationError';
  }
}

// -----------------------------
// Validation helpers
// -----------------------------
const Validators = {
  nonEmptyString(v) {
    return typeof v === 'string' && v.trim().length > 0;
  },
  accountNumber10(v) {
    return typeof v === 'string' && /^\d{10}$/.test(v);
  },
  nonNegativeNumber(v) {
    return typeof v === 'number' && Number.isFinite(v) && v >= 0;
  },
  positiveNumber(v) {
    return typeof v === 'number' && Number.isFinite(v) && v > 0;
  },
  email(v) {
    return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  },
  phone(v) {
    // Simple international-ish phone check: + and 7..15 digits
    return typeof v === 'string' && /^\+?\d{7,15}$/.test(v);
  },
  emailOrPhone(v) {
    return Validators.email(v) || Validators.phone(v);
  },
};

/**
 * Descriptor-like validated property using Object.defineProperty.
 * Stores value on a symbol to avoid accidental external access.
 */
function defineValidatedProperty(
  obj,
  propName,
  { validate, transform = (x) => x, defaultValue },
) {
  const hidden = Symbol(propName);

  Object.defineProperty(obj, propName, {
    enumerable: true,
    configurable: false,
    get() {
      return this[hidden];
    },
    set(value) {
      const v = transform(value);
      if (!validate(v)) {
        throw new ValidationError(`Invalid ${propName}: ${value}`);
      }
      this[hidden] = v;
    },
  });

  if (defaultValue !== undefined) obj[propName] = defaultValue;
}

function requirePermission(checkFn) {
  return function wrap(fn) {
    return function (...args) {
      if (!checkFn(this, ...args)) {
        throw new AuthorizationError('Not authorized for this operation.');
      }
      return fn.apply(this, args);
    };
  };
}

// -----------------------------
// Transaction
// -----------------------------
class Transaction {
  constructor({
    accountNumber,
    amount,
    transactionType,
    fromAccount,
    toAccount,
  }) {
    defineValidatedProperty(this, 'accountNumber', {
      validate: Validators.accountNumber10,
    });
    defineValidatedProperty(this, 'amount', {
      validate: Validators.positiveNumber,
    });
    defineValidatedProperty(this, 'transactionType', {
      validate: Validators.nonEmptyString,
    });

    this.timestamp = new Date().toISOString();

    this.accountNumber = accountNumber;
    this.amount = amount;
    this.transactionType = transactionType;

    // Optional metadata
    if (fromAccount !== undefined) this.fromAccount = fromAccount;
    if (toAccount !== undefined) this.toAccount = toAccount;
  }
}

// -----------------------------
// Customer
// -----------------------------
class Customer {
  constructor({ name, contactInfo, isAuthorized = false }) {
    defineValidatedProperty(this, 'name', {
      validate: Validators.nonEmptyString,
      transform: (v) => (typeof v === 'string' ? v.trim() : v),
    });

    defineValidatedProperty(this, 'contactInfo', {
      validate: Validators.emailOrPhone,
      transform: (v) => (typeof v === 'string' ? v.trim() : v),
    });

    this.name = name;
    this.contactInfo = contactInfo;

    this.accounts = [];
    this.isAuthorized = Boolean(isAuthorized);
  }

  addAccount(account) {
    if (!(account instanceof BankAccount)) {
      throw new ValidationError(
        'addAccount(account): account must be a BankAccount.',
      );
    }
    this.accounts.push(account);
    return this;
  }

  viewAccounts() {
    return this.accounts.map((a) => ({
      accountNumber: a.accountNumber,
      type: a.type,
      balance: a.getBalance(),
    }));
  }

  viewTransactionHistory(accountNumber) {
    const acc = this.accounts.find((a) => a.accountNumber === accountNumber);
    if (!acc)
      throw new ValidationError(`No account found for ${accountNumber}`);
    return acc.getAllTransactions();
  }
}

// -----------------------------
// BankAccount (Abstract Base)
// -----------------------------
class BankAccount {
  #balance;
  #transactions;

  constructor({ accountNumber, type, initialBalance = 0 }) {
    if (new.target === BankAccount) {
      throw new TypeError(
        'BankAccount is abstract and cannot be instantiated directly.',
      );
    }

    // Public validated properties
    defineValidatedProperty(this, 'accountNumber', {
      validate: Validators.accountNumber10,
    });
    defineValidatedProperty(this, 'type', {
      validate: Validators.nonEmptyString,
    });

    this.accountNumber = accountNumber;
    this.type = type;

    if (!Validators.nonNegativeNumber(initialBalance)) {
      throw new ValidationError(
        'initialBalance must be a non-negative number.',
      );
    }

    // Private state
    this.#balance = initialBalance;
    this.#transactions = [];
  }

  // --- abstract-like methods (throw by default)
  deposit(_amount) {
    throw new TypeError('deposit(amount) must be implemented by subclass.');
  }

  withdraw(_amount) {
    throw new TypeError('withdraw(amount) must be implemented by subclass.');
  }

  getBalance() {
    return this.#balance;
  }

  transferFunds(_targetAccount, _amount, _actor) {
    throw new TypeError(
      'transferFunds(targetAccount, amount, actor) must be implemented by subclass.',
    );
  }

  // --- protected-ish helpers (by convention)
  _credit(amount) {
    if (!Validators.positiveNumber(amount))
      throw new InvalidTransactionError('Credit amount must be positive.');
    this.#balance += amount;
  }

  _debit(amount) {
    if (!Validators.positiveNumber(amount))
      throw new InvalidTransactionError('Debit amount must be positive.');
    if (this.#balance < amount)
      throw new InsufficientFundsError('Insufficient funds.');
    this.#balance -= amount;
  }

  _pushTransaction(tx) {
    if (!(tx instanceof Transaction))
      throw new ValidationError('Transaction must be a Transaction instance.');
    this.#transactions.push(tx);
  }

  getTransactionSummary(limit = 10) {
    if (!Number.isInteger(limit) || limit <= 0)
      throw new ValidationError('limit must be a positive integer.');
    const start = Math.max(0, this.#transactions.length - limit);
    return this.#transactions.slice(start).map((t) => ({ ...t }));
  }

  getAllTransactions() {
    return this.#transactions.slice().map((t) => ({ ...t }));
  }
}

// -----------------------------
// IndividualAccount
// -----------------------------
class IndividualAccount extends BankAccount {
  constructor({ accountNumber, initialBalance = 0 }) {
    super({ accountNumber, type: 'individual', initialBalance });
  }

  deposit(amount) {
    this._credit(amount);
    this._pushTransaction(
      new Transaction({
        accountNumber: this.accountNumber,
        amount,
        transactionType: 'deposit',
      }),
    );
    return this.getBalance();
  }

  withdraw(amount) {
    this._debit(amount);
    this._pushTransaction(
      new Transaction({
        accountNumber: this.accountNumber,
        amount,
        transactionType: 'withdraw',
      }),
    );
    return this.getBalance();
  }

  transferFunds(targetAccount, amount, actor) {
    // Permission check: either actor.isAuthorized OR (no ownership concept here → rely on isAuthorized)
    if (!actor || actor.isAuthorized !== true) {
      throw new AuthorizationError('Transfer requires an authorized actor.');
    }

    if (!(targetAccount instanceof BankAccount)) {
      throw new ValidationError('targetAccount must be a BankAccount.');
    }

    // debit then credit
    this._debit(amount);
    targetAccount._credit(amount);

    const from = this.accountNumber;
    const to = targetAccount.accountNumber;

    this._pushTransaction(
      new Transaction({
        accountNumber: from,
        amount,
        transactionType: 'transfer',
        fromAccount: from,
        toAccount: to,
      }),
    );

    targetAccount._pushTransaction(
      new Transaction({
        accountNumber: to,
        amount,
        transactionType: 'transfer',
        fromAccount: from,
        toAccount: to,
      }),
    );

    return {
      fromBalance: this.getBalance(),
      toBalance: targetAccount.getBalance(),
    };
  }
}

// -----------------------------
// JointAccount
// -----------------------------
class JointAccount extends BankAccount {
  constructor({ accountNumber, initialBalance = 0, owners }) {
    super({ accountNumber, type: 'joint', initialBalance });

    if (!Array.isArray(owners) || owners.length === 0) {
      throw new ValidationError(
        'JointAccount requires a non-empty owners array.',
      );
    }

    // Store owners as ids (string) OR Customer objects
    this.owners = owners;
  }

  _isOwner(actor) {
    if (!actor) return false;

    // actor can be Customer, or ownerId string
    const actorId = typeof actor === 'string' ? actor : actor.id;

    return this.owners.some((o) => {
      if (typeof o === 'string') return o === actor || o === actorId;
      // If Customer object
      if (o && typeof o === 'object') {
        // Compare by object ref OR by id
        if (o === actor) return true;
        if (o.id && actorId && o.id === actorId) return true;
        // Fallback compare by name+contact
        if (actor.name && actor.contactInfo) {
          return o.name === actor.name && o.contactInfo === actor.contactInfo;
        }
      }
      return false;
    })
  }

  deposit(amount) {
    this._credit(amount);
    this._pushTransaction(
      new Transaction({
        accountNumber: this.accountNumber,
        amount,
        transactionType: 'deposit',
      }),
    );
    return this.getBalance();
  }

  withdraw(amount) {
    this._debit(amount);
    this._pushTransaction(
      new Transaction({
        accountNumber: this.accountNumber,
        amount,
        transactionType: 'withdraw',
      }),
    );
    return this.getBalance();
  }

  transferFunds(targetAccount, amount, actor) {
    // Ownership OR global authorization
    const ok = (actor && actor.isAuthorized === true) || this._isOwner(actor);
    if (!ok)
      throw new AuthorizationError(
        'Transfer requires joint owner or authorized actor.',
      );

    if (!(targetAccount instanceof BankAccount)) {
      throw new ValidationError('targetAccount must be a BankAccount.');
    }

    this._debit(amount);
    targetAccount._credit(amount);

    const from = this.accountNumber;
    const to = targetAccount.accountNumber;

    this._pushTransaction(
      new Transaction({
        accountNumber: from,
        amount,
        transactionType: 'transfer',
        fromAccount: from,
        toAccount: to,
      }),
    );

    targetAccount._pushTransaction(
      new Transaction({
        accountNumber: to,
        amount,
        transactionType: 'transfer',
        fromAccount: from,
        toAccount: to,
      }),
    );

    return {
      fromBalance: this.getBalance(),
      toBalance: targetAccount.getBalance(),
    };
  }
}

// Example extra permission gate (uncomment if you want global enforcement)
// addPermissionGate(IndividualAccount, (_acc, _target, _amount, actor) => actor?.isAuthorized === true);
// addPermissionGate(JointAccount, (_acc, _target, _amount, actor) => actor?.isAuthorized === true);

// -----------------------------
// Demo / quick test
// -----------------------------
if (require.main === module) {
  console.log('--- Banking System Demo ---');

  const john = new Customer({
    name: 'John Asatryan',
    contactInfo: 'john@example.com',
    isAuthorized: true,
  });
  const alice = new Customer({
    name: 'Alice',
    contactInfo: '+37499111222',
    isAuthorized: false,
  });

  const a1 = new IndividualAccount({
    accountNumber: '1234567890',
    initialBalance: 1000,
  });
  const a2 = new IndividualAccount({
    accountNumber: '9999999999',
    initialBalance: 200,
  });

  const j1 = new JointAccount({
    accountNumber: '1111222233',
    initialBalance: 500,
    owners: [john, alice],
  });

  john.addAccount(a1).addAccount(j1);
  alice.addAccount(a2).addAccount(j1);

  a1.deposit(250);
  a1.withdraw(100);

  // Authorized transfer
  a1.transferFunds(a2, 300, john);

  // Joint transfer by owner (alice is owner but not globally authorized)
  j1.transferFunds(a2, 50, alice);

  console.log('John accounts:', john.viewAccounts());
  console.log('Joint summary:', j1.getTransactionSummary(10));

  try {
    // Should fail: alice is not authorized for individual transfer
    a2.transferFunds(a1, 10, alice);
  } catch (e) {
    console.log('Expected error:', e.name, e.message);
  }
}
