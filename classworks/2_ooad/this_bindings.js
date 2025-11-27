//
// // // default bindig

// // function foo() {
// //   console.log(this);
// // }

// // // foo();

// // // implicit binding

// // const obj = {
// //   name: 'James',
// //   method: function (surname) {
// //     console.log(this.name + ` ${surname}`);
// //   },
// // };

// // // obj.method();

// // let x = obj.method;
// // // x();

// // // x.call(obj);

// // // Function.prototype.myCall = function (context, ...args) {
// // //   console.log(arguments);
// // //   const sym = Symbol('unique');
// // //   Object.defineProperty(context, sym, {
// // //     value: this,
// // //     enumerable: false,
// // //     configurable: true,
// // //   });

// // //   const result = context[sym](args);
// // //   delete context[sym];
// // //   return result;
// // // };

// // // x.myCall(obj, 'Smith');

// // // console.log(Object.getOwnPropertyDescriptors(obj));

// // // new binding

// // // let obj = {};
// // // let obj = new Object();

// // function Person(name) {
// //   this.name = name;
// // }

// // Person.prototype.greet = function () {
// //   console.log(`hello ${this.name}`);
// // };

// // const p = new Person('James');

// // p.greet();

// // Lexical binding -> this for arrow function

// // const p = {
// //   name: 'Bob',
// //   method: function () {
// //     function foo() {
// //       console.log(this);
// //     }

// //     foo();
// //   },
// // };

// // p.method();

// // const method = () => {
// //   console.log(this);
// // };
// // method.call(p);

// // function foo() {

// //   const bar = () => {
// //     console.log(this);
// //   };

// //   bar();
// // }

// // foo();
// const obj = {
//   name: 'Bob',
//   m: function () {
//     return function () {
//       console.log(this.name);
//     };
//   },
// };

// obj.m()();

const Person = (name) => {
  console.log(this);
};

const p = Person('James');

function P() {
  console.log(this);
}

P();
