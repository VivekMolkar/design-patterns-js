class Pizza {
  prepare() {
    throw new Error('This method must be overridden!');
  }

  bake() {
    console.log('Baking the pizza.');
  }

  cut() {
    console.log('Cutting the pizza.');
  }

  box() {
    console.log('Boxing the pizza.');
  }
}

module.exports = Pizza;
