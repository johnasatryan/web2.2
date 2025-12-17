// // // function* foo() {
// // //   console.log('hello world');
// // // }

// // // const gen = foo();

// // // console.log(Object.getOwnPropertyNames(foo.prototype.__proto__));

// // // function* foo() {
// // //   let x = 'hello';
// // //   yield 1;
// // // }

// // // const gen = foo();
// // // console.log(gen.next());

// // // function* foo() {
// // //   console.log('hello sync');
// // //   yield setTimeout(() => console.log('TimeOut'), 1000);
// // // }

// // // const gen = foo();

// // // console.log(gen.next());
// // // console.log('global sync');

// // // function foo() {
// // //   return [1, 2, 3];
// // // }

// // // function* bar() {
// // //   yield foo;
// // // }

// // // function* moo() {
// // //   yield 23;
// // //   return 'hello return';
// // // }

// // // const m = moo();
// // // console.log(m.next());
// // // console.log(m.next());
// // // console.log(m.next());

// // const arr = 'hello string';

// // // const iter = arr;
// // // console.log(iter.next());
// // // console.log(iter.next());
// // // console.log(iter.next());
// // // console.log(iter.next());

// // function* foo() {
// //   let value = yield 'inside function';
// //   console.log(value);
// // }

// // // const gen = foo();

// // // console.log(gen.next());
// // // console.log(gen.next('heroes'));

// // // function res() {
// // //   const arr = [];

// // //   for (let i = 0; i < 1_000_000; ++i) {
// // //     arr.push(Math.floor(Math.random() * 1000));
// // //   }
// // //   return arr;
// // // }

// // // const ids = res();
// // // for (let i = 0; i < ids.length; ++i) {
// // //   if (ids[i] === 999) {
// // //     console.log(i);
// // //     console.log('gta');
// // //     break;
// // //   }
// // // }

// // function* res() {
// //   for (let i = 0; i < 1_000_000; ++i) {
// //     yield Math.floor(Math.random() * 1000);
// //   }
// // }

// // const gen = res();
// // let i = 0;
// // while (true) {
// //   i++;
// //   const { value, done } = gen.next();

// //   if (done || value === 999) break;
// //   console.log(i);
// // }

// const sym1 = Symbol('hello');
// const sym2 = Symbol('hello');

// // const obj = { [{}]: 'James', [{}]: 'Bob' };

// // console.log(obj[{}]);
// // // console.log(obj);

// const mp = new Map();
// const o1 = {};
// const o2 = {};

// mp.set(o1, 'Bob'); // 0x1000
// mp.set(o2, 'James'); // 0x2000
// console.log(mp);
// console.log(mp.get(o1)); // 0x3000

// mp.set(1, 'hello');

// const s = new Map([
//   ['name', 'James'],
//   ['age', 23],
// ]);

// console.log(s);

Symbol.for('hello');
Symbol.for('hello');
Symbol.for('hello');
Symbol.for('hello');
Symbol.for('hello');
