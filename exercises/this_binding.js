// // const obj = {
// //   arr: [1, 2, 3],
// //   sum() {
// //     return this.arr.map(
// //       function (v) {
// //         return v + this.inc;
// //       },
// //       { inc: 5 },
// //     );
// //   },
// // };

// // console.log(obj.sum());

// // const arr = [1, 2, 3];

// // function callback(value, index, array) {
// //   console.log(value);
// // }
// // const x = arr.map(callback);

// // console.log(x);

// Array.prototype.customMap = function (callback, thisArg) {
//   const result = [];

//   const length = this.length;

//   thisArg = thisArg || globalThis;
//   for (let i = 0; i < length; ++i) {
//     const res = callback.call(thisArg, this[i], i, this);
//     result.push(res);
//   }

//   return result;
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function multen(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; ++i) {
//     result.push(arr[i] * 10);
//   }
//   return result;
// }

// // console.log(multen(arr));

// // const x = arr.map((value) => value * 10);

// // console.log(x);

// const x = arr.map(
//   (value, index, thisArr) => {
//     return value;
//   },
//   { x: 4 },
// );

// console.log(x);
