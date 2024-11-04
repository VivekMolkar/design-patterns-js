const Pizza = require('./Pizza');

class PepperoniPizza extends Pizza {
  prepare() {
    console.log('Preparing a Pepperoni Pizza.');
  }
}

module.exports = PepperoniPizza;
