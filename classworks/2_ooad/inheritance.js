// class Person {
//   #name;
//   #age;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sleep() {
//     console.log('Person sleeps');
//   }

//   set name(value) {
//     if (!value) {
//       throw new Error("Name can't be undefined");
//     }
//     this.#name = value;
//   }

//   get name() {
//     return this.#name;
//   }

//   set age(value) {
//     if (!value) {
//       throw new Error("Age can't be undefined");
//     }
//     this.#age = value;
//   }

//   get age() {
//     return this.#age;
//   }
// }

// const p = new Person('James', 14);

// class Student extends Person {
//   #avg_score;

//   constructor(name, age, avg_score) {
//     super(name, age);
//     this.avg_score = avg_score;
//   }

//   sleep() {
//     console.log('Student sleeps...');
//   }
//   set avg_score(value) {
//     if (!value) {
//       throw new Error("Avg score can't be empty");
//     }
//     this.#avg_score = value;
//   }

//   get avg_score() {
//     return this.#avg_score;
//   }
// }

// // const s = new Student('James', 34, 80.4);
// // console.log(s.name);
// // console.log(s.age);
// // console.log(s.avg_score);

// // s.sleep();

// class Vehicle {
//   constructor(type) {
//     this.type = type;
//     console.log('Vehicle constructor');
//   }
// }

// class Car extends Vehicle {
//   constructor(type, model) {
//     super(type);
//     this.model = model;
//     console.log('Car constructor');
//   }
// }

// class ElectricCar extends Car {
//   constructor(type, model, range) {
//     super(type, model);
//     this.range = range;
//     console.log('ElectricCar constructor');
//   }
// }

// // const v = new Vehicle('any');

// // const c = new Car('car', 'Audi');

// const ec = new ElectricCar('car', 'BMW', 500);

// console.log(ec);

class User {
  #fullName;
  #password;
  #email;

  constructor(fullName, password, email) {
    this.password = password;
  }

  set password(value) {
    if (value.length < 6) {
      throw new Error('Password must be at least 6 symbols');
    }
    if (value.toLowerCase() === value) {
      throw new Error('Password must have at least one UpperCase character');
    }
    this.#password = value;
  }
}

class AdminUser extends User {
  #is_admin;

  constructor(fullName, password, email, isAdmin = false) {
    super(fullName, password, email);
    this.isAdmin = isAdmin;
  }

  set isAdmin(value) {
    this.#is_admin = value;
  }

  set password(value) {
    super.password = value;
  }
}

const adminUser = new AdminUser(
  'James Smith',
  'Password',
  'james@example.com',
  true,
);


 
