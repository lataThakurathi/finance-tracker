import React, { createContext, useState, useContext } from 'react';
import initialTransactions from '../data/transactions';

// Create the TransactionContext
const TransactionContext = createContext();

// Create a provider component
export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialTransactions);

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const removeTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };


  const editTransaction = (updatedTransaction) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
    );
  };

  const getTransactionById = (id)=>{
    return transactions.find((t) => t.id === id);
  }

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, removeTransaction,editTransaction, getTransactionById }}>
      {children}
    </TransactionContext.Provider>
  );
};

// Create a custom hook to use the TransactionContext
export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransaction must be used within a TransactionProvider');
  }
  return context;
};
