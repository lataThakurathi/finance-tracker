import React from 'react'
import Transaction from '../components/Transaction';
import { useTransaction } from '../context/TransactionContext';

const TransactionsList = () => {
  const {transactions} = useTransaction();

    const categories = [
      { id: 1, name: 'Expense' },
      { id: 2, name: 'Income' },
      // { id: 3, name: 'Savings' },
    ];
  
    // const transactions = [
    //   {
    //     id: 1,
    //     title: 'Grocery Shopping',
    //     amount: -50.25,
    //     date: '2024-08-09',
    //     categoryId: 1,
    //     type: 'expense',
    //     notes: 'Bought groceries for the week'
    //   },
    //   {
    //     id: 2,
    //     title: 'Salary',
    //     amount: 1500.00,
    //     date: '2024-08-01',
    //     categoryId: 2,
    //     type: 'income',
    //     notes: 'Monthly salary deposit'
    //   },
    //   {
    //     id: 3,
    //     title: 'Electricity Bill',
    //     amount: -120.00,
    //     date: '2024-08-05',
    //     categoryId: 1,
    //     type: 'expense',
    //     notes: 'Paid electricity bill for July'
    //   },
    //   {
    //     id: 4,
    //     title: 'Dinner at Restaurant',
    //     amount: -60.00,
    //     date: '2024-08-07',
    //     categoryId: 1,
    //     type: 'expense',
    //     notes: 'Dinner with friends'
    //   },
    //   {
    //     id: 5,
    //     title: 'Savings Deposit',
    //     amount: 300.00,
    //     date: '2024-08-08',
    //     categoryId: 3,
    //     type: 'savings',
    //     notes: 'Transferred to savings account'
    //   }
    // ];  
    return (
    <section className='section transactions-section'>
      <div className="container">
      {
        transactions.map((transaction) => (<Transaction transaction={transaction} categories={categories}/>))
      }
      </div>
    </section>
  )
}

export default TransactionsList
