const TransactionDecorator = require('./TransactionDecorator');

class LoggingDecorator extends TransactionDecorator {
  process(amount) {
    console.log(`[LOG] Initiating transaction of amount: $${amount}`);
    super.process(amount);
    console.log(`[LOG] Transaction completed for amount: $${amount}`);
  }
}

module.exports = LoggingDecorator;
