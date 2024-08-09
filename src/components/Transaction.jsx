import React from 'react';
import { FaDumpster, FaPencilAlt } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useTransaction } from '../context/TransactionContext';

const Transaction = ({ transaction, categories }) => {
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  };
  const {removeTransaction} = useTransaction()

    return (
        <div className={`transaction ${transaction.categoryId === 1 ? "transaction-expense" : "transaction-income"}`}>
            <div className='expense-summary'>
                <p className='transaction-title'>{transaction.title}</p>
                <p className={transaction.amount > 0 ? 'amount-positive' : 'amount-negative'}>
                <span className='currency-symbol'>Rs. </span> 
                <span>
                    {Math.abs(transaction.amount)}
                </span>
                </p>
            </div>
            <div className="transaction-control">
                <FaTrashCan onClick={() => {
                    removeTransaction(transaction.id)
                }}  className='delete-icon'/>

                <Link to={`/transactions/edit/${transaction.id}`}>
                    <FaPencilAlt className='edit-transaction'/>
                </Link>
            </div>
      </div>
  );
};

export default Transaction;
