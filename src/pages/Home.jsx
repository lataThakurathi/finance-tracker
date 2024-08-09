import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='section hero-section'>
      <div className="container">
        <h1 className="heading">Keep Track</h1>
        <div className="hero-cta-wrapper">
          <Link className="btn btn-primary" to="/transactions">View All Transactions</Link>
          <Link className="btn btn-secondary" to="/transactions/add">Add Transaction</Link>
        </div>
      </div>
    </section>
  )
}

export default Home
