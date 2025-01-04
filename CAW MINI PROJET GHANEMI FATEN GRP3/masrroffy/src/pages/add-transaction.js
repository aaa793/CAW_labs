import React, { useState } from 'react';
import { useTransactions } from '../context/TransactionContext';

const AddTransaction = () => {
  const { addTransaction } = useTransactions();
  const [name, setName] = useState('');
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      name,
      type,
      category: type === 'Expense' ? category : '',
      amount: parseFloat(amount),
      date,
      notes,
    };

    addTransaction(newTransaction);

    setName('');
    setType('Income');
    setCategory('');
    setAmount('');
    setDate('');
    setNotes('');
  };

  return (
    <div className="add-transaction-page">
      <form className="add-transaction-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Add Transaction</h2>

        <div className="form-group">
          <label htmlFor="name" className="form-label">Transaction Name</label>
          <input
            id="name"
            type="text"
            className="form-input"
            placeholder="Enter transaction name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type" className="form-label">Transaction Type</label>
          <select
            id="type"
            className="form-input"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        {type === 'Expense' && (
          <div className="form-group">
            <label htmlFor="category" className="form-label">Category</label>
            <select
              id="category"
              className="form-input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="Groceries">Groceries</option>
              <option value="Transportation">Transportation</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Health">Health</option>
              <option value="Utilities">Utilities</option>
            </select>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="amount" className="form-label">Amount </label>
          <input
            id="amount"
            type="number"
            className="form-input"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            id="date"
            type="date"
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="notes" className="form-label">Notes (optional)</label>
          <textarea
            id="notes"
            className="form-input"
            placeholder="Add any notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button className="form-button" type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
