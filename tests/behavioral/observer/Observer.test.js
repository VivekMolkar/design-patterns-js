// Tests for Observer pattern

const {
  Observer,
  BankTransaction,
  FraudDetectionService,
  NotificationService,
} = require('../../../src/behavioral/observer');

describe('Observer Pattern', () => {
  let bankTransaction;
  let fraudDetectionService;
  let notificationService;

  beforeEach(() => {
    bankTransaction = new BankTransaction();
    fraudDetectionService = new FraudDetectionService();
    notificationService = new NotificationService();

    // Mock the update method for the observers
    jest.spyOn(fraudDetectionService, 'update').mockImplementation();
    jest.spyOn(notificationService, 'update').mockImplementation();

    bankTransaction.attach(fraudDetectionService);
    bankTransaction.attach(notificationService);
  });

  it('should notify all observers when a transaction is processed', () => {
    bankTransaction.processTransaction(20000);

    expect(fraudDetectionService.update).toHaveBeenCalledWith(20000);
    expect(notificationService.update).toHaveBeenCalledWith(20000);
  });

  it('should not notify a detached observer', () => {
    bankTransaction.detach(fraudDetectionService);
    bankTransaction.processTransaction(5000);

    expect(fraudDetectionService.update).not.toHaveBeenCalled();
    expect(notificationService.update).toHaveBeenCalledWith(5000);
  });
});
