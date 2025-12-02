// // // // // mixins

// // // // class Animal {
// // // //   eat() {
// // // //     console.log('Animal eats');
// // // //   }
// // // // }
// // // // const CanFly = (Base) =>
// // // //   class extends Base {
// // // //     fly() {
// // // //       console.log('flying...');
// // // //     }
// // // //   };

// // // // const CanSwim = (Base) =>
// // // //   class extends Base {
// // // //     swim() {
// // // //       console.log('swimming...');
// // // //     }
// // // //   };

// // // // class Duck extends CanSwim(CanFly(Animal)) {
// // // //   quack() {
// // // //     console.log('duck is quacking...');
// // // //   }
// // // // }

// // // // console.log(
// // // //   Object.getOwnPropertyNames(Duck.prototype.__proto__.__proto__.__proto__),
// // // // );

// // // // // class Duck extends CanFly {
// // // // //   quack() {
// // // // //     console.log('duck is quacking...');
// // // // //   }
// // // // // }

// // // class Animal {
// // //   eat() {}
// // // }

// // // class CanFly extends Animal {
// // //   fly() {}
// // // }

// // // class CanSwim extends CanFly {
// // //   swim() {}
// // // }

// // // class Duck extends CanSwim {
// // //   quack() {}
// // // }

// // // console.log(Object.getOwnPropertyNames(Duck.prototype));

// // const canFly = {
// //   fly() {
// //     console.log('flying');
// //   },
// // };

// // const canSwim = {
// //   swim() {
// //     console.log('swimming...');
// //   },
// //   dive() {
// //     console.log('diving...');
// //   },
// // };

// // function Duck() {}

// // Duck.prototype.quack = function () {
// //   console.log('quacking...');
// // };

// // Object.customAssign = function (target, ...source) {
// //   for (let j = 0; j < source.length; ++j) {
// //     const arr = Object.keys(source[j]);
// //     for (let i = 0; i < arr.length; ++i) {
// //       const key = arr[i];
// //       target[key] = source[key];
// //     }
// //   }
// // };

// // Object.customAssign(Duck.prototype, canFly, canSwim);

// // console.log(Object.getOwnPropertyNames(Duck.prototype));

// class A {
//   constructor() {
//     this.x = 12;
//     console.log('A ctor');
//   }

//   method1() {
//     console.log('A::method1');
//   }
// }

// class B extends A {
 
//   method2() {
//     console.log('B::method');
//   }
// }

// console.log(Object.getOwnPropertyNames(B.prototype));

// const b = new B();


// Abstract class 

