import React, { useState, useEffect } from 'react';
import { useTransaction } from '../context/TransactionContext'; // Import the custom hook
import { useParams, useNavigate } from 'react-router-dom'; // For routing
import categories from '../data/categories';

const EditTransaction = () => {
  const { id } = useParams(); // Get transaction id from route params
  const navigate = useNavigate(); // For navigation after saving

  const { transactions,getTransactionById, editTransaction } = useTransaction(); // Access context

  const [transaction, setTransaction] = useState(null);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [notes, setNotes] = useState('');


  const transactionFromContext = getTransactionById(parseInt(id))

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date || !categoryId) {
      alert('Please fill in all required fields.');
      return;
    }

    const updatedTransaction = {
      id: transaction.id,
      title,
      amount: parseFloat(amount),
      date,
      categoryId: parseInt(categoryId),
      notes,
    };

    editTransaction(updatedTransaction); // Use context method to edit transaction
    navigate('/transaction-list'); // Redirect after save
  };

  if (!transactionFromContext) return <p>Loading...</p>;

  return (
    <section className="section edit-transaction-section">
      <div className="container">
        <div className="edit-transaction-container">
          <h2>Edit Transaction</h2>
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
                {categories.map((category) => (
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

            <button type="submit" className="btn-submit">Save Changes</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditTransaction;
