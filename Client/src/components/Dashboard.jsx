import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler, ArcElement } from 'chart.js';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler, ArcElement);

function Dashboard({ transactions =[], balance = 0, totalAmount, darkMode,formatCurrency, goals, setGoals, formatDate, goalsProgress, setGoalsProgress, totalBudgetAmount, parseDate, setItems, setBalances, setCashOnHand, setBankAccountBalance, setSavings, setTransactions, setAmounts, addedInvestments, setAddedInvestments }) {

  const navigate = useNavigate();
  const [investments, setInvestments] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [editIndex, setEditIndex] = useState(null);
  const [editAmount, setEditAmount] = useState("");
  
  // Interactive chart states
  const [chartType, setChartType] = useState('line');
  const [timeRange, setTimeRange] = useState('all');
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const totalInvestments = addedInvestments.reduce((sum, investment) => sum + parseFloat(investment.total_price), 0).toFixed(2);
  
  // Calculate total saved amount from all goals
  const totalGoalsSaved = goalsProgress.reduce((sum, goal) => sum + parseFloat(goal.saved || 0), 0);
  
  const overviewTotal = totalBudgetAmount + parseFloat(totalPrice) + balance + totalGoalsSaved - totalAmount;
  
  // Enhanced data processing for interactive charts
  const filterTransactionsByTimeRange = (transactions, range) => {
    const now = new Date();
    const filtered = transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      switch(range) {
        case 'week':
          return (now - transactionDate) <= 7 * 24 * 60 * 60 * 1000;
        case 'month':
          return (now - transactionDate) <= 30 * 24 * 60 * 60 * 1000;
        case '3months':
          return (now - transactionDate) <= 90 * 24 * 60 * 60 * 1000;
        default:
          return true;
      }
    });
    return filtered;
  };

  const filterTransactionsByCategory = (transactions, category) => {
    if (category === 'all') return transactions;
    return transactions.filter(transaction => 
      transaction.category && transaction.category.toLowerCase() === category.toLowerCase()
    );
  };

  const sortedTransactions = transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
  const filteredTransactions = filterTransactionsByCategory(
    filterTransactionsByTimeRange(sortedTransactions, timeRange), 
    selectedCategory
  );
  
  const formattedTransactions = filteredTransactions.map(transaction => ({
    ...transaction,
    date: formatDate(parseDate(transaction.date))
  }));

  // Get unique categories for filter dropdown
  const categories = ['all', ...new Set(transactions.map(t => t.category).filter(Boolean))];


  // FETCHING DATA FOR OVERVIEW TABLE
  // GOAL.jsx ==============================================>>>>
  useEffect(() => {
      // Fetch goals from the backend
      console.log('Loaded from Goal.jsx component');
      axios.get('http://localhost:5001/goals')
        .then(response => {
          const goals = response.data.map(goal => ({
            ...goal,
            progress: (goal.saved / goal.target) * 100
          }));
          setGoalsProgress(goals);
        })
        .catch(error => {
          console.error('Error fetching goals:', error);
        });
  }, []);
  // BUDGET.jsx =============================================>>>>
  useEffect (() => {
    console.log('Loaded from Budget.jsx component');
    axios.get('http://localhost:5001/budgets')
      .then(response => {
        const adjustedBudgets = response.data.map(budget => ({
          ...budget,
          date: parseDate(budget.date)
        }));
        setItems(adjustedBudgets);
      })
      .catch(error => {
        console.error('Error fetching budgets:', error)
      })
  },[])
  // BALANCE.jsx =============================================>>>>
  useEffect(() => {
    // Fetch balances from the backend
    console.log('Loaded from Balance.jsx component');
    axios.get('http://localhost:5001/balance')
      .then(response => {
        if (Array.isArray(response.data)) {
          const fetchedBalances = response.data.map(balance => ({
            ...balance,
            total: balance.cash_on_hand + balance.bank_account_balance + balance.savings, // Calculate total
            id: balance.id // Ensure each balance has an id
          }));
          setBalances(fetchedBalances);
          if (fetchedBalances.length > 0) {
            const firstBalance = fetchedBalances[0];
            setCashOnHand(firstBalance.cash_on_hand);
            setBankAccountBalance(firstBalance.bank_account_balance);
            setSavings(firstBalance.savings);
          }
        } else if (response.data && typeof response.data === 'object') {
          const balance = {
            ...response.data,
            total: response.data.cash_on_hand + response.data.bank_account_balance + response.data.savings // Calculate total
          };
          setBalances([balance]); // Wrap the single object in an array
          setCashOnHand(balance.cash_on_hand);
          setBankAccountBalance(balance.bank_account_balance);
          setSavings(balance.savings);
        } else {
          console.error('Fetched data is not an array or object:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching balances:', error);
      });
  }, []);
  useEffect(() => {
    console.log('TRANSACTIONS COMPONENT');
    
    console.log('Fetching transactions...'); // logs 01
    axios.get('http://127.0.0.1:5001/transactions')
    .then(response => {
        console.log('Fetched transactions:', response.data); // log 02
        setTransactions(response.data)
    })
    .catch(error => console.log('Error fetching transactions', error));
  }, []);
  // INVESTMENTS.jsx =============================================>>>>
  useEffect(() => {
    axios.get('http://localhost:5001/investments')
        .then(response => {
          console.log('Fetched from Investments:', response.data);
            // setInvestments(response.data);
            setAddedInvestments(response.data);
            calculateTotalPrice(response.data);
        })
        .catch(error => console.log('Error fetching investments', error));
  }, []);

  const calculateTotalPrice = (investments) => {
    const total = investments.reduce((sum, investment) => sum + investment.total_price, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice(addedInvestments);
  }, [addedInvestments]);
    
  const CustomTooltip = ({ active, payload}) => {
      if (active && payload && payload.length) {
          const { date, amount, description } = payload[0].payload;
          return (
              <div style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000', padding: '10px', border: '1px solid #ccc'}} >
                  <p>{`Date: ${date}`}</p>
                  <p>{`Amount: ${amount}`}</p>
                  <p>{`Description: ${description}`}</p>
              </div>
          );
      }
      return null;
  }

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
  };

  // EDIT AMOUNT 
  const handleEditInvestment = (index) => {
    setEditIndex(index);
    setEditAmount(addedInvestments[index].amount);
  };

  const handleSaveInvestment = (index) => {
    const updatedInvestments = [ ...addedInvestments];
    const investment = updatedInvestments[index];
    const amount = parseFloat(editAmount);
    if (!isNaN(amount)) {
        investment.amount = amount;
        if (investment.pricePerUnit) {
            investment.total_price = amount * investment.pricePerUnit;
        } else {
            console.error('pricePerUnit is not defined for investment:', investment);
        }

        // Make PUT request to update investment in the backend
        axios.put(`http://localhost:5001/investments/${investment.id}`, {
            amount: investment.amount,
            totalPrice: investment.total_price
        })
        .then(response => {
            setAddedInvestments(updatedInvestments);
            setEditIndex(null);
            setEditAmount("");
        })
        .catch(error => {
            console.error('Error updating investment:', error);
        });
    } else {
        console.error('Invalid amount:', editAmount);
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditAmount("");
  }

  // Enhanced chart data configuration
  const generateChartData = () => {
    const labels = formattedTransactions.map(transaction => transaction.date);
    const amounts = formattedTransactions.map(transaction => parseFloat(transaction.amount));
    
    const baseConfig = {
      labels: labels,
      datasets: [{
        label: 'Transaction Amount ($)',
        data: amounts,
        borderColor: darkMode ? 'rgba(255, 193, 7, 1)' : 'rgba(54, 162, 235, 1)',
        backgroundColor: darkMode ? 'rgba(255, 193, 7, 0.2)' : 'rgba(54, 162, 235, 0.2)',
        borderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: darkMode ? 'rgba(255, 193, 7, 1)' : 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        tension: 0.4,
        fill: chartType === 'line'
      }]
    };

    // Adjust dataset for different chart types
    if (chartType === 'bar') {
      baseConfig.datasets[0].backgroundColor = amounts.map((_, index) => 
        `hsla(${(index * 137.5) % 360}, 70%, 60%, 0.8)`
      );
      baseConfig.datasets[0].borderColor = amounts.map((_, index) => 
        `hsla(${(index * 137.5) % 360}, 70%, 50%, 1)`
      );
    } else if (chartType === 'doughnut') {
      // Group by category for doughnut chart
      const categoryData = {};
      formattedTransactions.forEach(transaction => {
        const category = transaction.category || 'Uncategorized';
        categoryData[category] = (categoryData[category] || 0) + parseFloat(transaction.amount);
      });
      
      return {
        labels: Object.keys(categoryData),
        datasets: [{
          label: 'Amount by Category ($)',
          data: Object.values(categoryData),
          backgroundColor: Object.keys(categoryData).map((_, index) => 
            `hsla(${(index * 137.5) % 360}, 70%, 60%, 0.8)`
          ),
          borderColor: Object.keys(categoryData).map((_, index) => 
            `hsla(${(index * 137.5) % 360}, 70%, 50%, 1)`
          ),
          borderWidth: 2,
          hoverOffset: 4
        }]
      };
    }

    return baseConfig;
  };

  const data = generateChartData();

  // Enhanced chart options with interactivity
  const generateChartOptions = () => {
    const baseOptions = {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: animationsEnabled ? 1000 : 0,
        easing: 'easeInOutQuart'
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: darkMode ? '#fff' : '#000',
            usePointStyle: true,
            padding: 20,
            font: {
              size: 12,
              weight: 'bold'
            }
          },
        },
        tooltip: {
          backgroundColor: darkMode ? 'rgba(51, 51, 51, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          titleColor: darkMode ? '#fff' : '#000',
          bodyColor: darkMode ? '#fff' : '#000',
          borderColor: darkMode ? '#ffc107' : '#007bff',
          borderWidth: 1,
          cornerRadius: 8,
          displayColors: true,
          callbacks: {
            title: function(context) {
              return chartType === 'doughnut' ? 'Category Breakdown' : `Date: ${context[0].label}`;
            },
            label: function(context) {
              if (chartType === 'doughnut') {
                const total = context.dataset.data.reduce((sum, value) => sum + value, 0);
                const percentage = ((context.raw / total) * 100).toFixed(1);
                return `${context.label}: $${context.raw.toFixed(2)} (${percentage}%)`;
              } else {
                const transaction = formattedTransactions[context.dataIndex];
                return [
                  `Amount: $${context.raw}`,
                  `Description: ${transaction?.description || 'No Description'}`,
                  `Category: ${transaction?.category || 'Uncategorized'}`
                ];
              }
            }
          }
        },
      },
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const elementIndex = elements[0].index;
          if (chartType !== 'doughnut') {
            const transaction = formattedTransactions[elementIndex];
            console.log('Clicked transaction:', transaction);
            // You can add more interaction logic here
          }
        }
      }
    };

    // Add scales only for line and bar charts
    if (chartType !== 'doughnut') {
      baseOptions.scales = {
        x: {
          title: {
            display: true,
            text: 'Date',
            color: darkMode ? '#fff' : '#000',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          ticks: {
            color: darkMode ? '#fff' : '#000',
            maxTicksLimit: 10
          },
          grid: {
            color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Amount ($)',
            color: darkMode ? '#fff' : '#000',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          ticks: {
            color: darkMode ? '#fff' : '#000',
            callback: function(value) {
              return '$' + value.toFixed(2);
            }
          },
          grid: {
            color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
          }
        }
      };
    }

    return baseOptions;
  };

  const options = generateChartOptions();
  

  return (
    <div className={`container-fluid ${darkMode ? 'dark-mode' : 'light-mode'}`} >
      <div className="row"  >
        <div className="col-12" >
            <div className="summary">
                <h5>Recent Transactions</h5> 
                <br />
                <button   onClick={() => navigate('/transactions')} className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} responsive`}> View All Transactions</button>
            </div>
            <br />
            <div className={`charts border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                {/* Interactive Chart Controls */}
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                  <div>
                    <h6>Spending Over Time Graph</h6>
                    <p style={{color: 'gray'}}><sup>X-PENSE Transactions</sup></p>
                  </div>
                  
                  <div className="d-flex flex-wrap gap-2">
                    {/* Chart Type Selector */}
                    <div className="btn-group" role="group">
                      <button 
                        type="button" 
                        className={`btn btn-sm ${chartType === 'line' ? 'btn-primary' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                        onClick={() => setChartType('line')}
                        title="Line Chart"
                      >
                        📈
                      </button>
                      <button 
                        type="button" 
                        className={`btn btn-sm ${chartType === 'bar' ? 'btn-primary' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                        onClick={() => setChartType('bar')}
                        title="Bar Chart"
                      >
                        📊
                      </button>
                      <button 
                        type="button" 
                        className={`btn btn-sm ${chartType === 'doughnut' ? 'btn-primary' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                        onClick={() => setChartType('doughnut')}
                        title="Doughnut Chart"
                      >
                        🍩
                      </button>
                    </div>

                    {/* Time Range Filter */}
                    <select 
                      className={`form-select form-select-sm ${darkMode ? 'bg-dark text-light' : ''}`}
                      value={timeRange}
                      onChange={(e) => setTimeRange(e.target.value)}
                      style={{width: 'auto'}}
                    >
                      <option value="all">All Time</option>
                      <option value="week">Last Week</option>
                      <option value="month">Last Month</option>
                      <option value="3months">Last 3 Months</option>
                    </select>

                    {/* Category Filter */}
                    <select 
                      className={`form-select form-select-sm ${darkMode ? 'bg-dark text-light' : ''}`}
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      style={{width: 'auto'}}
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>

                    {/* Animation Toggle */}
                    <button 
                      type="button"
                      className={`btn btn-sm ${animationsEnabled ? 'btn-success' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                      onClick={() => setAnimationsEnabled(!animationsEnabled)}
                      title={animationsEnabled ? 'Disable Animations' : 'Enable Animations'}
                    >
                      {animationsEnabled ? '🎬' : '⏸️'}
                    </button>
                  </div>
                </div>

                {/* Chart Display */}
                <div style={{height: '400px', position: 'relative'}}>
                  {formattedTransactions.length === 0 ? (
                    <p className="border border-danger rounded p-2 m-5 text-danger">No Transactions Have Been Added !</p>
                  ) : (
                    <>
                      {chartType === 'line' && <Line data={data} options={options} />}
                      {chartType === 'bar' && <Bar data={data} options={options} />}
                      {chartType === 'doughnut' && <Doughnut data={data} options={options} />}
                    </>
                  )}
                </div>

                {/* Chart Statistics */}
                <div className="mt-3 row">
                  <div className="col-md-3">
                    <small className={`text-${darkMode ? 'light' : 'muted'}`}>
                      Total Transactions: <strong>{filteredTransactions.length}</strong>
                    </small>
                  </div>
                  <div className="col-md-3">
                    <small className={`text-${darkMode ? 'light' : 'muted'}`}>
                      Total Amount: <strong>${filteredTransactions.reduce((sum, t) => sum + parseFloat(t.amount), 0).toFixed(2)}</strong>
                    </small>
                  </div>
                  <div className="col-md-3">
                    <small className={`text-${darkMode ? 'light' : 'muted'}`}>
                      Average: <strong>${filteredTransactions.length > 0 ? (filteredTransactions.reduce((sum, t) => sum + parseFloat(t.amount), 0) / filteredTransactions.length).toFixed(2) : '0.00'}</strong>
                    </small>
                  </div>
                  <div className="col-md-3">
                    <small className={`text-${darkMode ? 'light' : 'muted'}`}>
                      Time Range: <strong>{timeRange === 'all' ? 'All Time' : timeRange.charAt(0).toUpperCase() + timeRange.slice(1)}</strong>
                    </small>
                  </div>
                </div>
            </div>
            <br />
            <div className={`table-responsive border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
              <h6>Added Investments</h6>
              <p style={{ color: 'gray' }}><sup>Tracking All CRYPTO Transactions</sup></p>
              {addedInvestments.length === 0 ? (
                <p className="border border-danger rounded p-2 m-5 text-danger">No Investments Have Been Added !</p>
              ) : (
                <table className={`table table-bordered table-hover ${darkMode ? 'table-dark' : 'table-light table-light-bordered'} table-rounded`}>
                  <thead>
                    <tr>
                      <th className="hidden"> ID</th>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addedInvestments.map((investment, index) => (
                      <tr key={index}>
                        <td data-label="ID" className="hidden">{index + 1}</td>
                        <td data-label="Name"><strong>{investment.name}</strong></td>
                        <td data-label="Amount">
                          {editIndex === index ? (
                            <input
                            type="number"
                            value={editAmount}
                            onChange={(e) => setEditAmount(e.target.value)}
                            />
                          ) : (
                            investment.amount
                          )}
                        </td>
                        <td data-label="Price">{formatCurrency(investment.total_price)}</td>
                        <td data-label="Actions">
                          {editIndex === index ? (
                            <>
                              <button onClick={() => handleSaveInvestment(index)} className="btn btn-sm btn-success ml-1">Save</button>
                              <button onClick={handleCancelEdit} className="btn btn-sm btn-secondary ml-1">Cancel</button>
                            </>
                          ) : (
                            <>
                              <button onClick={() => handleRemoveInvestment(index)} className="btn btn-sm btn-danger ml-1">Remove</button>
                              <button onClick={() => handleEditInvestment(index)} className="btn btn-sm btn-primary ml-1">Edit Amount</button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <br />
            <div className={`table-responsive border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
              <h6>Goals Progress</h6>
              <p style={{ color: 'gray' }}><sup>Tracking</sup></p>
              {goalsProgress.length === 0 ? (
                <p className="border border-danger rounded p-2 m-5 text-danger">No Goals Have Been Added !</p>
              ) : (
                goalsProgress.map((goal, index) => (
                  <div key={index} className="d-flex align-items-center mb-2 rounded" style={{ width: '120%' }}>
                    <span className="mr-2" style={{ whiteSpace: 'nowrap' }}>{goal.name}:</span>
                    <div style={{ width: 80, height: 80, position: 'relative', marginLeft: 'auto', marginRight: 'auto' }}>
                      <CircularProgressbar
                        value={(goal.saved / goal.target) * 100}
                        strokeWidth={25}
                        styles={buildStyles({
                          textColor: darkMode ? 'white' : 'black',
                          pathColor: 'url(#gradient)', // Use the gradient
                          trailColor: darkMode ? '#343a40' : '#d6d6d6',
                          pathTransitionDuration: 0.9,
                        })}
                      />
                      <svg style={{ height: 0 }}>
                        <defs>
                          <linearGradient id="gradient" gradientTransform="rotate(10)">
                            <stop offset="0%" stopColor="#17a2b8" />
                            <stop offset="25%" stopColor="#17a2b8" />
                            <stop offset="100%" stopColor="red" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '19px',
                        color: darkMode ? 'white' : 'black',
                      }}>
                        {(goal.saved / goal.target * 100).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
                <br />
                <div className={`table-responsive border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                    <h6>Overview</h6>
                    <p style={{ color: 'gray' }}><sup>Total Summary</sup></p>
                    <table className={`table table-bordered table-hover ${darkMode ? 'table-dark' : 'table-light table-light-bordered'} table-rounded`}>
                        <tbody>
                            <tr>
                                <th scope="row">Budget</th>
                                <td className="text-left" >{formatCurrency(totalBudgetAmount)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Balance</th>
                                <td className="text-left" >{formatCurrency(balance)}</td>
                            </tr>
                            <tr>
                                <th scope="row">X-penses</th>
                                <td className="text-left" >{formatCurrency(totalAmount)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Goals (saved)</th>
                                <td className="text-left" >{formatCurrency(totalGoalsSaved)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Investments</th>
                                <td className="text-left" >{formatCurrency(totalPrice)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Overview Total</th>
                                <td className="text-left" >{formatCurrency(overviewTotal)}</td>
                            </tr>
                        </tbody>
                     </table>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;