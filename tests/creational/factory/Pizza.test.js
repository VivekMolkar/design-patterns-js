const { Pizza, PepperoniPizza, CheesePizza, PizzaStore } = require('../../../src/creational/factory');

describe('Pizza', () => {
  test('should throw an error when calling prepare', () => {
    const pizza = new Pizza();
    expect(() => pizza.prepare()).toThrow('This method must be overridden!');
  });
});

describe('CheesePizza', () => {
  test('should prepare a Cheese Pizza', () => {
    const cheesePizza = new CheesePizza();
    expect(cheesePizza.prepare()).toBeUndefined(); // Since it just logs
  });
});

describe('PepperoniPizza', () => {
  test('should prepare a Pepperoni Pizza', () => {
    const pepperoniPizza = new PepperoniPizza();
    expect(pepperoniPizza.prepare()).toBeUndefined(); // Since it just logs
  });
});

describe('PizzaStore', () => {
  let store;

  beforeEach(() => {
    store = new PizzaStore();
  });

  test('should create a CheesePizza when ordering cheese', () => {
    const pizza = store.orderPizza('cheese');
    expect(pizza).toBeInstanceOf(CheesePizza);
  });

  test('should create a PepperoniPizza when ordering pepperoni', () => {
    const pizza = store.orderPizza('pepperoni');
    expect(pizza).toBeInstanceOf(PepperoniPizza);
  });

  test('should throw an error for unknown pizza type', () => {
    expect(() => store.orderPizza('unknown')).toThrow('Unknown pizza type.');
  });
});
