const TransactionDecorator = require('./TransactionDecorator');

class FraudDetectionDecorator extends TransactionDecorator {
  process(amount) {
    if (this.isFraudulent(amount)) {
      console.log(`[ALERT] Potential fraud detected for amount: $${amount}`);
      return;
    }
    super.process(amount);
  }

  isFraudulent(amount) {
    // Example fraud detection logic: flag transactions over $10,000 as suspicious
    return amount > 10000;
  }
}

module.exports = FraudDetectionDecorator;
