// // class Base {
// //   constructor() {
// //     console.log('hello world');
// //     if (new.target === Base) {
// //       throw new Error("Abstract class can't be instanciated ");
// //     }
// //     if (!Object.getOwnPropertyNames(this.__proto__).includes('method')) {
// //       throw new Error('still abstract');
// //     }
// //   }
// //   method() {
// //     throw new Error('Abstract method');
// //   }
// // }

// // class Derived extends Base {

// //   method() {
// //     console.log('derived::method');
// //   }
// // }

// // const der = new Derived();

// // class Animal {
// //   /* @interface class Animal */

// //   constructor() {
// //     if (new.target === Animal) {
// //       throw new Error("Abstract class can't have instance");
// //     }
// //   }
// //   canSwim() {
// //     throw new Error('Abstract method swim');
// //   }
// //   canFly() {
// //     throw new Error('Abstract method fly');
// //   }

// //   canQuack() {
// //     throw new Error('Abstract method quack');
// //   }
// // }

// // class Duck extends Animal {
// //   constructor(color) {
// //     super();
// //     this.color = color;
// //   }

// //   canSwim() {
// //     console.log('Duck is swimming');
// //   }

// //   canFly() {
// //     console.log('Duck is flying');
// //   }

// //   canQuack() {
// //     console.log('Duck is quacking...');
// //   }
// // }

// // class Penguin extends Animal {
// //   constructor(weight) {
// //     super();
// //     this.weight = weight;
// //   }

// //   canSwim() {
// //     console.log('Penguin is swimming...');
// //   }

// //   canFly() {}
// // }

// // const donald = new Duck('black');

// // donald.canFly();
// // donald.canSwim();
// // donald.canQuack();

// class Animal {
//   constructor() {
//     if (new.target === Animal) {
//       throw new Error('');
//     }
//   }
//   canSwim() {
//     throw new Error('Abstract method');
//   }
// }

// class CanFly {
//   constructor() {
//     if (new.target === CanFly) {
//       throw new Error();
//     }
//   }

//   fly() {
//     throw new Error('Fly abstract method');
//   }
// }

// class CanQuack {
//   constructor() {
//     if (new.target === CanQuack) {
//       throw new Error();
//     }
//   }

//   quack() {
//     throw new Error('Fly abstract method');
//   }
// }

// // class Duck extends CanFly, CanQuack, Animal {
  
// // }

// class Penguin extends Animal {
//   canSwim() {

//   }
// }

