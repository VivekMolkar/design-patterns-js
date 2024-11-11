class BankTransaction {
  constructor() {
    this.observers = [];
    this.amount = 0;
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this.amount));
  }

  processTransaction(amount) {
    console.log(`Processing transaction of $${amount}`);
    this.amount = amount;
    this.notify();
  }
}

module.exports = BankTransaction;
