const LoanApplication = require('./LoanApplication');

class LoanApplicationBuilder {
  constructor() {
    this.loanApplication = new LoanApplication();
  }

  setLoanType(type) {
    this.loanApplication.loanType = type;
    return this;
  }

  setAmount(amount) {
    this.loanApplication.amount = amount;
    return this;
  }

  setTerm(term) {
    this.loanApplication.term = term;
    return this;
  }

  setInterestRate(rate) {
    this.loanApplication.interestRate = rate;
    return this;
  }

  setCollateral(collateral) {
    this.loanApplication.collateral = collateral;
    return this;
  }

  build() {
    return this.loanApplication;
  }
}

module.exports = LoanApplicationBuilder;
