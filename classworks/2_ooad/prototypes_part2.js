// // // // let obj = {};

// // // // // Object.defineProperty(obj, 'name', {
// // // // //   value: 'Bob',
// // // // //   writable: true,
// // // // //   enumerable: true,
// // // // //   configurable: true,
// // // // // });

// // // // // console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

// // // // Object.defineProperty(obj, 'name', {
// // // //   writable: false,
// // // // });

// // // // console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

// // // // Prototype vs Properties, external vs internal prototypes, static methods & static property

// // // // Object;

// // // // toString, valueOf, ...

// // // // const o = {};

// // // // console.log(o.toString());

// // // // const arr = [1, 2, 3];

// // // // console.log(arr.toString());

// // // // function Musician(name) {
// // // //   this.name = name;
// // // //   this.play = function () {
// // // //     console.log('Musician plays some music...');
// // // //   };
// // // // }

// // // // const m = new Musician('Bob');

// // // class Animal {
// // //   constructor(name) {
// // //     this.name = name;
// // //   }

// // //   eat() {
// // //     console.log('Animal eats something...');
// // //   }
// // // }

// // // const a = new Animal('Bob');

// // // console.log(a);

// // // function Musician(name) {
// // //   this.name = name;
// // // }

// // // Musician.prototype.play = function () {
// // //   console.log('this is -> ', this);
// // //   console.log('Musician plays some music...');
// // // };

// // // const m = new Musician('Bob');

// // // console.log(m);

// // // m.play();
// // // // 1. -> properties list
// // // // 2. __proto__ -> Musician.prototype.play

// // // // Musician.prototype.play();

// // // // console.log(Object.getOwnPropertyNames(Animal.prototype));

// // // Object.prototype = Object.create(null);

// // // const o = {};

// // // console.log(o.__proto__);

// // function foo() {}

// // function Person(name) {
// //   this.name = name;
// // }

// // console.log(Object.getOwnPropertyNames(Person));

// // // Person.prototype;
// // // Person.__proto__;
// // // console.log(Person.arguments);

// // // Person.customCtor = function (name) {
// // //   const This = {};
// // //   This.name = name;

// // //   return This;
// // // };

// // console.log(Object.getOwnPropertyNames(Person.prototype));

// // const a1 = new Person(); // new Person.prototype.construcutor()

// // const a2 = new Person.prototype.constructor();

// // // console.log(a1);
// // // console.log(a2);
// // const a3 = new a1.constructor(); // new Person, // new Person.prototype.constructor
// // console.log('a3', a3);

// // // console.log(Object.getOwnPropertyNames(Function.prototype));

// // // const x = new Person.constructor();

// // // console.log(x);
// // // x();

// Object.prototype.constructor;

// new Object(); // new Object.constructor novu, new Object.prototype.constructor

// const obj = {};

// // console.log(Object.prototype.__proto__);

// console.log(Object.getOwnPropertyNames(Object.__proto__));
// console.log(Object.getOwnPropertyNames(Function.__proto__));
// console.log(Object.getOwnPropertyNames(Function.prototype));

// console.log(Function.prototype === Function.__proto__);
// console.log(Function.prototype === Object.__proto__);
// console.log(Function.__proto__ === Object.__proto__);

// Function.prototype;
// console.log(Object.getOwnPropertyNames(Function.__proto__.__proto__));

// console.log(Object.prototype === Function.__proto__.__proto__);

// console.log(Object.__proto__.__proto__ === Object.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);

// function foo() {}

// delete Function.prototype.toString;
// console.log(foo.toString());
// console.log(Object.getOwnPropertyNames(Function.prototype));

console.log(Object.prototype.__proto__);
const obj = {};

console.log(obj.__proto__.__proto__);
console.log(Object.__proto__); // Function.prototype
