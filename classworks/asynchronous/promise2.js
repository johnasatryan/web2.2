// const p = new Promise((resolve, reject) => {
//   resolve('resolved...'); // this.state = fulfilled
//   //  reject('rejected...'); // this.state = rejected
//   // throw new Error('hello'); // not allowed
// });

// p.then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.log('hello world');
// });

// console.log('synchronous code...');

// const p = fetch('https://google.com', {
//   method: 'GET',
// });

// p.then((value) => {
//   console.log(value);
// })
//   .catch((err) => {
//     console.log('You have a typo');
//   })
//   .finally(() => {
//     console.log('finally...');
//   });

// console.log('the whole program still runing...');

// p.then(() => {})
//   .then(() => {})
//   .then(() => {});

const p = new Promise((resolve, reject) => {
  resolve('resolve...');
  // reject('reject...');
});

// p.then(
//   (val) => {
//     console.log(val);
//   },
//   (rej) => {
//     console.log(rej);
//   },
// )
//   .finally(() => {
//     console.log('finally block...');
//   })
//   .then((val) => {
//     console.log(val);
//   });

// p.then((value) => {
//   return new Promise((resolve) => {
//     resolve('hello nested promise');
//   });
// })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value.message);
//   });

// new Promise((resolve) => {
//   resolve('hello nested promise');
// });

// Promise.resolve('hello netsted promise');

// static methods

// Promise.resolve(Promise.reject('reason...')).catch((reason) => {
//   console.log(reason);
// });

const p1 = Promise.resolve('promise 1');
const p2 = Promise.resolve('promise 2');
const p3 = Promise.resolve('promise 3');
const p4 = Promise.resolve('promise 4');

Promise.all;
Promise.allSettled;
Promise.any;
Promise.race;

// Promise.all([p1, p2, p3, p4])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.allSettled([p1, p2, p3, p4]).then((values) => {
//   console.log(values);
// });

// Promise.any([p1, p2, p3, p4])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race([p1, p2, p3, p4])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const pr = new Promise((resolve, reject) => {
//   resolve('hello reject');
// });

// pr.then(
//   (value) => {
//     console.log('fulfilled funcion, ', value);
//     throw new Error('some error');
//   },
//   (reason) => {
//     console.log('rejected function, ', reason);
//   },
// ).catch((err) => {
//   console.log(err);
// });
