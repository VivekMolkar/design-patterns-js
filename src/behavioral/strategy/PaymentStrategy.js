class PaymentStrategy {
  pay(amount) {
    throw new Error("Method 'pay()' must be implemented.");
  }
}

// Concrete Strategy: Credit Card Payment
class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid $${amount} using Credit Card.`);
  }
}

// Concrete Strategy: PayPal Payment
class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid $${amount} using PayPal.`);
  }
}

// Concrete Strategy: Bank Transfer Payment
class BankTransferPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid $${amount} using Bank Transfer.`);
  }
}

// Context Class
class PaymentContext {
  setPaymentStrategy(strategy) {
    this.strategy = strategy;
  }

  processPayment(amount) {
    if (!this.strategy) {
      throw new Error('Payment strategy not set.');
    }
    this.strategy.pay(amount);
  }
}

module.exports = { PaymentStrategy, CreditCardPayment, PayPalPayment, BankTransferPayment, PaymentContext };
