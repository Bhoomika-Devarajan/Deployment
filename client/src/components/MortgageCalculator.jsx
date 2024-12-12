import React, { useState } from 'react';
import classes from './MortgageCalculator.module.css';

const MortgageCalculator = () => {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [term, setTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const calculatePayment = (e) => {
        e.preventDefault();
        const principalAmount = parseFloat(principal);
        const calculatedInterestRate = parseFloat(interestRate) / 100 / 12;
        const calculatedTerm = parseFloat(term) * 12;

        const x = Math.pow(1 + calculatedInterestRate, calculatedTerm);
        const monthly = (principalAmount * x * calculatedInterestRate) / (x - 1);

        setMonthlyPayment(monthly.toFixed(2));
    };

    return (
        <div className={classes.container}>
            <h2>Mortgage Calculator</h2>
            <form onSubmit={calculatePayment}>
                <div className={classes.inputGroup}>
                    <label>Principal Amount (₹):</label>
                    <input 
                        type="number" 
                        value={principal} 
                        onChange={(e) => setPrincipal(e.target.value)} 
                        required 
                    />
                </div>
                <div className={classes.inputGroup}>
                    <label>Annual Interest Rate (%):</label>
                    <input 
                        type="number" 
                        step="0.01" 
                        value={interestRate} 
                        onChange={(e) => setInterestRate(e.target.value)} 
                        required 
                    />
                </div>
                <div className={classes.inputGroup}>
                    <label>Term (years):</label>
                    <input 
                        type="number" 
                        value={term} 
                        onChange={(e) => setTerm(e.target.value)} 
                        required 
                    />
                </div>
                <button className={classes.buttonone} type="submit">Calculate</button>
            </form>
            {monthlyPayment && (
                <div className={classes.result}>
                    <h3>Estimated Monthly Payment:</h3>
                    <p>₹{monthlyPayment} INR</p>
                </div>
            )}
        </div>
    );
};

export default MortgageCalculator;
