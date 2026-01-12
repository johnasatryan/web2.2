function test() {
  try {
    try {
      throw new Error('Inner Error');
    } catch (e) {
      throw new Error('Outer Error');
    } finally {
      return 'From Finally';
    }
  } catch (e) {
    return e.message;
  }
}

console.log(test());
