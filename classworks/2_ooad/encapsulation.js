// class Mlass {
//   constructor(x) {
//     this.setX(x);
//   }

//   setX(value) {
//     if (value > 20) throw new Error('something went wrong');
//     this._x = value;
//   }

//   getX() {
//     return this._x;
//   }
// }

// const obj = new Mlass(19);

// console.log(obj);

// obj._x = 55;
// // obj.setX(21);
// console.log(obj);

// class User {
//   #name;

//   constructor(name) {
//     this.setName(name);
//   }

//   setName(value) {
//     if (!value) throw new Error("Name can't be empty");
//     this.#name = value;
//   }

//   getName() {
//     return this.#name;
//   }
// }

// const u1 = new User('James');

// console.log(u1);

// console.log(u1.getName());

// u1.setName('Bob');
// console.log(u1.getName());

// u1.name = '';
// console.log(u1.getName());
// console.log(u1);
// const u2 = new User('Alice');
// console.log(u2);

// class User {
//   #name;

//   constructor(name) {
//     this.name = name;
//   }

//   set name(value) {
//     console.log('Setter called...');
//     if (!value) throw new Error("Name can't be empty");
//     this.#name = value;
//   }

//   get name() {
//     return this.#name;
//   }

//   set() {
//     console.log('animast set');
//   }

//   get() {
//     console.log('animast get ');
//   }
// }

// const u1 = new User('James');

// console.log(u1);

// u1.set()

// class A {
//   set x(value) {
//     console.log('setter called...');
//     this._x = value;
//   }
// }

// const ob = new A();

// ob.x = 23;

// es5

// function setName(value) {
//   console.log('setter called');
//   this._name = value;
// }

// function User(name) {
//   setName(name);
// }

// User.prototype.setName = setName;

// const u1 = new User('James');
// // u1.setName();
// console.log(u1);

// function User(name) {
//   this.setName(name);
// }

// User.prototype.setName = function (value) {
//   if (!value) throw new Error();
//   this._name = value;
// };

// const u1 = new User('Bob');
// const u2 = new User('Bob');
// const u3 = new User('Bob');
// const u4 = new User('Bob');
// const u5 = new User('Bob');

// console.log(u1);
// console.log(u2);
// console.log(u3);
// console.log(u4);
// console.log(u5);

// u1.setName('James');
// console.log(u1);

function foo() {
  let x = 23;
  function bar() {
    let y = 24;
    debugger;
    console.log(y);
    console.log(x);
  }
  return bar;
}
const newFunction = foo();

newFunction();
