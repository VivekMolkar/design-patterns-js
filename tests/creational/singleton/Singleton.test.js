// Tests for Singleton pattern

const Singleton = require('../../../src/creational/singleton');

describe('Singleton Pattern', () => {
  test('should create an instance of Singleton', () => {
    const instance = Singleton.getInstance();
    expect(instance).toBeInstanceOf(Singleton);
  });

  test('getInstance should always return the same instance', () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    expect(instance1).toBe(instance2);
  });

  test('value property should be the same for all instances', () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    expect(instance1.value).toBe(instance2.value);
  });

  test('getValue should return the correct value', () => {
    const instance = Singleton.getInstance();
    const value = instance.getValue();

    expect(value).toBe(instance.value);
  });
});
