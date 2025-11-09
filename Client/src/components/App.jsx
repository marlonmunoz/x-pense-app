import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, useLocation, Navigate }  from 'react-router-dom';
import { BarChart3, DollarSign, CreditCard, Receipt, Target, TrendingUp, Lightbulb, Plus, Bot } from 'lucide-react';
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
import AiDemo from '../components/AiDemo';
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
  const [cashOnHand, setCashOnHand] = useState(0);
  const [bankAccountBalance , setBankAccountBalance] = useState(0);
  const [savings, setSavings] = useState(0);
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
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
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
    <Router basename="/x-pense-app">
      <AppContent 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        transactions={transactions}
        setTransactions={setTransactions}
        balance={balance}
        setBalance={setBalance}
        budget={budget}
        setBudget={setBudget}
        addedInvestments={addedInvestments}
        setAddedInvestments={setAddedInvestments}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        items={items}
        setItems={setItems}
        name={name}
        setName={setName}
        amount={amount}
        setAmount={setAmount}
        newBudget={newBudget}
        setNewBudget={setNewBudget}
        error={error}
        setError={setError}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
        editAmount={editAmount}
        setEditAmount={setEditAmount}
        totalBudgetAmount={totalBudgetAmount}
        cashOnHand={cashOnHand}
        setCashOnHand={setCashOnHand}
        bankAccountBalance={bankAccountBalance}
        setBankAccountBalance={setBankAccountBalance}
        savings={savings}
        setSavings={setSavings}
        total={total}
        setTotal={setTotal}
        totalBalance={totalBalance}
        balanceId={balanceId}
        setBalanceId={setBalanceId}
        balances={balances}
        setBalances={setBalances}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        editBalance={editBalance}
        setEditBalance={setEditBalance}
        balanceError={balanceError}
        setBalanceError={setBalanceError}
        goalAmount={goalAmount}
        setGoalAmount={setGoalAmount}
        currentAmount={currentAmount}
        setCurrentAmount={setCurrentAmount}
        inputAmount={inputAmount}
        setInputAmount={setInputAmount}
        newGoalName={newGoalName}
        setNewGoalName={setNewGoalName}
        newGoalAmount={newGoalAmount}
        setNewGoalAmount={setNewGoalAmount}
        progPercentage={progPercentage}
        setProgPercentage={setProgPercentage}
        goals={goals}
        setGoals={setGoals}
        goalsProgress={goalsProgress}
        setGoalsProgress={setGoalsProgress}
        inputAmounts={inputAmounts}
        setInputAmounts={setInputAmounts}
        editingGoalId={editingGoalId}
        setEditingGoalId={setEditingGoalId}
        editedGoalName={editedGoalName}
        setEditedGoalName={setEditedGoalName}
        editTransaction={editTransaction}
        setEditTransaction={setEditTransaction}
        reminderDate={reminderDate}
        setReminderDate={setReminderDate}
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}
        investments={investments}
        setInvestments={setInvestments}
        amounts={amounts}
        setAmounts={setAmounts}
        marketCaps={marketCaps}
        setMarketCaps={setMarketCaps}
        category={category}
        setCategory={setCategory}
        date={date}
        setDate={setDate}
        description={description}
        setDescription={setDescription}
        validated={validated}
        setValidated={setValidated}
        formatCurrency={formatCurrency}
        formatDate={formatDate}
        parseDate={parseDate}
        formatAmount={formatAmount}
        handleAddInvestment={handleAddInvestment}
        handleRemoveInvestment={handleRemoveInvestment}
      />
    </Router>
  )
}

