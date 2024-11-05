const TransactionProcessor = require('./TransactionProcessor');
const LoggingDecorator = require('./LoggingDecorator');
const FraudDetectionDecorator = require('./FraudDetectionDecorator');

// Basic transaction processor
const transactionProcessor = new TransactionProcessor();

// Add logging and fraud detection
const decoratedProcessor = new FraudDetectionDecorator(new LoggingDecorator(transactionProcessor));

// Process transactions
decoratedProcessor.process(500); // Normal transaction
decoratedProcessor.process(15000); // Fraudulent transaction

const decoratedProcessor2 = new LoggingDecorator(new FraudDetectionDecorator(transactionProcessor));
decoratedProcessor2.process(500); // Normal transaction
decoratedProcessor2.process(15000); // Fraudulent transaction
