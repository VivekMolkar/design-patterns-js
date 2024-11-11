const Observer = require('./Observer');

class FraudDetectionService extends Observer {
  update(amount) {
    if (amount > 10000) {
      console.log(`[ALERT] Potential fraud detected for amount: $${amount}`);
    } else {
      console.log('Transaction is within safe limits.');
    }
  }
}

module.exports = FraudDetectionService;
