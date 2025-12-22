// // function* f1() {
// //   yield 1;
// //   yield 2;
// // }

// // function* f2() {
// //   yield 2;
// //   yield* f1();
// //   yield 3;
// // }

// // // const gen = f2();
// // // console.log(gen.next());
// // // console.log(gen.next());
// // // console.log(gen.next());
// // // console.log(gen.next());
// // // console.log(gen.next());

// // function YieldStar(iterable) {
// //   const iterator = iterable[Symbol.iterator]();

// //   let { value, done } = iterator.next();

// //   while (!done) {
// //     console.log(value);
// //     const next = iterator.next();
// //     value = next.value;
// //     done = next.done;
// //   }
// // }

// // //

// // YieldStar('hello');

// // console.log(Symbol.for('hello') === Symbol.for('hello'));

// // function generateUniqueId() {
// //   return Math.floor(Math.random() * 100);
// // }

// // function CustomSymbol(description) {
// //   if (new.target) {
// //     throw new Error('Symbol is not a constructor');
// //   }
// //   const customThis = {};
// //   customThis.id = generateUniqueId();
// //   customThis.description = description;

// //   return customThis;
// // }
// // CustomSymbol.globalMap = new Set();

// // Object.prototype.operatorEq = function (other) {
// //   return this.id === other.id && this.description === other.description;
// // };

// // CustomSymbol.for = function (description) {
// //   if (!CustomSymbol.globalMap.has(description)) {
// //     CustomSymbol.globalMap.add(description);
// //   }
// //   return description;
// // };

// // console.log(CustomSymbol.for('hello') === CustomSymbol.for('hello'));
// let hobby = 'dev';

// const obj = {
//   name: 'Bob',
//   age: 23,
//   [Symbol.iterator]: function () {
//     const keys = Object.keys(obj);
//     const ourThis = this;
//     let index = 0;
//     return {
//       next: function () {
//         return { value: ourThis[keys[index]], done: !(index++ < keys.length) };
//       },
//     };
//   },
// };

// // for (const item of obj) {
// //   console.log(item);
// // }

// const iterator = obj[Symbol.iterator]();
// // console.log(iterator.next());
// // console.log(iterator.next());

// for (const item of obj) {
//   console.log(item);
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static [Symbol.hasInstance] = function (someObj) {
    const keys = ['name', 'age'];
    const someObjKyes = Object.keys(someObj);

    for (let i = 0; i < someObjKyes.length; ++i) {
      if (!keys.includes(someObjKyes[i])) {
        return false;
      }
    }
    return true;
  };
}

const obj = {
  name: 'James',
  agge: 23,
  [Symbol.toPrimitive]: function (arg) {
    if (arg === 'number') {
      return this.agge;
    } else if (arg === 'string') {
      return this.name;
    }
  },
};

const obj2 = {
  name: 'James',
  agge: 23,
  [Symbol.toPrimitive]: function (arg) {
    if (arg === 'number') {
      return this.agge;
    } else if (arg === 'string') {
      return this.name;
    }
  },
};
