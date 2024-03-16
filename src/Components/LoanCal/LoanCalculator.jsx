import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './LoanCal.css'

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanDuration, setLoanDuration] = useState(12);

  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = loanDuration * 12;
    const factor = (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
    return (loanAmount * factor).toFixed(2);
  };

  return (
    <div className="loan-calculator L">
      <h2 className='LoanHead'>LOAN CALCULATOR</h2>
      <div className="input-field LoanCom">
        <label>Loan Amount: RS.{loanAmount}</label><br></br>
        < InputRange
          minValue={10000}
          maxValue={1000000}
          value={loanAmount}
          onChange={value => setLoanAmount(value)}
        />
      </div>
      <div className="input-field LoanCom">
        <label>Interest Rate: {interestRate}%</label>
        <InputRange
          minValue={1}
          maxValue={20}
          value={interestRate}
          onChange={value => setInterestRate(value)}
        />
      </div>
      <div className="input-field LoanCom">
        <label>Loan Duration: {loanDuration} years</label>
        <InputRange
          minValue={1}
          maxValue={30}
          value={loanDuration}
          onChange={value => setLoanDuration(value)}
        />
      </div>
      <div className="result LoanCom r">
        <h3>Monthly Payment: RS.{calculateMonthlyPayment()}</h3>
      </div>
    </div>
  );
}

export default LoanCalculator;
