interface Animal {
  canSwim();
}

interface CanFly {
  canFly();
}

interface CanQuack {
  canQuack();
}

class Duck implements Animal, CanFly, CanQuack {
  canSwim() {}
  canFly() {}
  canQuack() {}
}
