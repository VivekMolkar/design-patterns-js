const Pizza = require('./Pizza');

class CheesePizza extends Pizza {
  prepare() {
    console.log('Preparing a Cheese Pizza.');
  }
}

module.exports = CheesePizza;
