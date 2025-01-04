import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { useTransactions } from '../context/TransactionContext';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  ArcElement, 
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement, 
  Title,
  Tooltip,
  Legend
);

const TransactionCharts = () => {
  const { transactions } = useTransactions();


  const incomeData = transactions.filter((transaction) => transaction.type === 'Income');
  const expenseData = transactions.filter((transaction) => transaction.type === 'Expense');

  const pieData = expenseData.length > 0 ? {
    labels: expenseData.map((item) => item.category),
    datasets: [
      {
        data: expenseData.map((item) => item.amount),
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
      },
    ],
  } : {
    labels: [],
    datasets: [{ data: [] }],
  };


  const barData = {
    labels: ['Current Month'],
    datasets: [
      {
        label: 'Income',
        data: [incomeData.reduce((sum, item) => sum + item.amount, 0)],
        backgroundColor: '#33FF57',
      },
      {
        label: 'Expense',
        data: [expenseData.reduce((sum, item) => sum + item.amount, 0)],
        backgroundColor: '#FF5733',
      },
    ],
  };


  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Income',
        data: incomeData.map((item) => item.amount), 
        backgroundColor: 'rgba(51, 255, 87, 0.2)',
        fill: true,
        tension: 0.4, 
      },
      {
        label: 'Expense',
        data: expenseData.map((item) => item.amount), 
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="transaction-charts-container">
     
      <div className="charts-row">
        <div className="chart">
        <h3>Category-wise Expense Distribution</h3>
          {pieData.labels.length > 0 ? (
            <Pie data={pieData} />
          ) : (
            <p>No expense data available</p>
          )}
        </div>

        <div className="chart">
          <h3>Income vs Expenses (Current Month)</h3>
          <Bar data={barData} />
        </div>
      </div>

      <div className="chart">
        
      <h3>Annual Transactions</h3>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default TransactionCharts;
