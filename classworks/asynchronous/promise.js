// // function executor(resolve, reject) {
// //   console.log('hello executor');
// // }
// // // console.log('Before promise creation');

// // // const p = new Promise(executor);
// // // console.log('After promise creation');
// // // // executor();

// // class MyCustomPromise {
// //   constructor(executor) {
// //     executor();
// //   }
// // }

// // console.log('Before promise creation');

// // const p = new MyCustomPromise(executor);
// // console.log('After promise creation');

// const promise2 = new Promise((resolve, reject) => {
//   // console.log('Before resolve');
//   resolve('hello resolve');
//   // console.log('After resolve');
// });

// // promise.then((value) => {
// //   console.log(value);
// // });

// class CustomPromise {
//   constructor(executor) {
//     this.state = 'pending';
//     this.result = null;
//     let ourthis = this;

//     function resolve(value) {
//       if (ourthis.state !== 'pending') return;
//       ourthis.state = 'fulfilled';
//       ourthis.result = value;
//     }
//     executor(resolve);
//   }

//   then(callback) {
//     callback(this.result);
//   }
// }

// function executor(resolve, reject) {
//   // console.log('Before resolve');

//   resolve('hello resolve');

//   // console.log('After resolve');
// }
// const promise = new CustomPromise(executor);
// // console.log(promise);

// function resolve(result) {
//   console.log(result);
// }
// console.log('start');
// promise.then(resolve);
// promise2.then(resolve);
// // console.log(promise2);
// console.log('end');

// const promise = fetch('https://jsonplaceholder.typicode.com/posts');

// console.log('start');

// promise.then((value) => {
//   console.log(value);
// });

// console.log('end');

// console.log(promise);

const p1 = new Promise((resolve) => {
  resolve('promise1');
  setTimeout(() => {
    console.log('setTimeout');
  }, 1000);
  console.log('executor');
});

p1.then((result) => {
  console.log(result);
  setTimeout(() => {
    console.log('timeout inside promise');
  }, 500);
});
// const p2 = new Promise(() => {});
