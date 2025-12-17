// function reading(callback) {
//   setTimeout(() => {
//     console.log('reading a book...');
//     callback();
//   }, 1500);
// }

// function coding(callback) {
//   setTimeout(() => {
//     console.log('implemnenting assignments...');
//     callback();
//   }, 2500);
// }

// function lunch(callback) {
//   setTimeout(() => {
//     console.log('eating...');
//     callback();
//   }, 2000);
// }

// function sleep(callback) {
//   setTimeout(() => {
//     console.log('sleeping...');

//     callback();
//   }, 3000);
// }

// reading(() => {
//   coding(() => {
//     lunch(() => {
//       sleep(() => {
//         console.log('routine finished...');
//       });
//     });
//   });
// });

// function fn() {
//   let res = [];
//   for (var i = 0; i < 4; ++i) {
//     res.push(() => {
//       return (
//         (function () {
//           var x = i;
//           return x;
//         })() * 2
//       );
//     });
//   }
//   return res;
// }

// const functions = fn();

// console.log(functions[0]());
// console.log(functions[1]());
// console.log(functions[2]());
// console.log(functions[3]());

// for (let i = 0; i < 4; ++i) {}

// console.log(i);

// const btn = document.getElementById('btn');
// const h1 = document.getElementsByTagName('h1')[0];

// btn.addEventListener('click', () => {
//   console.log('hello world');
//   h1.innerText = 'esiminch';
// });

// const xml = new XMLHttpRequest();

// xml.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// xml.onload = function () {
//   if (xml.status === 200) {
//     console.log(xml.responseText);
//   }
// };

// xml.send();

// fetch('https://picsart.academy').then((res) => {
//   console.log(res.json());
// });
