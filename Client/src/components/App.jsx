import React, { useState } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet }  from 'react-router-dom';
import AddTransactions from '../components/AddTransactions';
import Balance from '../components/Balance'
import Budget from '../components/Budget'
import Dashboard from '../components/Dashboard'
import Transactions from '../components/Transactions';
import Login from '../components/Login';
import '/src/App.css'

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState("");
  const [budget, setBudget] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/logout');
      if (response.status === 200) {
        setLoggedIn(false)
      }
    } catch (err) {
      console.log('Logout failed');
    }
  };

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  }

  return (
    <Router>
      <div className={`container d-flex flex-column align-items-center ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        {/* LOGOUT */}
        <button onClick={handleLogout}className='btn btn-secondary mb-3 ml-auto' >Logout</button>
        <h1>X-PENSE</h1>
        <h6>A Budget Tracker At Your Fingertips </h6>
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
                <NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/dashboard'>Dashboard</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='budget'>Budget</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/'>Balance</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/transactions'>Transactions</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/add'>X-Penses</NavLink>
              </li>
            </ul>
        </div>
        </nav>
        <Routes>
          <Route path='/' element={<div><Outlet /></div>}>
            <Route index element ={<Balance balance={balance} setBalance={setBalance} transactions={transactions} budget={budget} darkMode={darkMode} />}/>
            <Route path='/transactions' element ={<Transactions transactions={transactions} setTransactions={setTransactions} darkMode={darkMode} />}/>
            <Route path='/add' element ={<AddTransactions transactions={transactions} setTransactions={setTransactions} darkMode={darkMode} />}/>
            <Route path='/budget' element ={<Budget balance={balance} budget={budget} setBudget={setBudget} darkMode={darkMode} />}/>
            <Route path='/dashboard' element = {<Dashboard transactions={transactions} balance={balance} budget={budget}  />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
