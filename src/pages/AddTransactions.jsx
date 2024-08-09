import React, { useState } from 'react';
import { useTransaction } from '../context/TransactionContext'; // Import the custom hook

const AddTransactions = ({ categories }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [categoryId, setCategoryId] = useState(categories[0]?.id || '');
  const [notes, setNotes] = useState('');

  const { addTransaction } = useTransaction(); // Access addTransaction from context

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date || !categoryId) {
      alert('Please fill in all required fields.');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date,
      categoryId: parseInt(categoryId),
      notes,
    };

    addTransaction(newTransaction); // Use context method to add transaction

    // Clear the form fields after submission
    setTitle('');
    setAmount('');
    setDate('');
    setCategoryId(categories[0]?.id || '');
    setNotes('');
  };

  return (
    <section className="section add-transactions-section">
      <div className="container">
        <div className="add-transaction-container">
          <h2>Add New Transaction</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter transaction title"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
              >
                {[
      { id: 1, name: 'Expense' },
      { id: 2, name: 'Income' },
      // { id: 3, name: 'Savings' },
    ].map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Notes:</label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Additional notes (optional)"
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">Add Transaction</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTransactions;
