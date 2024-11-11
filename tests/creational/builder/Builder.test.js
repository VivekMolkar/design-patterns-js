const { LoanApplicationBuilder } = require('../../../src/creational/builder');

describe('LoanApplicationBuilder', () => {
  it('should create a complete loan application with all properties', () => {
    const builder = new LoanApplicationBuilder();
    const loanApplication = builder
      .setLoanType('Personal Loan')
      .setAmount(50000)
      .setTerm(36)
      .setInterestRate(5.5)
      .setCollateral('Car')
      .build();

    expect(loanApplication.loanType).toBe('Personal Loan');
    expect(loanApplication.amount).toBe(50000);
    expect(loanApplication.term).toBe(36);
    expect(loanApplication.interestRate).toBe(5.5);
    expect(loanApplication.collateral).toBe('Car');
  });

  it('should create a loan application with only mandatory fields', () => {
    const builder = new LoanApplicationBuilder();
    const loanApplication = builder.setLoanType('Mortgage').setAmount(250000).setTerm(180).build();

    expect(loanApplication.loanType).toBe('Mortgage');
    expect(loanApplication.amount).toBe(250000);
    expect(loanApplication.term).toBe(180);
    expect(loanApplication.interestRate).toBeNull();
    expect(loanApplication.collateral).toBeNull();
  });
});
