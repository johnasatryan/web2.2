// // // // abstract class Musician {
// // // //   private name: string;
// // // //   abstract play();
// // // // }

// // // // class Pianist extends Musician {
// // // //   override play() {
// // // //     console.log('Pianist plays piano...');
// // // //   }
// // // // }

// // // // class Dholchi extends Musician {
// // // //   override play() {
// // // //     console.log('Dholchi plays dhol...');
// // // //   }
// // // // }

// // // // class Saksaphonist extends Musician {
// // // //   override play() {
// // // //     console.log('Saksaphonist plays saksaphon...');
// // // //   }
// // // // }

// // // // function bend(musicans: Musician[]) {
// // // //   for (const m of musicans) {
// // // //     m.play();
// // // //   }
// // // // }

// // // // const musicians = [new Saksaphonist(), new Dholchi(), new Pianist()];

// // // // bend(musicians);

// class Animal {
//   name: string = '';

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Cat extends Animal {}
// class Dog extends Animal {}

// class BengalCat extends Cat {}

// // // class CatFeeder {
// // //   feed(cat: Cat) {
// // //     console.log(`Feeding cat: ${cat.name}`);
// // //   }
// // // }

// // // class AnimalFeeder extends CatFeeder {
// // //   feed(animal: Animal) {
// // //     console.log(`feeding animal: ${animal.name}`);
// // //   }
// // // }

// // // class BengalCatFeeder extends CatFeeder {
// // //   feed(cat: BengalCat) {
// // //     console.log(`feeding bengalCat: ${cat.name}`);
// // //   }
// // // }

// // // function feeder(feeder: CatFeeder) {
// // //   feeder.feed(new Cat('Milo'));
// // // }

// // // feeder(new CatFeeder());

// // // feeder(new AnimalFeeder());
// // // feeder(new BengalCatFeeder());

// // class Person {
// //   private _name: string;

// //   constructor(name: string) {
// //     this.name = name;
// //   }

// //   set name(value: string) {
// //     if (!value) throw new Error('...');
// //     this._name = value;
// //   }

// //   get name(): string {
// //     return this._name;
// //   }
// // }

// // const p = new Person('James');
// // p.name = 'Bob';

// // class MyPerson {
// //   public name: string;

// //   constructor(name: string) {
// //     this.name = name;
// //   }
// // }

// // const p2 = new MyPerson('James');

// // class ZooShop {
// //   buyCat(name: string): Cat {
// //     return new Cat(name);
// //   }
// // }

// // class SpecialZooShop extends ZooShop {
// //   override buyCat(name: string): BengalCat {
// //     return new BengalCat(name);
// //   }
// // }

// // class AnyAnimal extends ZooShop {
// //   override buyCat(name: string): Animal {
// //     return new Animal(name);
// //   }
// // }

// // class ReadError extends Error {
// //   constructor(message) {
// //     super(message);
// //     this.name = 'ReadError';
// //   }
// // }

// // class FileRead {
// //   read(path: string): string {
// //     if (!path) {
// //       throw new ReadError("can't read the file");
// //     }
// //     return 'file content';
// //   }
// // }

// // class JSONFIleReader extends FileRead {
// //   override read(path: string): string {
// //     if (!path) {
// //       throw new TypeError("can't read the file");
// //     }
// //     return 'file content';
// //   }
// // }

// // function client(fileReader: FileRead, path: string) {
// //   try {
// //     fileReader.read(path);
// //   } catch (e) {
// //     if (e instanceof ReadError) {
// //       console.log('Something went wrong with file path');
// //     }

// //     throw e;
// //   }
// // }
// // client(new JSONFIleReader(), '');

// class Counter {
//   private count: number = 0;

//   constructor(value) {
//     this.count + value;
//   }

//   getCount() {
//     return this.count;
//   }
// }

// class StrongCounter extends Counter{
//   constructor(value) {
//     if (value < 0) throw new Error('Something went wrong');

//     super(value);
//   }
// }

// function client(c: Counter) {

// // }

// class A {
//   private name: string;

//   some(value) {
//     this.name = value;
//   }
// }

// class B extends A {
//   // public name: string = '';
//   override some(value) {
//     this.name = value;
//   }
// }

// const x = new A();

// x.name;

// interface Bird {
//   fly(): void;
//   walk(): void;
// }

// class Hawk implements Bird {
//   fly(): void {
//     console.log('Hawk flies...');
//   }
//   walk(): void {
//     console.log('Hawk walks...');
//   }
// }

// class Penguin implements Bird {
//   walk(): void {
//     console.log('Penguin walks...');
//   }
//   fly(): void {
//     throw new Error('...');
//   }
// }

interface FlyingBird {
  fly(): void;
}

interface Bird {
  walk(): void;
}

class Hawk implements FlyingBird, Bird {
  fly(): void {
    console.log('Hawk flies...');
  }
  walk(): void {
    console.log('Hawk walks...');
  }
}

class Penguin implements Bird {
  walk(): void {}
}


