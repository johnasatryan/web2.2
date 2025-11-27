// // function foo(name) {
// //   console.log(arguments);
// // }

// // foo('James', 2, 3);

// // function foo(...hello) {
// //   console.log(hello);
// // }

// // foo(1, 2, 3);

// function mutant_max(...args) {
//   if (args.length === 2) {
//     return args[0] > args[1] ? args[0] : args[1];
//   }

//   let m = args[0];
//   for (let i = 1; i < args.length; ++i) {
//     if (m < args[i]) {
//       m = args[i];
//     }
//   }
//   return m;
// }

// console.log(mutant_max(2, 4));
// console.log(mutant_max(1, 5, 2, 64, 21));

function f1() {
  console.log(arguments);
  console.log('f1');
}

function f2(...args) {
  f1(args);
}

f2();
