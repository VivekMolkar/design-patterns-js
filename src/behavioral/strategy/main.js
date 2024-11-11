const { PaymentContext, CreditCardPayment, PayPalPayment, BankTransferPayment } = require('./index');

const paymentContext = new PaymentContext();
paymentContext.setPaymentStrategy(new CreditCardPayment());
paymentContext.processPayment(100);

paymentContext.setPaymentStrategy(new PayPalPayment());
paymentContext.processPayment(200);

paymentContext.setPaymentStrategy(new BankTransferPayment());
paymentContext.processPayment(300);
