import React, { useState } from 'react';
import { useTransactions } from '../context/TransactionContext';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Home() {
  const { transactions } = useTransactions();

  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'Income')
    .reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === 'Expense')
    .reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);

  const balance = totalIncome - totalExpenses;

  const [savingsPercentage, setSavingsPercentage] = useState(0);
  const [goalEntered, setGoalEntered] = useState(false);

  const savingsGoal = (savingsPercentage / 100) * totalIncome;
  const savedAmount = totalIncome - totalExpenses;
  const savingsProgress = savingsGoal ? Math.min((savedAmount / savingsGoal) * 100, 100) : 0;

  const handleSetGoal = () => {
    if (savingsPercentage <= 0 || savingsPercentage > 100) {
      alert('Please set a valid savings percentage between 1 and 100.');
      return;
    }
    setGoalEntered(true);
  };

  const data = {
    labels: ['Total Income', 'Total Expenses', 'Balance'],
    datasets: [
      {
        label: 'Total Income',
        data: [totalIncome, 0, 0],
        borderColor: 'green',
        backgroundColor: 'rgb(252, 255, 252)',
        fill: true,
        tension: 0.1,
      },
      {
        label: 'Total Expenses',
        data: [0, totalExpenses, 0],
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        fill: true,
        tension: 0.1,
      },
      {
        label: 'Balance',
        data: [0, 0, balance],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Graphique des revenus, dépenses et solde',
      },
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="home-page">
      <h1>Welcome to masrrofy: your budget tracker</h1>

      <div className="overview">
      
        <div className="ligne-box">
          <div className="box">
            <p><strong>Total Income: </strong>{totalIncome.toFixed(2)}dz</p>
          </div>
          <div className="box">
            <p><strong>Total Expenses: </strong>{totalExpenses.toFixed(2)}dz </p>
          </div>
          <div className="box">
            <p><strong>Balance: </strong>{balance.toFixed(2)}dz</p>
          </div>
        </div>
      </div>

      <div className="graph-goal-container">
        <div className="chart-container">
          <h2>Graphique</h2>
          <Line data={data} options={options} />
        </div>

        <div className="goal-section">
          <h2>Set Your Savings Goal</h2>
          <div className="add-goal-form">
            <label htmlFor="savings-percentage-input">
              Enter Savings Percentage (%):
              <input
                id="savings-percentage-input"
                type="number"
                value={savingsPercentage}
                onChange={(e) => setSavingsPercentage(Number(e.target.value))}
                placeholder="Enter your savings percentage"
                min="1"
                max="100"
              />
            </label>
            <button onClick={handleSetGoal}>Set Goal</button>
          </div>

          {goalEntered && (
            <div className="goal-progress">
              <p>Goal: {savingsGoal.toFixed(2)}dz</p>
              <p>Amount Saved: {savedAmount.toFixed(2)}dz</p>
              <p>
                Progress: {savingsProgress.toFixed(2)}%{' '}
                {savingsProgress >= 100 && '(Goal Achieved!)'}
              </p>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${savingsProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
