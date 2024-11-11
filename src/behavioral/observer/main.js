const { BankTransaction, FraudDetectionService, NotificationService } = require('./index');

const bankTransaction = new BankTransaction();
const fraudDetectionService = new FraudDetectionService();
const notificationService = new NotificationService();

bankTransaction.attach(fraudDetectionService);
bankTransaction.attach(notificationService);

// Process a transaction and notify observers
bankTransaction.processTransaction(15000);
bankTransaction.processTransaction(5000);
