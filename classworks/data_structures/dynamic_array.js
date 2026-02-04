const insertionSort = require('../algorithms/searching&sorting');

class DynamicArray {
  #arr;
  #size;
  #capacity;
  #GROWTH = 2;

  constructor(cap = 0, fill = 0) {
    if (cap < 0) throw new Error('cap must be >= 0');
    if (!Number.isInteger(cap)) throw new Error('cap must be an integer');
    if (!Number.isInteger(fill)) throw new Error('fill must be an integer');

    this.#arr = new Int32Array(cap);
    this.#capacity = cap;
    this.#size = cap;
    if (cap > 0) {
      this.#arr.fill(fill);
    }
  }

  size() {
    return this.#size;
  }

  capacity() {
    return this.#capacity;
  }

  empty() {
    return this.#size === 0;
  }

  reserve(n) {}

  shrinkToFit() {}

  clear() {
    this.#size = 0;
  }

  /* ===== Element access ===== */

  at(i) {
    if (i < 0 || i >= this.#size) throw new Error('out of range');
    if (!Number.isInteger(i)) throw new Error('i must be an integer');

    return this.#arr[i];
  }

  set(i, value) {
    if (i < 0 || i >= this.#size) throw new Error('out of range');
    if (!Number.isInteger(i)) throw new Error('i must be an integer');
    if (!Number.isInteger(value)) throw new Error('value must be an integer');

    this.#arr[i] = value;
  }

  front() {
    if (this.empty()) throw new Error('array is empty');
    return this.#arr[0];
  }

  back() {
    if (this.empty()) throw new Error('array is empty');
    return this.#arr[this.#size - 1];
  }

  toArray() {
    const newArray = new Array(this.#size);

    for (let i = 0; i < this.#size; ++i) {
      newArray[i] = this.#arr[i];
    }
    return newArray;
  }

  /* ==== Modifers ==== */

  #resize(n) {
    if (n <= 0) throw new Error('n must be >= 0');

    const tmp = new Int32Array(n).fill(0);

    if (n < this.#size) this.#size = n;

    for (let i = 0; i < this.#size; ++i) {
      tmp[i] = this.at(i);
    }

    this.#arr = tmp;
    this.#capacity = n;
  }

  push_back(value) {
    if (!Number.isInteger(value)) throw new Error('value must be an integer');

    if (this.#size === this.#capacity) {
      const newCap = this.#capacity === 0 ? 1 : this.#capacity * this.#GROWTH;

      this.#resize(newCap);
    }
    this.#arr[this.#size++] = value;
  }

  pop_back() {
    if (this.empty()) throw new Error('array is empty');

    return this.#arr[this.#size--];
  }

  insert(pos, value) {
    if (pos < 0 || pos > this.#size) throw new Error('out of range');
    if (!Number.isInteger(pos)) throw new Error('i must be an integer');
    if (!Number.isInteger(value)) throw new Error('value must be an integer');

    if (this.#size === this.#capacity) {
      const newCap = this.#capacity === 0 ? 1 : this.#capacity * this.#GROWTH;
      this.#resize(newCap);
    }

    for (let i = this.#size; i > pos; --i) {
      this.#arr[i] = this.#arr[i - 1];
    }

    this.#arr[pos] = value;
    this.#size++;
  }

  swap(i, j) {
    if (i < 0 || i >= this.#size) throw new Error('i out of range');
    if (j < 0 || j >= this.#size) throw new Error('j out of range');

    [this.#arr[i], this.#arr[j]] = [this.#arr[j], this.#arr[i]];
  }

  [Symbol.iterator]() {
    let i = 0;

    return {
      next: () => {
        if (i >= this.#size) {
          return { value: undefined, done: true };
        }
        return { value: this.#arr[i++], done: false };
      },
    };
  }

  toString() {
    return this.toArray();
  }

  *entries() {
    for (let i = 0; i < this.#size; ++i) {
      yield [i, this.#arr[i]];
    }
  }

  reverse() {
    let i = 0;
    let j = this.#size - 1;

    while (i < j) {
      this.swap(i, j);
      ++i;
      --j;
    }
  }

  sort(compareFn) {
    compareFn = typeof compareFn === 'function' ? compareFn : (a, b) => a - b;

    const arr = this.#arr;

    function partition(low, high) {
      let pivot = arr[low];
      let i = low + 1;
      let j = high;

      while (i <= j) {
        while (compareFn(arr[i], pivot) <= 0) {
          ++i;
        }
        while (compareFn(arr[j], pivot) > 0) {
          --j;
        }

        if (i < j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          ++i;
          --j;
        }
      }
      [arr[low], arr[j]] = [arr[j], arr[low]];
      return j;
    }

    function q(low, high) {
      if (low < high) {
        const pi = partition(low, high);
        q(low, pi - 1);
        q(pi + 1, high);
      }
    }

    q(0, this.#size - 1);
  }
}

const da = new DynamicArray();

da.push_back(64);
da.push_back(10);
da.push_back(4);
da.push_back(3);
da.push_back(1);

da.sort();

console.log(da.toString());

// for (const item of da) {
//   console.log(item);
// }
