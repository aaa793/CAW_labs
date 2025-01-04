import React, { useState } from 'react';
import { useTransactions } from '../context/TransactionContext';

const TransactionList = () => {
  const { transactions, deleteTransaction, updateTransaction } = useTransactions();

  const [isEditing, setIsEditing] = useState(null);
  const [editData, setEditData] = useState({ name: '', category: '', amount: '', date: '' });
  const [filter, setFilter] = useState({ category: '', date: '' });

  const handleDelete = (id) => {
    deleteTransaction(id); 
  };

  const handleEdit = (transaction) => {
    setIsEditing(transaction.id);
    setEditData(transaction);
  };

  const handleUpdate = () => {
    updateTransaction(isEditing, editData);
    setIsEditing(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(null);
  };


  const filteredTransactions = transactions.filter((transaction) => {
    const matchesCategory = filter.category
      ? transaction.category === filter.category
      : true;
    const matchesDate = filter.date ? transaction.date === filter.date : true;
    return matchesCategory && matchesDate;
  });

  return (
    <div className="transaction-list-container">


 
      <div className="transaction-filters">
    
        <select
          value={filter.category}
          onChange={(e) => setFilter({ ...filter, category: e.target.value })}
        >
          <option value="">All</option>
          <option value="Groceries">Groceries</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Utilities">Utilities</option>
        </select>

  
        <input
          type="date"
          value={filter.date}
          onChange={(e) => setFilter({ ...filter, date: e.target.value })}
        />
      </div>

      <div className="transaction-list">
        {filteredTransactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            {isEditing === transaction.id ? (
              <div className="transaction-edit-form">
                <input
                  type="text"
                  value={editData.name}
                  placeholder="Transaction Name"
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                />
                <input
                  type="text"
                  value={editData.category}
                  placeholder="Category"
                  onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                />
                <input
                  type="number"
                  value={editData.amount}
                  placeholder="Amount"
                  onChange={(e) => setEditData({ ...editData, amount: e.target.value })}
                />
                <input
                  type="date"
                  value={editData.date}
                  onChange={(e) => setEditData({ ...editData, date: e.target.value })}
                />
                <button className="edit-button" onClick={handleUpdate}>
                  Save
                </button>
                <button className="delete-button" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            ) : (
              <div className="transaction-row">
                <span className="transaction-text">
                  <strong>{transaction.name}</strong>: {transaction.category} - {transaction.amount}dz ({transaction.date})
                </span>
                <div className="transaction-actions">
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(transaction)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(transaction.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
