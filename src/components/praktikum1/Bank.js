import React, { useState } from 'react';

const BankLoanCalculator = () => {
  const [loanValue, setLoanValue] = useState('');
  const [loanPeriod, setLoanPeriod] = useState(3); // Default loan period is 3 months
  const interestRate = 0.1; // 10% interest rate

  const calculateTotalRepayment = () => {
    const principal = parseFloat(loanValue);

    // Formula for calculating total repayment amount
    const totalRepayment =
      // (monthlyInterestRate * principal * numberOfPayments) + principal;
      (interestRate * principal * (loanPeriod/12)) + principal; // 

    return totalRepayment;
  };

  return (
    <div>
      <h2>Bank Loan Calculator</h2>
      <div>
        <label>
          Loan Value:
          <input
            type="number"
            value={loanValue}
            onChange={(e) => setLoanValue(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Loan Period:
          <select
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(parseInt(e.target.value))}
          >
            <option value={3}>3 months</option>
            <option value={6}>6 months</option>
            <option value={9}>9 months</option>
            <option value={12}>12 months</option>
          </select>
        </label>
      </div>
      <div>
        <p>Total Repayment: ${calculateTotalRepayment()}</p>
      </div>
    </div>
  );
};

export default BankLoanCalculator;
