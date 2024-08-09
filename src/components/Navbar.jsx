import React from 'react'
import {Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="container">
            <h2 className="brand">
                <Link className='nav-link' to="/">Track</Link>
            </h2>
            <ul className='nav-list'>
                <li className="nav-item">
                    <NavLink 
                        className='nav-link' 
                        to="/" 
                        end 
                        activeClassName="active"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className='nav-link' 
                        to="/transactions" 
                        activeClassName="active"
                    >
                        Transactions
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className='nav-link' 
                        to="/report" 
                        activeClassName="active"
                    >
                        Report
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className='nav-link' 
                        to="/user_settings" 
                        activeClassName="active"
                    >
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
