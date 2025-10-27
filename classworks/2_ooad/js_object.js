// // 1. Object literal

// const person = { name: 'Bob', age: 23 };

// // const reftoperson = {}
// // 2. new Object

// // const user = new Object();

// // // const user = {name: "Bob"};
// // console.log('Before changes');
// // console.log(`Person: ${person.name}: ${person.age}`);
// // console.log(`User: ${user.name}: ${user.age}`);

// // console.log('After changes');
// // console.log(`Person: ${person.name}: ${person.age}`);
// // console.log(`User: ${user.name}: ${user.age}`);
// // it is equal to user = person;

// // 3. Object.create

// // const obj = Object.create(null);
// const obj2 = Object.create({});

// obj2.toString();
// // obj.toString();

// console.log(obj2);

const user = {
  name: 'Alice',
  age: 24,
  isAdmin: false,
  greet: function () {
    console.log('Hello world');
  },
};

console.log(user.name);
console.log(user.age);

user.greet();
console.log(user.toString());

// {"key": "name", "value" : "ALice"}
