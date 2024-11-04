// Singleton pattern implementation

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return;
    }

    this.value = Math.random();

    Singleton.instance = this;
  }

  getValue() {
    return this.value;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

module.exports = Singleton;
