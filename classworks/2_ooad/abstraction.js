// constructor function

// // function Person(name, age) {
// //   this.name = name;
// //   this.age = age;

// //   return 132;
// // }

// // // this = {};
// // // if (tk[0] === 'return') {
// // //   if (typeof tk[1] != 'object') {
// // //     return this;
// // //   }
// // // }

// // const p = new Person('James', 21);

// // console.log(p);

// // function Per(name, age) {
// //   This = {};
// //   This.name = name;
// //   This.age = age;
// //   // stugum
// //   return This;
// // }

// // const x = Per('Bob', 22);
// // console.log(x);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   console.log(this);
//   return 132;
// }

// const p = new Person('Bob', 23);

// console.log(p);

// const t = new Person('Ann', 20);

// function constructor

// const foo = new Function('a', 'b', `return a + b`);

// function foo(a, b) {
//   return a + b;
// }

// console.log(foo(1, 3));

// eval('var x = 23');

// console.log(x);

// function Person() {

// }

class Person {
  constructor(name = 'James', age) {
    this.name = name;
    this.age = age;
  }
}

const n = new Person(54);
console.log(n);