function AppContent(props) {
  const location = useLocation();
  const {
    darkMode, toggleDarkMode, sidebarOpen, setSidebarOpen, transactions, setTransactions, balance, setBalance,
    budget, setBudget, addedInvestments, setAddedInvestments, totalAmount, setTotalAmount,
    items, setItems, name, setName, amount, setAmount, newBudget, setNewBudget,
    error, setError, editingIndex, setEditingIndex, editAmount, setEditAmount,
    totalBudgetAmount, cashOnHand, setCashOnHand, bankAccountBalance, setBankAccountBalance,
    savings, setSavings, total, setTotal, totalBalance, balanceId, setBalanceId,
    balances, setBalances, editIndex, setEditIndex, editBalance, setEditBalance,
    balanceError, setBalanceError, goalAmount, setGoalAmount, currentAmount, setCurrentAmount,
    inputAmount, setInputAmount, newGoalName, setNewGoalName, newGoalAmount, setNewGoalAmount,
    progPercentage, setProgPercentage, goals, setGoals, goalsProgress, setGoalsProgress,
    inputAmounts, setInputAmounts, editingGoalId, setEditingGoalId, editedGoalName, setEditedGoalName,
    editTransaction, setEditTransaction, reminderDate, setReminderDate, successMessage, setSuccessMessage,
    investments, setInvestments, amounts, setAmounts, marketCaps, setMarketCaps,
    category, setCategory, date, setDate, description, setDescription,
    validated, setValidated, formatCurrency, formatDate, parseDate, formatAmount,
    handleAddInvestment, handleRemoveInvestment
  } = props;
  return (
    <div id="root" className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {location.pathname === '/' ? (
        <div style={{height: '100vh', width: '100%'}}>
          <Routes>
            <Route path='/' element={<StartPage />} />
          </Routes>
        </div>
      ) : (
        <div className="d-flex" style={{minHeight: '100vh'}}>
          {/* Mobile Hamburger Menu */}
          <div className="d-md-none hamburger-container">
            <button 
              className={`btn hamburger-btn ${darkMode ? 'dark-mode' : ''}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle navigation menu"
            >
              <span style={{fontSize: '1.3rem', fontWeight: 'bold'}}>☰</span>
            </button>
          </div>

          {/* Overlay for mobile when sidebar is open */}
          {sidebarOpen && (
            <div 
              className="d-md-none position-fixed w-100 h-100"
              style={{
                top: 0,
                left: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1040
              }}
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Left Sidebar Navigation */}
          <nav 
            className={`d-flex flex-column p-3 ${darkMode ? 'navbar-dark-mode' : 'navbar-light-mode'} mobile-sidebar ${
              sidebarOpen ? 'show d-block' : 'd-none d-md-flex'
            }`} 
            style={{
              width: '250px', 
              minHeight: '100vh',
              transition: 'all 0.3s ease',
              borderRight: `2px solid ${darkMode ? '#495057' : '#dee2e6'}`,
              boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              ...(window.innerWidth < 768 ? {
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1045
              } : {})
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '2px 0 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '2px 0 10px rgba(0, 0, 0, 0.1)';
            }}
          >
            {/* Mobile Close Button */}
            <div className="d-md-none d-flex justify-content-end mb-2">
              <button 
                className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'}`}
                onClick={() => setSidebarOpen(false)}
                style={{
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}
              >
                ✕
              </button>
            </div>

            <div className="text-center mb-4">
              <div className="d-flex align-items-center justify-content-center mb-2" style={{ flexWrap: 'nowrap' }}>
                <h1 className="mb-0" style={{ whiteSpace: 'nowrap', marginRight: '.5rem' }}>
                  <span 
                    className={`app-title ${darkMode ? 'metallic-shadow-dark' : 'metallic-shadow-light'}`}
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '2.2rem',
                      fontWeight: 'bold',
                      letterSpacing: '1px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                      e.target.style.textShadow = '0 0 10px rgba(0, 123, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.textShadow = '';
                    }}
                    onClick={() => window.location.href = '/dashboard'}
                  >
                    X-PENSE
                  </span>
                </h1>
                <span 
                  className='badge badge-danger border p-1'
                  style={{
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    fontSize: '0.65rem',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '';
                  }}
                >
                  Ai-Powered
                </span>
              </div>
              <button 
                onClick={toggleDarkMode} 
                className="btn btn-sm w-100"
                style={{
                  background: darkMode 
                    ? 'linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #fff59d 100%)' 
                    : 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
                  color: darkMode ? '#1a1a1a' : '#ffffff',
                  border: `2px solid ${darkMode ? '#ffd700' : '#64748b'}`,
                  fontSize: '12px',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: darkMode 
                    ? '0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)' 
                    : '0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)',
                  transform: 'scale(1)',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backdropFilter: 'blur(10px)',
                  maxWidth: '100%'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = darkMode 
                    ? '0 6px 20px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.2)' 
                    : '0 6px 20px rgba(30, 41, 59, 0.4), 0 0 30px rgba(30, 41, 59, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = darkMode 
                    ? '0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)' 
                    : '0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)';
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'scale(0.98)';
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  setTimeout(() => {
                    e.target.style.transform = 'scale(1)';
                  }, 150);
                }}
              >
                <span style={{ fontSize: '16px' }}>
                  {darkMode ? '☀️' : '🌙'}
                </span>
                <span style={{ fontSize: '12px', letterSpacing: '0.5px' }}>
                  {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
                </span>
              </button>
            </div>
            
            <ul 
              className={`nav nav-pills flex-column ${darkMode ? 'nav-tabs-bg-dark-mode' : 'nav-tabs-bg-light-mode'}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                listStyle: 'none',
                margin: 0,
                padding: 0
              }}
            >
              <li 
                className='nav-item mb-2'
                style={{
                  width: '100%',
                  display: 'block',
                  marginBottom: '8px'
                }}
              >
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link d-flex align-items-center ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border transition-all ${
                      isActive ? 'active bg-primary text-white' : ''
                    }`
                  } 
                  to='/dashboard'
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#007bff' : '',
                    transform: 'scale(1)',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    padding: '12px 16px',
                    boxSizing: 'border-box'
                  })}
                  onMouseEnter={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.backgroundColor = darkMode ? '#495057' : '#e9ecef';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = '';
                    }
                  }}
                >
                  <BarChart3 size={18} className="me-2" style={{marginRight: '12px'}} />
                  Dashboard
                </NavLink>
              </li>
              <li 
                className='nav-item mb-2'
                style={{
                  width: '100%',
                  display: 'block',
                  marginBottom: '8px'
                }}
              >
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link d-flex align-items-center ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border transition-all ${
                      isActive ? 'active bg-primary text-white' : ''
                    }`
                  } 
                  to='/budget'
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#007bff' : '',
                    transform: 'scale(1)',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    padding: '12px 16px',
                    boxSizing: 'border-box'
                  })}
                  onMouseEnter={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.backgroundColor = darkMode ? '#495057' : '#e9ecef';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = '';
                    }
                  }}
                >
                  <DollarSign size={18} className="me-2" style={{marginRight: '12px'}} />
                  Budget
                </NavLink>
              </li>
              <li className='nav-item mb-2'>
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link d-flex align-items-center ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border transition-all ${
                      isActive ? 'active bg-primary text-white' : ''
                    }`
                  } 
                  to='/balance'
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#007bff' : '',
                    transform: 'scale(1)',
                    transition: 'all 0.3s ease'
                  })}
                  onMouseEnter={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.backgroundColor = darkMode ? '#495057' : '#e9ecef';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = '';
                    }
                  }}
                >
                  <CreditCard size={18} className="me-2" style={{marginRight: '12px'}} />
                  Balance
                </NavLink>
              </li>
              <li className='nav-item mb-2'>
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link d-flex align-items-center ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border transition-all ${
                      isActive ? 'active bg-success text-white' : ''
                    }`
                  } 
                  to='/add'
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#28a745' : '',
                    transform: 'scale(1)',
                    transition: 'all 0.3s ease',
                    fontWeight: 'bold'
                  })}
                  onMouseEnter={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.backgroundColor = '#28a745';
                      e.target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = '';
                      e.target.style.color = '';
                    }
                  }}
                >
                  <Plus size={18} className="me-2" style={{marginRight: '12px'}} />
                  <strong>X-PENSE</strong>
                </NavLink>
              </li>
              <li className='nav-item mb-2'>
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link d-flex align-items-center ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border transition-all ${
                      isActive ? 'active bg-primary text-white' : ''
                    }`
                  } 
                  to='/transactions'
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#007bff' : '',
                    transform: 'scale(1)',
                    transition: 'all 0.3s ease'
                  })}
                  onMouseEnter={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.backgroundColor = darkMode ? '#495057' : '#e9ecef';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = '';
                    }
                  }}
                >
                  <Receipt size={18} className="me-2" style={{marginRight: '12px'}}/>
                  Transactions
                </NavLink>
              </li>
              <li className='nav-item mb-2'>
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link d-flex align-items-center ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border transition-all ${
                      isActive ? 'active bg-primary text-white' : ''
                    }`
                  } 
                  to='/goals'
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#007bff' : '',
                    transform: 'scale(1)',
                    transition: 'all 0.3s ease'
                  })}
                  onMouseEnter={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.backgroundColor = darkMode ? '#495057' : '#e9ecef';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = '';
                    }
                  }}
                >
                  <Target size={18} className="me-2" style={{marginRight: '12px'}}/>
                  Goals
                </NavLink>
              </li>
              <li className='nav-item mb-2'>
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link d-flex align-items-center ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border transition-all ${
                      isActive ? 'active bg-primary text-white' : ''
                    }`
                  } 
                  to='/investments'
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#007bff' : '',
                    transform: 'scale(1)',
                    transition: 'all 0.3s ease'
                  })}
                  onMouseEnter={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.backgroundColor = darkMode ? '#495057' : '#e9ecef';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = '';
                    }
                  }}
                >
                  <TrendingUp size={18} className="me-2" style={{marginRight: '12px'}}/>
                  Investments
                </NavLink>
              </li>
              <li className='nav-item mb-2'>
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link d-flex align-items-center ${darkMode ? 'nav-link-dark-mode' : 'nav-link-light-mode'} border transition-all ${
                      isActive ? 'active bg-info text-white' : ''
                    }`
                  } 
                  to='/ai-demo'
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#17a2b8' : '',
                    transform: 'scale(1)',
                    transition: 'all 0.3s ease'
                  })}
                  onMouseEnter={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.backgroundColor = '#17a2b8';
                      e.target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = '';
                      e.target.style.color = '';
                    }
                  }}
                >
                  <Lightbulb size={18} className="me-2" style={{marginRight: '12px'}}/>
                  <strong>AI Demo</strong>
                </NavLink>
              </li>
            </ul>
            
            {/* Welcome Section - Below navbar, inside sidebar */}
            <div className="mt-3 pt-3" style={{ 
              borderTop: `1px solid ${darkMode ? '#495057' : '#dee2e6'}`,
              marginTop: 'auto'
            }}>
              <div 
                className={`text-center p-3 rounded ${darkMode ? 'bg-secondary' : 'bg-light'}`}
                style={{
                  transition: 'all 0.3s ease',
                  background: darkMode 
                    ? 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)' 
                    : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  border: `1px solid ${darkMode ? '#4a5568' : '#dee2e6'}`,
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <small className={`${darkMode ? 'text-light' : 'text-dark'}`} style={{ 
                  fontSize: '13px', 
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}>
                  <span>👤</span>
                  <span>Welcome Marlon</span>
                  <span>🟢</span>
                  <span>Online</span>
                </small>
              </div>
            </div>
          </nav>
          
          {/* Main Content Area */}
          <div className="flex-grow-1 p-4" style={{paddingTop: window.innerWidth < 768 ? '60px' : '1rem'}}>
            
            {/* Mobile Dark Mode Toggle - Only visible on mobile */}
            <div className="d-md-none mb-3">
              <button 
                onClick={toggleDarkMode} 
                className="btn btn-sm w-100"
                style={{
                  background: darkMode 
                    ? 'linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #fff59d 100%)' 
                    : 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
                  color: darkMode ? '#1a1a1a' : '#ffffff',
                  border: `2px solid ${darkMode ? '#ffd700' : '#64748b'}`,
                  fontSize: '11px',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: darkMode 
                    ? '0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)' 
                    : '0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)',
                  transform: 'scale(1)',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  backdropFilter: 'blur(10px)',
                  maxWidth: '100%'
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'scale(0.95)';
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  setTimeout(() => {
                    e.target.style.transform = 'scale(1)';
                  }, 150);
                }}
                onTouchStart={(e) => {
                  e.target.style.transform = 'scale(0.95)';
                  e.target.style.boxShadow = darkMode 
                    ? '0 2px 8px rgba(255, 215, 0, 0.5)' 
                    : '0 2px 8px rgba(30, 41, 59, 0.5)';
                }}
                onTouchEnd={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  setTimeout(() => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = darkMode 
                      ? '0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)' 
                      : '0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)';
                  }, 150);
                }}
              >
                <span style={{ fontSize: '14px' }}>
                  {darkMode ? '☀️' : '🌙'}
                </span>
                <span style={{ fontSize: '10px', letterSpacing: '0.5px' }}>
                  {darkMode ? 'LIGHT' : 'DARK'}
                </span>
              </button>
            </div>
            
            <Routes>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<Dashboard 
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
              <Route path='/budget' element={<Budget 
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
              <Route path='/balance' element={<Balance 
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
              <Route path='/transactions' element={<Transactions 
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
              <Route path='/add' element={<AddTransactions 
                darkMode={darkMode} 
                validated={validated} setValidated={setValidated}
                amount={amount} setAmount={setAmount}
                category={category} setCategory={setCategory}
                date={date} setDate={setDate}
                description={description} setDescription={setDescription}
              />} />
              <Route path='/goals' element={<Goals 
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
              <Route path='/investments' element={<Investments 
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
              <Route path='/ai-demo' element={<AiDemo darkMode={darkMode} />} />
            </Routes>
            <Footer />
          </div>
        </div>
      )}
      
      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <MobileBottomNav darkMode={darkMode} />
    </div>
  )
}

// Mobile Bottom Navigation Component
const MobileBottomNav = ({ darkMode }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { path: '/budget', icon: DollarSign, label: 'Budget' },
    { path: '/balance', icon: CreditCard, label: 'Balance' },
    { path: '/transactions', icon: Receipt, label: 'Transactions' },
    { path: '/goals', icon: Target, label: 'Goals' },
    { path: '/investments', icon: TrendingUp, label: 'Investments' },
    { path: '/ai-demo', icon: Lightbulb, label: 'AI Demo' }
  ];

  return (
    <nav 
      className="d-md-none"
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
        background: darkMode 
          ? 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        borderTop: `2px solid ${darkMode ? '#4a5568' : '#dee2e6'}`,
        padding: '6px 4px',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        height: '60px',
        boxSizing: 'border-box',
        transform: 'translateZ(0)'
      }}
    >
      <div 
        className="mobile-nav-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
          padding: '0 2px'
        }}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <NavLink
              key={index}
              to={item.path}
              className="text-decoration-none"
              onClick={() => {
                // Immediate scroll to top on mobile navigation
                if (window.innerWidth <= 768) {
                  // Use multiple methods to ensure scroll works
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                  
                  // Also set scroll after a brief delay to handle React Router navigation
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                  }, 50);
                }
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px 2px',
                minWidth: '50px',
                maxWidth: '80px',
                flex: '1 1 auto',
                borderRadius: '12px',
                margin: '0 1px',
                transition: 'all 0.2s ease',
                color: isActive 
                  ? '#4299e1' 
                  : (darkMode ? '#a0aec0' : '#6c757d'),
                background: isActive 
                  ? (darkMode ? 'rgba(66, 153, 225, 0.15)' : 'rgba(66, 153, 225, 0.15)')
                  : 'transparent',
                textAlign: 'center'
              }}
            >
              <Icon 
                size={16} 
                style={{ 
                  marginBottom: '2px',
                  strokeWidth: isActive ? 2.5 : 2,
                  flexShrink: 0
                }} 
              />
              <span 
                style={{ 
                  fontSize: '9px', 
                  fontWeight: isActive ? '600' : '500',
                  lineHeight: '1.1',
                  display: 'block',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%'
                }}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default App
