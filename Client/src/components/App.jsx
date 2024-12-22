import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link }  from 'react-router-dom';
import Transactions from '../components/Transactions';
import AddTransactions from '../components/AddTransactions';
import Balance from '../components/Balance'
import Budget from '../components/Budget'
import '/src/App.css'

function App() {
  return (
    // <>
    //   <h1>X-PENSE</h1>
    //   <p>Seemlessly Track Your Budget!</p>
    // </>
    <Router>
      <div className='container'>
        <h1>Budget Tracker</h1>
        <nav>
          <ul className='nav nav-tabs justify-content-center'>
            <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/transactions'>Transactions</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/add'>Add Transaction</Link></li>
            <li className='nav-item'><Link className='nav-link' to='budget'>Budget</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element ={<Balance />}/>
          <Route path='/transactions' element ={<Transactions />}/>
          <Route path='/add' element ={<AddTransactions />}/>
          <Route path='/budget' element ={<Budget />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
