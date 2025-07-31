import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar, TrendingUp } from 'lucide-react';

const LoanCalculators = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(60);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculatePayment = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm);
    
    if (rate === 0) {
      setMonthlyPayment(principal / term);
    } else {
      const payment = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      setMonthlyPayment(payment);
    }
  };

  React.useEffect(() => {
    calculatePayment();
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <div className="hero-icon">
              <Calculator size={48} />
            </div>
            <h1 className="page-title">Fleet Loan Calculators</h1>
            <p className="page-description">
              Comprehensive financial calculators to help you make informed decisions about 
              fleet financing, leasing, and equipment purchases.
            </p>
          </div>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="calculator-section">
            <div className="calculator-card">
              <h2>Vehicle Loan Calculator</h2>
              <div className="calculator-form">
                <div className="form-group">
                  <label htmlFor="loanAmount">
                    <DollarSign size={20} />
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    id="loanAmount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    min="1000"
                    max="1000000"
                    step="1000"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="interestRate">
                    <Percent size={20} />
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    id="interestRate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    min="0"
                    max="30"
                    step="0.1"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="loanTerm">
                    <Calendar size={20} />
                    Loan Term (months)
                  </label>
                  <input
                    type="number"
                    id="loanTerm"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    min="12"
                    max="120"
                    step="12"
                  />
                </div>
                
                <div className="result-section">
                  <div className="result-card">
                    <h3>Monthly Payment</h3>
                    <div className="payment-amount">
                      ${monthlyPayment.toFixed(2)}
                    </div>
                  </div>
                  
                  <div className="result-details">
                    <div className="detail-item">
                      <span>Total Interest:</span>
                      <span>${((monthlyPayment * loanTerm) - loanAmount).toFixed(2)}</span>
                    </div>
                    <div className="detail-item">
                      <span>Total Amount:</span>
                      <span>${(monthlyPayment * loanTerm).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="calculator-tools">
            <h2>Additional Financial Tools</h2>
            <div className="tools-grid">
              <div className="tool-card">
                <div className="tool-icon">
                  <TrendingUp size={32} />
                </div>
                <h3>ROI Calculator</h3>
                <p>Calculate the return on investment for new fleet vehicles and equipment.</p>
                <button className="tool-button">Coming Soon</button>
              </div>
              
              <div className="tool-card">
                <div className="tool-icon">
                  <DollarSign size={32} />
                </div>
                <h3>Lease vs Buy</h3>
                <p>Compare leasing versus buying options for your fleet vehicles.</p>
                <button className="tool-button">Coming Soon</button>
              </div>
              
              <div className="tool-card">
                <div className="tool-icon">
                  <Calculator size={32} />
                </div>
                <h3>Fuel Cost Calculator</h3>
                <p>Estimate fuel costs and savings with different vehicle types and routes.</p>
                <button className="tool-button">Coming Soon</button>
              </div>
              
              <div className="tool-card">
                <div className="tool-icon">
                  <Percent size={32} />
                </div>
                <h3>Insurance Calculator</h3>
                <p>Estimate insurance costs for different vehicle types and coverage levels.</p>
                <button className="tool-button">Coming Soon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculators;
