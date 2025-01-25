import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet }  from 'react-router-dom';
import AddTransactions from '../components/AddTransactions';
import Balance from '../components/Balance'
import Budget from '../components/Budget'
import Dashboard from '../components/Dashboard'
import Transactions from '../components/Transactions';
import Login from '../components/Login';
import Goals from '../components/Goals';
import Investments from '../components/Investments';
import Footer from '../components/Footer';
import '/src/App.css'

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [budget, setBudget] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [addedInvestments, setAddedInvestments] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // BALANCE
  const [cashOnHand, setCashOnHand] = useState(0);
  const [bankAccountBalance , setBankAccountBalance] = useState(0);
  const [savings, setSavings] = useState(0);
  const [total , setTotal] = useState(0);

  const totalBalance = cashOnHand + bankAccountBalance + savings;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };
  
  // Goals State ======>>>>>>
  const [goalAmount, setGoalAmount] = useState(0); // This is an example amount
  const [currentAmount, setCurrentAmount] = useState(0); // This is an example of current amount
  const [inputAmount, setInputAmount] = useState('');
  const [newGoalName, setNewGoalName] = useState('');
  const [newGoalAmount, setNewGoalAmount] = useState('');
  const [progPercentage, setProgPercentage] = useState(0);
  const [goals, setGoals] = useState([]);
  


  useEffect(() => {
    const total = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0)
    setTotalAmount(total);
  }, [transactions])

  // Fetch goals from the backend
  useEffect(() => {
    fetch('http://localhost:5001/goals')
        .then(response => response.json())
        .then(data => setGoals(data))
        .catch(error => console.error('Error fetching goals:', error));
}, []);

  // Dark-Light MODE ======>>>>>>
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

  // Validation ======>>>>>>
  const [validated, setValidated] = useState(false);

  // LOGOUT ==========>>>>>>
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5001/logout');
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

  const handleAddInvestment = (investment) => {
    setAddedInvestments([...addedInvestments, investment]);
    console.log('Added investment:', investment);
  }
  
  const formatAmount = (amount) => {
    return parseFloat(amount).toLocaleString();
  };

  const handleRemoveInvestment = (index) => {
    const newInvestments = addedInvestments.filter((_, i) => i !== index);
    setAddedInvestments(newInvestments);
  }


  return (
    <Router>
      <div className={`container d-flex flex-column align-items-center ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        {/* LOGOUT */}
        <button onClick={handleLogout}className='btn btn-secondary mb-3 ml-auto' >Logout</button>
        <h1>X-PENSE</h1>
        <h6><span className='badge badge-info'>A Budget Tracker At Your Fingertips</span></h6>


        <button 
          onClick={toggleDarkMode} 
          className={`btn mb-3 ${darkMode ? 'btn-light' : 'btn-dark'}`}
        >
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>

        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark-mode' : 'navbar-light-mode'}`}>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toogle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
            <ul className='nav nav-tabs nav-tabs-bg'>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/dashboard'>Dashboard</NavLink></li>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='budget'>Budget</NavLink></li>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/'>Balance</NavLink></li>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/add'><strong>X-PENSE</strong></NavLink></li>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/transactions'>Transaction</NavLink></li>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border`} to='/goals'>Goals</NavLink></li>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border`} to='/investments'>Investments</NavLink></li>
            </ul>
        </div>
        </nav>
        <Routes>
          <Route path='/' element={<div><Outlet darkMode={darkMode}/></div>}>
            <Route index element ={
              <Balance 
                balance={balance} setBalance={setBalance}  
                transactions={transactions} 
                budget={budget} 
                darkMode={darkMode} 
                validated={validated} setValidated={setValidated} 
                cashOnHand={cashOnHand} setCashOnHand={setCashOnHand}
                bankAccountBalance={bankAccountBalance} setBankAccountBalance={setBankAccountBalance}
                savings={savings} setSavings={setSavings}
                total={total} 
                setTotal={setTotal}
                formatCurrency={formatCurrency}

              />}
            />
            <Route path='/transactions' element ={
              <Transactions 
                transactions={transactions} setTransactions={setTransactions} 
                darkMode={darkMode} 
                validated={validated} setValidated={setValidated} 
                totalAmount={totalAmount} setTotalAmount={setTotalAmount}
              />}
            />
            <Route path='/add' element ={
              <AddTransactions 
                transactions={transactions} setTransactions={setTransactions} 
                darkMode={darkMode} 
                validated={validated} setValidated={setValidated}
              />}
            />
            <Route path='/budget' element ={
              <Budget 
                balance={balance} 
                budget={budget} setBudget={setBudget} 
                darkMode={darkMode} 
                validated={validated} setValidated={setValidated} 
                formatCurrency={formatCurrency}
              />}
            />
            <Route path='/dashboard' element ={
              <Dashboard 
                transactions={transactions} 
                balance={totalBalance} 
                budget={budget} 
                totalAmount={totalAmount} 
                darkMode={darkMode} 
                formatAmount={formatAmount} 
                addedInvestments={addedInvestments} 
                goals={goals}
                formatCurrency={formatCurrency}
                handleRemoveInvestment={handleRemoveInvestment}
              />} 
            />
            <Route path='/goals' element ={
              <Goals 
                goalAmount={goalAmount} setGoalAmount={setGoalAmount} 
                currentAmount={currentAmount} setCurrentAmount={setCurrentAmount} 
                inputAmount={inputAmount} setInputAmount={setInputAmount} 
                newGoalName={newGoalName} setNewGoalName={setNewGoalName}
                newGoalAmount={newGoalAmount} setNewGoalAmount={setNewGoalAmount}
                progPercentage={progPercentage} setProgPercentage={setProgPercentage} 
                goals={goals} setGoals={setGoals}
                validated={validated} setValidated={setValidated}
              />}
            />
            <Route path='/investments' element ={
              <Investments 
                formatAmount={formatAmount} 
                darkMode={darkMode} 
                onAddInvestment={handleAddInvestment} 
                validated={validated} setValidated={setValidated} 
              />}
            />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
