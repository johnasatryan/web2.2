// // async function foo() {
// //   return 13;
// // }

// // async function bar() {
// //   return await foo();
// // }

// // bar().then((value) => {
// //   console.log(value);
// // });

// // function outputUser(object) {
// //   console.log(object);
// // }

// // function fetch_user() {
// //   let user = null;

// //   return Promise.resolve({ name: 'James', age: 12 });
// // }

// // fetch_user().then((value) => {
// //   console.log(value);
// // });

// async function fetchUser() {
//   return await Promise.resolve({ name: 'James' });
// }

// fetchUser().then((value) => {
//   console.log(value);
// });

// fetch('https://google.com').then((value) => {
//   console.log(value);
// });

async function fetchGoogleData() {
  try {
    const res = await fetch('https://google.com');
    return await console.log();
  } catch (err) {
    console.log(err.message);
  }
}

(async function () {
  console.log(await fetchGoogleData());
})();
