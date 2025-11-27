function foo() {
  const str =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque deserunt praesentium vero dolores quod saepe enim sed quam, harum possimus. Asperiores voluptate quo velit modi vel excepturi numquam, optio nulla.';

  return function () {
    console.log(str);
  };
}

const x = foo();

x();
