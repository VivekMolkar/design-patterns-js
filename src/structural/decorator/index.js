// Entry file for Decorator pattern

module.exports = {
  TransactionProcessor: require('./TransactionProcessor'),
  TransactionDecorator: require('./TransactionDecorator'),
  FraudDetectionDecorator: require('./FraudDetectionDecorator'),
  LoggingDecorator: require('./LoggingDecorator'),
};
