'use strict';

// // // const p = { name: 'James', age: 23 };

// // // new Object({ name: 'Bob', age: 23 });

// // // const x = new Object(3);

// // // console.log(x);

// // // const y = new Number(3);

// // // console.log(y);

// // // let a = 12;
// // // a.toFixed(); // new Number(a).toFixed()

// // // console.log(y.valueOf());

// // // const st = 'this is simple string';

// // // console.log(typeof st);
// // // console.log(st instanceof String);

// // // const person = { name: 'Bob' };

// // // const person2 = new Object(person);

// // // // console.log(person2);

// // // person2.age = 23;

// // // console.log(person);

// // const person = { name: 'James', age: 23 };

// // // console.log(Object.getOwnPropertyDescriptors(person));

// // Object.defineProperty(person, 'hobby', {
// //   value: 'developer',
// //   writable: true,
// // });

// // console.log(Object.getOwnPropertyDescriptors(person));

// // person.hobby = 'musician';

// // // console.log(person.hobby);

// const user = { name: 'Bob', email: 'bob@example.com' };

// Object.defineProperty(user, 'name', {
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });

// // user.name = 'Alice';
// console.log(Object.getOwnPropertyDescriptors(user));

// // Object.defineProperty(user, 'name', {
// //   configurable: true,
// // });
// // console.log(Object.getOwnPropertyDescriptors(user));

// // console.log(user);

// // delete user.email;
// // console.log(user);

// // delete user.name;
// // console.log(user);

// // console.log(Object.defineProperty(p, 'name', { value: 23 }));

// // console.log(Object.getOwnPropertyNames(Object.prototype));
// // delete Object.prototype.toString;

// const obj = {};

// Object.defineProperty(obj, 'x', {
//   value: 12,
//   configurable: false,
//   writable: true,
//   enumerable: true,
// });

// // console.log(Object.getOwnPropertyDescriptors(obj));

// Object.defineProperty(obj, 'x', {
//   writable: false,
//   configurable: true,
//   enumerable: false,
// });

const arr = [1, 2, 3];

for (let i = 0; i < arr.length; ++i) {}

// for (let i = 0; i < person.length; ++i) {
//   console.log(i);
// }

// for (const elem of person) {
//   console.log(elem);
// }

// Object.defineProperty(person, 'age', {
//   writable: true,
//   configurable: true,
//   enumerable: false,
// });

// for (const key in person) {
//   console.log(key);
//   console.log(person[key]);
// }

// console.log(person);
// console.log(Object.getOwnPropertyNames(person));

// person.hobby = undefined;

// Object.preventExtensions(person);

// console.log(Object.getOwnPropertyDescriptors(person));
// person.hobby = 'dev';

// person.name = 'Alice';
// console.log(person);

// console.log(Object.isExtensible(person));

// Object.seal(person);

// console.log(Object.getOwnPropertyDescriptors(person));
// Object.preventExtensions(person);

// delete person.age;

// Object.defineProperty(person, 'name', {
//   writable: true,
//   enumerable: true,
//   configurable: false,
// });

// Object.seal(person);
// console.log(Object.isSealed(person));
// console.log(Object.isExtensible(person));

// Object.freeze(person);

// console.log(Object.getOwnPropertyDescriptors(person));

const person = { _name: 'Bob', age: 23 };

// Object.defineProperty(person, 'name', {
//   get: function () {
    
//   }
// });

// console.log(person);
