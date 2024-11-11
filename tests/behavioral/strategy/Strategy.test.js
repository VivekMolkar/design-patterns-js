const {
  PaymentContext,
  CreditCardPayment,
  PayPalPayment,
  BankTransferPayment,
} = require('../../../src/behavioral/strategy');

describe('Payment Strategy Pattern', () => {
  let paymentContext;

  beforeEach(() => {
    paymentContext = new PaymentContext();
  });

  test('should process payment using Credit Card', () => {
    paymentContext.setPaymentStrategy(new CreditCardPayment());
    console.log = jest.fn();
    paymentContext.processPayment(100);
    expect(console.log).toHaveBeenCalledWith('Paid $100 using Credit Card.');
  });

  test('should process payment using PayPal', () => {
    paymentContext.setPaymentStrategy(new PayPalPayment());
    console.log = jest.fn();
    paymentContext.processPayment(200);
    expect(console.log).toHaveBeenCalledWith('Paid $200 using PayPal.');
  });

  test('should process payment using Bank Transfer', () => {
    paymentContext.setPaymentStrategy(new BankTransferPayment());
    console.log = jest.fn();
    paymentContext.processPayment(300);
    expect(console.log).toHaveBeenCalledWith('Paid $300 using Bank Transfer.');
  });
});
