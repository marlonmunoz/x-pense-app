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
import StartPage from './StartPage';
import Footer from '../components/Footer';
import '/src/App.css'

function App() {
  // FORMATTING 
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  const parseDate = (dateString) => {
    const date = new Date(dateString);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    return formatDate(date);
  };

  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [budget, setBudget] = useState(0);

  

  const [darkMode, setDarkMode] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(false);
  const [addedInvestments, setAddedInvestments] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0); 

  // BUDGET
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [newBudget, setNewBudget] = useState("")
  const [error, setError] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editAmount, setEditAmount] = useState('');
  // const totalBudgetAmount = items.reduce((total, item) => total + item.amount, 0) + (isNaN(budget) ? 0 : budget);
  const totalBudgetAmount = items.reduce((total, item) => total + item.amount, 0);

  // BALANCE
  const [cashOnHand, setCashOnHand] = useState('');
  const [bankAccountBalance , setBankAccountBalance] = useState('');
  const [savings, setSavings] = useState('');
  const [total , setTotal] = useState(0);
  const totalBalance = cashOnHand + bankAccountBalance + savings;
  const [balanceId, setBalanceId] = useState(null)
  const [balances, setBalances] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editBalance, setEditBalance] = useState({cash_on_hand: 0, bank_account_balance: 0, savings:0, total: 0});
  const [balanceError, setBalanceError] = useState(null)
  
  // Goals State ======>>>>>>
  const [goalAmount, setGoalAmount] = useState(0); // This is an example amount
  const [currentAmount, setCurrentAmount] = useState(0); // This is an example of current amount
  const [inputAmount, setInputAmount] = useState('');
  const [newGoalName, setNewGoalName] = useState('');
  const [newGoalAmount, setNewGoalAmount] = useState('');
  const [progPercentage, setProgPercentage] = useState(0);
  const [goals, setGoals] = useState([]);
  const [goalsProgress, setGoalsProgress] = useState(goals.map(goal => ({
          ...goal,
          progress: (goal.saved / goal.target) * 100
        })));
  const [inputAmounts, setInputAmounts] = useState({});

        // Edit Existing Goal Name
  const [editingGoalId, setEditingGoalId] = useState(null);
  const [editedGoalName, setEditedGoalName] = useState('');

  //TRANSACTION
  const [editTransaction, setEditTransaction] = useState({ category:'', date:'', text:'', amount:'' });
  const [reminderDate, setReminderDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('')

  // INVESTMENTS
  const [investments, setInvestments] = useState([]);
  const [amounts, setAmounts] = useState([]);  
  const [marketCaps, setMarketCaps] = useState({})

  //ADD TRANSACTIONS
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('')

  // DASHBOARD
  


  // LOGIN

  useEffect(() => {
    const total = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0)
    setTotalAmount(total);
  }, [transactions])


  // Dark-Light MODE ======>>>>>>
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   if (!darkMode) {
  //     document.body.classList.add('dark-mode');
  //     document.body.classList.remove('light-mode');
  //   } else {
  //     document.body.classList.add('light-mode');
  //     document.body.classList.remove('dark-mode');
  //   }
  // };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Validation ======>>>>>>
  const [validated, setValidated] = useState(false);

  // LOGOUT ==========>>>>>>
  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.post('http://127.0.0.1:5001/logout');
  //     if (response.status === 200) {
  //       setLoggedIn(false)
  //     }
  //   } catch (err) {
  //     console.log('Logout failed');
  //   }
  // };

  // if (!loggedIn) {
  //   return <Login setLoggedIn={setLoggedIn} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  // }

  const handleAddInvestment = (investment) => {
    setAddedInvestments([...addedInvestments, investment]);
    console.log('Added investment:', investment);
  }
  
  const formatAmount = (amount) => {
    return parseFloat(amount).toLocaleString();
  };

  const handleRemoveInvestment = (index) => {
    if (!addedInvestments || !addedInvestments[index]) {
        console.error('Investment not found');
        return;
    }

    const investmentId = addedInvestments[index].id; // Assuming each investment has an 'id' property

    axios.delete(`http://localhost:5001/investments/${investmentId}`)
        .then(response => {
            if (response.status === 204) {
                const newInvestments = addedInvestments.filter((_, i) => i !== index);
                setAddedInvestments(newInvestments);
            } else {
                console.error('Failed to delete the investment');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
  }


  return (
    <Router>
      <div id="root" className={`container d-flex flex-column align-items-center ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        {/* LOGOUT */}
        {/* <button onClick={handleLogout}className={`btn btn-secondary mb-3 ml-auto border ${darkMode ? 'btn-light' : 'btn-dark'}`} >Logout</button> */}

        {location.pathname !== '/' && (
        <>
        <h1> <span className='app-title metallic-shadow fade-in'>X-PENSE</span></h1>
        <h6><span className='badge badge-info border p-2'>A Budget Tracker At Your Fingertips</span></h6>

        <button 
          onClick={toggleDarkMode} 
          className={`btn mb-3 ${darkMode ? 'btn-light' : 'btn-dark'}`}
        >
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
       

        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark-mode' : 'navbar-light-mode'}`}>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toogle navigation'>
              <span className={`navbar-toggler-icon ${darkMode ? 'dark-mode-icon' : 'light-mode-icon'} align-left`}></span>
          </button>
          <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
            <ul className={`nav nav-tabs ${darkMode ? 'nav-tabs-bg-dark-mode' : 'nav-tabs-bg-light-mode'} rounded`}>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/dashboard'>Dashboard</NavLink></li>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='budget'>Budget</NavLink></li>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/balance'>Balance</NavLink></li>
              <li className='nav-item'><NavLink className={`nav-link ${darkMode ? 'highlight-black' : 'highlight-white'} border`} to='/add'><strong>X-PENSE</strong></NavLink></li>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border `} to='/transactions'>Transaction</NavLink></li>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border`} to='/goals'>Goals</NavLink></li>
              <li className='nav-item'><NavLink className= {`nav-link ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border`} to='/investments'>Investments</NavLink></li>
            </ul>
          </div>
        </nav>
        </>
        )}
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/' element={<div><Outlet /></div>}>
            <Route path='dashboard' element={<Dashboard 
              transactions={transactions} 
              balance={totalBalance} 
              budget={budget} 
              investments={investments}
              totalAmount={totalAmount} 
              darkMode={darkMode} 
              formatAmount={formatAmount} 
              addedInvestments={addedInvestments} 
              goals={goals} 
              setGoals={setGoals}
              formatCurrency={formatCurrency}
              formatDate={formatDate}
              handleRemoveInvestment={handleRemoveInvestment}
              goalsProgress={goalsProgress} setGoalsProgress={setGoalsProgress}
              totalBudgetAmount={totalBudgetAmount}
              parseDate={parseDate}
              setItems={setItems}
              setBalances={setBalances}
              setCashOnHand={setCashOnHand}
              setBankAccountBalance={setBankAccountBalance}
              setSavings={setSavings}
              setTransactions={setTransactions}
              setAddedInvestments={setAddedInvestments} 
              setInvestments={setInvestments}
              setAmounts={setAmounts}
            />} />
            <Route path='budget' element={<Budget 
              balance={balance} 
              budget={budget} setBudget={setBudget} 
              darkMode={darkMode} 
              validated={validated} setValidated={setValidated} 
              formatCurrency={formatCurrency}
              items={items} setItems={setItems}
              name={name} setName={setName}
              amount={amount} setAmount={setAmount}
              newBudget={newBudget} setNewBudget={setNewBudget}
              error={error} setError={setError}
              editingIndex={editingIndex} setEditingIndex={setEditingIndex}
              editAmount={editAmount} setEditAmount={setEditAmount}
              date={date} setDate={setDate}
              totalBudgetAmount={totalBudgetAmount}
              parseDate={parseDate}
            />} />
            <Route path='balance' element={<Balance 
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
              balanceId={balanceId} setBalanceId={setBalanceId}
              balances={balances} setBalances={setBalances}
              editIndex={editIndex} setEditIndex={setEditIndex}
              editBalance={editBalance} setEditBalance={setEditBalance}
              balanceError={balanceError} setBalanceError={setBalanceError}
            />} />
            <Route path='transactions' element={<Transactions 
              transactions={transactions} setTransactions={setTransactions} 
              darkMode={darkMode} 
              validated={validated} setValidated={setValidated}
              formatCurrency={formatCurrency}
              totalAmount={totalAmount} setTotalAmount={setTotalAmount}
              editIndex={editIndex} setEditIndex={setEditIndex}
              editTransaction={editTransaction} setEditTransaction={setEditTransaction}
              reminderDate={reminderDate} setReminderDate={setReminderDate}
              successMessage={successMessage} setSuccessMessage={setSuccessMessage}
              parseDate={parseDate}
            />} />
            <Route path='add' element={<AddTransactions 
              darkMode={darkMode} 
              validated={validated} setValidated={setValidated}
              amount={amount} setAmount={setAmount}
              category={category} setCategory={setCategory}
              date={date} setDate={setDate}
              description={description} setDescription={setDescription}
            />} />
            <Route path='goals' element={<Goals 
              goalAmount={goalAmount} setGoalAmount={setGoalAmount} 
              currentAmount={currentAmount} setCurrentAmount={setCurrentAmount} 
              newGoalName={newGoalName} setNewGoalName={setNewGoalName}
              newGoalAmount={newGoalAmount} setNewGoalAmount={setNewGoalAmount}
              progPercentage={progPercentage} setProgPercentage={setProgPercentage} 
              goals={goals} setGoals={setGoals}
              validated={validated} setValidated={setValidated}
              inputAmounts={inputAmounts} setInputAmounts={setInputAmounts}
              editingGoalId={editingGoalId} setEditingGoalId={setEditingGoalId}
              editedGoalName={editedGoalName} setEditedGoalName={setEditedGoalName}
              formatCurrency={formatCurrency}
              darkMode={darkMode}
            />} />
            <Route path='investments' element={<Investments 
              formatAmount={formatAmount} 
              formatCurrency={formatCurrency}
              darkMode={darkMode} 
              onAddInvestment={(newInvestment) => {
                const existingInvestmentIndex = addedInvestments.findIndex(inv => inv.id === newInvestment.id);
                if (existingInvestmentIndex !== -1) {
                  const updatedInvestments = [...addedInvestments];
                  updatedInvestments[existingInvestmentIndex] = {
                    ...updatedInvestments[existingInvestmentIndex],
                    amount: updatedInvestments[existingInvestmentIndex].amount + newInvestment.amount,
                    totalPrice: updatedInvestments[existingInvestmentIndex].totalPrice + newInvestment.totalPrice,
                  };
                  setAddedInvestments(updatedInvestments);
                } else {
                  setAddedInvestments([...addedInvestments, newInvestment]);
                }
              }}
              validated={validated} setValidated={setValidated} 
              investments={investments} setInvestments={setInvestments}
              amounts={amounts} setAmounts={setAmounts}
              marketCaps={marketCaps} setMarketCaps={setMarketCaps}
              addedInvestments={addedInvestments} setAddedInvestments={setAddedInvestments}
            />} />
          </Route>
        </Routes>
        {location.pathname !== '/' && <Footer />}
      </div>
    </Router>
  )
}

export default App
