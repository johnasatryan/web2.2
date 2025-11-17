// // obj.__proto__ = { name: 'James' };

// // console.log('Internal prototype', obj.__proto__);
// // console.log('Internal prototype', Object.getPrototypeOf(obj));
// // console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj)));

// // console.log(Object.getOwnPropertyDescriptors(obj.__proto__));

// // console.log(obj.__proto__ === Object.__proto__);
// // console.log(obj.__proto__ === Object.prototype);

// // console.log(Object.getOwnPropertyNames(Object.prototype).__proto__);

// // function Person(name) {

// // }

// const obj = { a: 2 };

// // console.log(obj[Prototype] && obj.__proto__);

// // const anotherObject = Object.create(obj);

// // console.log(anotherObject.__proto__);
// // console.log(anotherObject.valueOf());// anotherObject.__proto__.__proto__

// // class Vehicle {
// //   constructor() {
// //     this.type = 'any';
// //   }
// // }

// // class Car extends Vehicle {
// //   constructor() {
// //     super();
// //     this.engine = 'some engine';
// //   }
// // }

// // class ELectricCar extends Car {
// //   constructor() {
// //     super();
// //     this.charger = 'charger';
// //   }
// // }

// // const ev = new ELectricCar();

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.method = function () {
//   console.log('esiminch');
// };

// const p = new Person('James');

// const p2 = { name: 'James' };

// console.log(p);

// console.log(Person.prototype);

class Person {
  method() {
    console.log('esiminch');
  }
}

// const p3 = new Person();

// console.log(Object.getOwnPropertyDescriptors(p3.__proto__));

// const obj = {};

// delete Object.prototype.toString;

// console.log(obj.toString)

const obj = Object.create(null);

console.log(obj.__proto__);

