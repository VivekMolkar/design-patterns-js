// Tests for Decorator pattern

const {
  TransactionProcessor,
  LoggingDecorator,
  FraudDetectionDecorator,
} = require('../../../src/structural/decorator');

describe('TransactionProcessor', () => {
  test('should process a transaction', () => {
    const processor = new TransactionProcessor();
    console.log = jest.fn();

    processor.process(100);

    expect(console.log).toHaveBeenCalledWith('Processing transaction of amount: $100');
  });
});

describe('LoggingDecorator', () => {
  test('should log a transaction', () => {
    const processor = new TransactionProcessor();
    const loggingProcessor = new LoggingDecorator(processor);
    console.log = jest.fn();

    loggingProcessor.process(100);

    expect(console.log).toHaveBeenCalledWith('[LOG] Initiating transaction of amount: $100');
    expect(console.log).toHaveBeenCalledWith('Processing transaction of amount: $100');
    expect(console.log).toHaveBeenCalledWith('[LOG] Transaction completed for amount: $100');
  });
});

describe('FraudDetectionDecorator', () => {
  test('should detect fraud', () => {
    const processor = new TransactionProcessor();
    const fraudProcessor = new FraudDetectionDecorator(processor);
    console.log = jest.fn();

    fraudProcessor.process(100000);

    expect(console.log).toHaveBeenCalledWith('[ALERT] Potential fraud detected for amount: $100000');
  });

  test('should process a non-fraudulent transaction', () => {
    const processor = new TransactionProcessor();
    const fraudProcessor = new FraudDetectionDecorator(processor);
    console.log = jest.fn();

    fraudProcessor.process(100);

    expect(console.log).toHaveBeenCalledWith('Processing transaction of amount: $100');
  });
});

describe('LoggingDecorator + FraudDetectionDecorator', () => {
  test('should log and detect fraud', () => {
    const processor = new TransactionProcessor();
    const loggingProcessor = new LoggingDecorator(processor);
    const fraudProcessor = new FraudDetectionDecorator(loggingProcessor);
    console.log = jest.fn();

    fraudProcessor.process(100000);

    expect(console.log).toHaveBeenCalledWith('[ALERT] Potential fraud detected for amount: $100000');
  });

  test('should log and process a non-fraudulent transaction', () => {
    const processor = new TransactionProcessor();
    const loggingProcessor = new LoggingDecorator(processor);
    const fraudProcessor = new FraudDetectionDecorator(loggingProcessor);
    console.log = jest.fn();

    fraudProcessor.process(100);

    expect(console.log).toHaveBeenCalledWith('[LOG] Initiating transaction of amount: $100');
    expect(console.log).toHaveBeenCalledWith('Processing transaction of amount: $100');
    expect(console.log).toHaveBeenCalledWith('[LOG] Transaction completed for amount: $100');
  });
});
