const CheesePizza = require('./CheesePizza');
const PepperoniPizza = require('./PepperoniPizza');

class PizzaStore {
  createPizza(type) {
    switch (type) {
      case 'cheese':
        return new CheesePizza();
      case 'pepperoni':
        return new PepperoniPizza();
      default:
        throw new Error('Unknown pizza type.');
    }
  }

  orderPizza(type) {
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}

module.exports = PizzaStore;
