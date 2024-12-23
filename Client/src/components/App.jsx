import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet }  from 'react-router-dom';
import Transactions from '../components/Transactions';
import AddTransactions from '../components/AddTransactions';
import Balance from '../components/Balance'
import Budget from '../components/Budget'
import '/src/App.css'

function App() {
  // Add Transaction Tab works normally
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }

  return (
    <Router>
      <div className={`container d-flex flex-column align-items-center ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <h1>X-PENSE</h1>
        <h6>A Budget Tracker At Your Fingertips</h6>
        <button onClick={toggleDarkMode} className='btn btn-secondary mb-3'>
          {darkMode ? 'Light': 'Dark'} Mode
        </button>
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark-mode' : 'navbar-light-mode'}`}>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toogle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
            <ul className='nav nav-tabs nav-tabs-bg'>
              <li className='nav-item'>
                <NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/'>Balance</NavLink>
                </li>
              <li className='nav-item'>
                <NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/transactions'>Transactions</NavLink>
                </li>
              <li className='nav-item'>
                <NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/add'>Add Transaction</NavLink>
                </li>
              <li className='nav-item'>
                <NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='budget'>Budget</NavLink>
                </li>
            </ul>
        </div>
        </nav>
        <Routes>
          <Route path='/' element={<div><Outlet /></div>}>
            <Route index element ={<Balance />}/>
            <Route path='/transactions' element ={<Transactions />}/>
            <Route path='/add' element ={<AddTransactions />}/>
            <Route path='/budget' element ={<Budget />}/>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
