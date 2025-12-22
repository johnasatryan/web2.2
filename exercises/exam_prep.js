// // // // // for (let i = 0; i < 3; ++i) {
// // // // //   setTimeout(() => console.log(i), 1);
// // // // //   for (var j = 0; j < 3; ++j) {
// // // // //     setTimeout(() => console.log(i), 0);
// // // // //   }
// // // // // }

// // // // setTimeout(() => console.log('timeout'), 0);

// // // // Promise.resolve().then(() => {
// // // //   console.log('P1');
// // // //   Promise.resolve().then(() => {
// // // //     console.log('P2');
// // // //   });
// // // // });

// // // // for (let i = 0; i < 3; ++i) {}
// // // // console.log(i);

// // // {
// // //   let i = 32;
// // // }

// // // let i = 23;

// // // console.log(i);

// // // const p = Promise.resolve('done');

// // // p.then((v) => {
// // //   console.log('first', v);
// // //   setTimeout(() => {
// // //     console.log('timeout');
// // //     return 'next';
// // //   });
// // // }).then((v) => {
// // //   console.log('second', v);
// // // });

// // // console.log('sync');

// // new Promise((r) => {
// //   console.log('start');
// //   r();
// // })
// //   .then((v) => {
// //     console.log(v);
// //     return Promise.resolve("X");
// //   })
// //   .then(console.log);

// // console.log('Sync');

// // Promise.resolve(234324234)
// //   .then((v) => console.log(v))
// //   .then(() => {
// //     throw 'boom';
// //   })
// //   .catch((e) => console.log('caught', e))
// //   .then(() => console.log('2'));

// // const p1 = Promise.resolve('A');
// // const p2 = Promise.reject('B');

// // const pp = Promise.all([p1, p2]);

// // pp.then((value) => {
// //   console.log(value);
// // });

// // Promise.customAll = function (iterables) {
// //   const res = [];

// //   for (const item of iterables) {
// //     item
// //       .then((value) => {
// //         res.push(value);
// //       })
// //       .catch((err) => {
// //         return err;
// //       });
// //   }
// //   return Promise.resolve(res);
// // };

// // Promise.customAll([p1, p2])
// //   .then((values) => {
// //     console.log(values);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// const p = Promise.resolve()
//   .finally(() => {
//     return 23;
//   })
//   .then((v) => {
//     console.log(v);
//   });
// console.log(p);

let done = false;

// const p = new Promise((resolve) => {
//   setTimeout(() => {
//     done = true;
//     resolve('ok');
//   }, 10);
// // });

// fetch('https://google.com').then((value) => {
//   console.log(value);
// });

// setTimeout(() => {
//   console.log('timeout');
// }, 0);
// Promise.resolve(42)
//   .then((x) => {
//     console.log(x);
//     return x * 2;
//   })
//   .then((x) => {
//     console.log(x);
//   });

// Promise.resolve(1)
//   .then((x) => {
//     console.log(x);
//     return x * 2;
//   })
//   .then((x) => {
//     console.log(x);
//   });

// 2
Promise.resolve()
  .then(function f1() {
    console.log(2);
    return Promise.resolve();
  })
  .then(function f2() {
    console.log(3);
  });
Promise.resolve()
  .then(function f3() {
    console.log(4);
    Promise.resolve().then(function f4() {
      console.log(5);
    });
  })
  .then(function f5() {
    console.log(6);
  });

// 3
// Promise.resolve(1)
//   .then(x => {
//     console.log(x);
//     return new Promise(r => r(x * 2));
//   })
//   .then(x => console.log(x));
// Promise.resolve(7)
//   .then(x => {
//     console.log(x);
//     return x * 2;
//   })
//   .then(x => console.log(x));
