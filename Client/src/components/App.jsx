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
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
          <ul>
            <li><Link to='/transactions'>Transactions</Link></li>
          </ul>
          <ul>
            <li>
              <Link to='/add'>Add Transaction</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='budget'>Budget</Link>
            </li>
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
