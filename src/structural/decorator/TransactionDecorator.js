// Decorator pattern implementation

class TransactionDecorator {
  constructor(transactionProcessor) {
    this.transactionProcessor = transactionProcessor;
  }

  process(amount) {
    this.transactionProcessor.process(amount);
  }
}

module.exports = TransactionDecorator;
