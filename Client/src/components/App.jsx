import React, { useState, useEffect } from 'react';
import { api, getToken, clearToken } from '../config/api'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Navigate }  from 'react-router-dom';
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
import MobileBottomNav from './MobileBottomNav';
import Sidebar from './Sidebar';
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
  


  // LOGIN ==========>>>>>>
  // `user` is the signed-in account (null = signed out). `authChecked` stays false until
  // we've asked the server whether the saved token is still valid, so the page doesn't
  // flash the login screen at someone who is already signed in.
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!getToken()) {
      setAuthChecked(true);
      return;
    }
    api.get('/me')
      .then((response) => setUser(response.data))
      .catch(() => clearToken())
      .finally(() => setAuthChecked(true));
  }, []);

  // LOGOUT ==========>>>>>>
  // A full page load wipes every piece of in-memory data, so the next person to sign in
  // on this browser can never see the previous person's numbers.
  const handleLogout = () => {
    clearToken();
    window.location.assign('/login');
  };

  // The API client fires this event when the server rejects our token (e.g. it expired).
  useEffect(() => {
    window.addEventListener('xpense:logged-out', handleLogout);
    return () => window.removeEventListener('xpense:logged-out', handleLogout);
  }, []);

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

    api.delete(`/investments/${investmentId}`)
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
      <AppContent 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        user={user}
        authChecked={authChecked}
        onAuthenticated={setUser}
        onLogout={handleLogout}
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
  const navigate = useNavigate();
  const {
    darkMode, toggleDarkMode, user, authChecked, onAuthenticated, onLogout,
    sidebarOpen, setSidebarOpen, transactions, setTransactions, balance, setBalance,
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

  // Wait until we know whether the saved token is valid.
  if (!authChecked) {
    return (
      <div id="root" className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div style={{ minHeight: '100vh' }} className="d-flex align-items-center justify-content-center">
          Loading...
        </div>
      </div>
    );
  }

  // The start page and the account screens are the only public pages; everything else needs an account.
  const isAuthPage = location.pathname === '/login' || location.pathname === '/reset-password';
  const isPublicPage = location.pathname === '/' || isAuthPage;
  if (!user && !isPublicPage) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div id="root" className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {location.pathname === '/' ? (
        <div style={{height: '100vh', width: '100%'}}>
          <Routes>
            <Route path='/' element={<StartPage />} />
          </Routes>
        </div>
      ) : isAuthPage ? (
        user && location.pathname === '/login' ? (
          <Navigate to="/dashboard" replace />
        ) : (
          <Login
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            onAuthenticated={(account) => {
              onAuthenticated(account);
              navigate('/dashboard');
            }}
          />
        )
      ) : (
        <div className="d-flex" style={{minHeight: '100vh'}}>
          <Sidebar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            user={user}
            onLogout={onLogout}
          />
          
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
              {/* The sidebar (and its Log out button) is hidden on phones, so offer one here. */}
              <button
                type="button"
                onClick={onLogout}
                className={`btn btn-sm w-100 mt-2 ${darkMode ? 'btn-outline-light' : 'btn-outline-secondary'}`}
                style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  borderWidth: '2px'
                }}
              >
                LOG OUT
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
      
      {/* Mobile Bottom Navigation - Only visible on mobile and after Get Started is clicked */}
      {!isPublicPage && <MobileBottomNav darkMode={darkMode} />}
    </div>
  )
}

export default App
