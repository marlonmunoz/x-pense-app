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
  
  // Overview interactive states
  const [selectedOverviewItem, setSelectedOverviewItem] = useState(null);
  const [showOverviewChart, setShowOverviewChart] = useState(false);
  const [overviewAnimations, setOverviewAnimations] = useState(true);
  
  // Goals interactive states
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [goalsViewMode, setGoalsViewMode] = useState('cards'); // 'cards', 'list', 'chart'
  const [goalsAnimations, setGoalsAnimations] = useState(true);
  const [showGoalsChart, setShowGoalsChart] = useState(false);
  
  // Investments interactive states
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [investmentsViewMode, setInvestmentsViewMode] = useState('cards'); // 'cards', 'table', 'chart'
  const [investmentsAnimations, setInvestmentsAnimations] = useState(true);
  const [showInvestmentsChart, setShowInvestmentsChart] = useState(false);
  
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
  
  // Overview data for interactive visualization
  const overviewData = {
    labels: ['Budget', 'Balance', 'Goals Saved', 'Investments', 'X-penses'],
    datasets: [{
      label: 'Financial Overview ($)',
      data: [totalBudgetAmount, balance, totalGoalsSaved, totalPrice, totalAmount],
      backgroundColor: [
        'rgba(40, 167, 69, 0.8)',   // Green for Budget
        'rgba(23, 162, 184, 0.8)',  // Teal for Balance  
        'rgba(255, 193, 7, 0.8)',   // Yellow for Goals
        'rgba(108, 117, 125, 0.8)', // Gray for Investments
        'rgba(220, 53, 69, 0.8)'    // Red for Expenses
      ],
      borderColor: [
        'rgba(40, 167, 69, 1)',
        'rgba(23, 162, 184, 1)', 
        'rgba(255, 193, 7, 1)',
        'rgba(108, 117, 125, 1)',
        'rgba(220, 53, 69, 1)'
      ],
      borderWidth: 2,
      hoverOffset: 10
    }]
  };

  const overviewChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: overviewAnimations ? 1200 : 0,
      easing: 'easeInOutBounce'
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: darkMode ? '#fff' : '#000',
          usePointStyle: true,
          padding: 15,
          font: {
            size: 11,
            weight: 'bold'
          }
        }
      },
      tooltip: {
        backgroundColor: darkMode ? 'rgba(51, 51, 51, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        titleColor: darkMode ? '#fff' : '#000',
        bodyColor: darkMode ? '#fff' : '#000',
        borderColor: darkMode ? '#ffc107' : '#007bff',
        borderWidth: 2,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            const total = overviewTotal;
            const percentage = total !== 0 ? ((context.raw / Math.abs(total)) * 100).toFixed(1) : '0.0';
            return `${context.label}: $${context.raw.toFixed(2)} (${percentage}%)`;
          }
        }
      }
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const elementIndex = elements[0].index;
        const labels = ['Budget', 'Balance', 'Goals Saved', 'Investments', 'X-penses'];
        setSelectedOverviewItem(labels[elementIndex]);
      }
    }
  };

  // Function to get color for overview items
  const getOverviewItemColor = (itemName) => {
    const colors = {
      'Budget': '#28a745',
      'Balance': '#17a2b8', 
      'X-penses': '#dc3545',
      'Goals (saved)': '#ffc107',
      'Investments': '#6c757d',
      'Overview Total': darkMode ? '#ffffff' : '#000000'
    };
    return colors[itemName] || (darkMode ? '#ffffff' : '#000000');
  };

  // Function to get icon for overview items
  const getOverviewItemIcon = (itemName) => {
    const icons = {
      'Budget': '💰',
      'Balance': '💳',
      'X-penses': '💸',
      'Goals (saved)': '🎯', 
      'Investments': '📈',
      'Overview Total': '📊'
    };
    return icons[itemName] || '📋';
  };

  // Goals helper functions
  const getGoalColor = (progress, index) => {
    if (progress >= 100) return '#28a745'; // Green for completed
    if (progress >= 75) return '#17a2b8';  // Teal for near completion
    if (progress >= 50) return '#ffc107';  // Yellow for halfway
    if (progress >= 25) return '#fd7e14';  // Orange for started
    return '#dc3545'; // Red for just started
  };

  const getGoalIcon = (progress, category) => {
    // Icons based on goal category or progress
    const categoryIcons = {
      'savings': '💰',
      'vacation': '✈️',
      'car': '🚗',
      'house': '🏠',
      'education': '🎓',
      'emergency': '🚨',
      'retirement': '👴',
      'investment': '📈'
    };
    
    // Default icons based on progress
    if (progress >= 100) return '🎉';
    if (progress >= 75) return '🔥';
    if (progress >= 50) return '⭐';
    if (progress >= 25) return '📈';
    return '🚀';
  };

  const getProgressLabel = (progress) => {
    if (progress >= 100) return 'Completed! 🎉';
    if (progress >= 75) return 'Almost there! 🔥';
    if (progress >= 50) return 'Halfway! ⭐';
    if (progress >= 25) return 'Good start! 📈';
    return 'Just started 🚀';
  };

  // Goals chart data
  const goalsChartData = {
    labels: goalsProgress.map(goal => goal.name),
    datasets: [{
      label: 'Goals Progress (%)',
      data: goalsProgress.map(goal => (goal.saved / goal.target) * 100),
      backgroundColor: goalsProgress.map((goal, index) => {
        const progress = (goal.saved / goal.target) * 100;
        return getGoalColor(progress, index) + '80'; // Add transparency
      }),
      borderColor: goalsProgress.map((goal, index) => {
        const progress = (goal.saved / goal.target) * 100;
        return getGoalColor(progress, index);
      }),
      borderWidth: 2,
      hoverOffset: 8
    }]
  };

  const goalsChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: goalsAnimations ? 1500 : 0,
      easing: 'easeInOutElastic'
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: darkMode ? '#fff' : '#000',
          usePointStyle: true,
          padding: 12,
          font: {
            size: 10,
            weight: 'bold'
          }
        }
      },
      tooltip: {
        backgroundColor: darkMode ? 'rgba(51, 51, 51, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        titleColor: darkMode ? '#fff' : '#000',
        bodyColor: darkMode ? '#fff' : '#000',
        borderColor: darkMode ? '#ffc107' : '#007bff',
        borderWidth: 2,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            const goal = goalsProgress[context.dataIndex];
            return [
              `Progress: ${context.raw.toFixed(1)}%`,
              `Saved: $${goal.saved.toFixed(2)}`,
              `Target: $${goal.target.toFixed(2)}`,
              `Remaining: $${(goal.target - goal.saved).toFixed(2)}`
            ];
          }
        }
      }
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const elementIndex = elements[0].index;
        const goal = goalsProgress[elementIndex];
        setSelectedGoal(selectedGoal?.id === goal.id ? null : goal);
      }
    }
  };
  
  // Investments helper functions
  const getInvestmentColor = (investment, index) => {
    const cryptoColors = {
      'bitcoin': '#f7931a',
      'btc': '#f7931a',
      'ethereum': '#627eea',
      'eth': '#627eea',
      'usdc': '#2775ca',
      'xrp': '#23292f',
      'ripple': '#23292f',
      'cardano': '#0033ad',
      'ada': '#0033ad',
      'solana': '#9945ff',
      'sol': '#9945ff'
    };
    
    const name = investment.name.toLowerCase();
    
    // Check for specific crypto colors
    for (const crypto in cryptoColors) {
      if (name.includes(crypto)) {
        return cryptoColors[crypto];
      }
    }
    
    // Fallback to dynamic colors based on performance
    const performanceColors = [
      '#28a745', // Green
      '#17a2b8', // Teal
      '#ffc107', // Yellow
      '#fd7e14', // Orange
      '#dc3545', // Red
      '#6f42c1', // Purple
      '#e83e8c', // Pink
      '#20c997'  // Mint
    ];
    
    return performanceColors[index % performanceColors.length];
  };

  const getInvestmentIcon = (investment) => {
    const name = investment.name.toLowerCase();
    const cryptoIcons = {
      'bitcoin': '₿',
      'btc': '₿',
      'ethereum': 'Ξ',
      'eth': 'Ξ',
      'usdc': '💵',
      'xrp': '🌊',
      'ripple': '🌊',
      'cardano': '🎴',
      'ada': '🎴',
      'solana': '☀️',
      'sol': '☀️'
    };
    
    for (const crypto in cryptoIcons) {
      if (name.includes(crypto)) {
        return cryptoIcons[crypto];
      }
    }
    
    return '🪙'; // Default crypto icon
  };

  const getInvestmentPerformance = (investment) => {
    // Calculate performance based on price changes (mock data for demo)
    const mockPerformance = Math.random() * 20 - 10; // -10% to +10%
    return mockPerformance;
  };

  const getPerformanceLabel = (performance) => {
    if (performance > 5) return { label: 'Strong Gain! 🚀', class: 'success' };
    if (performance > 0) return { label: 'Gaining 📈', class: 'success' };
    if (performance > -5) return { label: 'Stable 📊', class: 'warning' };
    return { label: 'Down 📉', class: 'danger' };
  };

  // Investments chart data
  const investmentsChartData = {
    labels: addedInvestments.map(investment => investment.name),
    datasets: [{
      label: 'Investment Value ($)',
      data: addedInvestments.map(investment => investment.total_price),
      backgroundColor: addedInvestments.map((investment, index) => 
        getInvestmentColor(investment, index) + '80'
      ),
      borderColor: addedInvestments.map((investment, index) => 
        getInvestmentColor(investment, index)
      ),
      borderWidth: 3,
      hoverOffset: 12,
      hoverBorderWidth: 4
    }]
  };

  const investmentsChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: investmentsAnimations ? 1800 : 0,
      easing: 'easeInOutBack'
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: darkMode ? '#fff' : '#000',
          usePointStyle: true,
          padding: 15,
          font: {
            size: 11,
            weight: 'bold'
          },
          generateLabels: function(chart) {
            const original = ChartJS.defaults.plugins.legend.labels.generateLabels;
            const labels = original.call(this, chart);
            
            return labels.map((label, index) => {
              const investment = addedInvestments[index];
              label.text = `${getInvestmentIcon(investment)} ${label.text}`;
              return label;
            });
          }
        }
      },
      tooltip: {
        backgroundColor: darkMode ? 'rgba(51, 51, 51, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        titleColor: darkMode ? '#fff' : '#000',
        bodyColor: darkMode ? '#fff' : '#000',
        borderColor: darkMode ? '#ffc107' : '#007bff',
        borderWidth: 2,
        cornerRadius: 10,
        callbacks: {
          title: function(context) {
            const investment = addedInvestments[context[0].dataIndex];
            return `${getInvestmentIcon(investment)} ${investment.name}`;
          },
          label: function(context) {
            const investment = addedInvestments[context.dataIndex];
            const performance = getInvestmentPerformance(investment);
            return [
              `Value: $${context.raw.toFixed(2)}`,
              `Amount: ${investment.amount}`,
              `Price per unit: $${investment.pricePerUnit?.toFixed(2) || 'N/A'}`,
              `Performance: ${performance.toFixed(2)}%`,
              `Status: ${getPerformanceLabel(performance).label}`
            ];
          }
        }
      }
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const elementIndex = elements[0].index;
        const investment = addedInvestments[elementIndex];
        setSelectedInvestment(selectedInvestment?.id === investment.id ? null : investment);
      }
    }
  };
  

  return (
    <div className={`container-fluid ${darkMode ? 'dark-mode' : 'light-mode'}`} >
      <style>{`
        .dashboard-header {
          text-align: center;
          margin-bottom: 30px;
          padding: 30px;
          border-radius: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .dashboard-header h1 {
          font-size: 2.5rem;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          font-weight: bold;
        }
      `}</style>
      <div className="row"  >
        <div className="col-12" >
            <div className="dashboard-header">
                <h1>Main Dashboard</h1>
            </div>
            <div className="summary">
                <h5 style={{ 
                    fontSize: '1.8rem', 
                    margin: '0 0 10px 0', 
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    color: darkMode ? '#e2e8f0' : '#2d3748'
                }}>Recent Transactions</h5> 
                <br />
                <button   onClick={() => navigate('/transactions')} className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} responsive`}> View All Transactions</button>
            </div>
            <br />
            <div className={`charts border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                {/* Interactive Chart Controls */}
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                  <div>
                    <h6 style={{ 
                        fontSize: '1.8rem', 
                        margin: '0 0 10px 0', 
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        color: darkMode ? '#e2e8f0' : '#2d3748'
                    }}>Spending Over Time Graph</h6>
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
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                <div>
                  <h6 style={{ 
                      fontSize: '1.8rem', 
                      margin: '0 0 10px 0', 
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                      color: darkMode ? '#e2e8f0' : '#2d3748'
                  }}>🚀 Crypto Investments</h6>
                  <p style={{ color: 'gray' }}><sup>Interactive Portfolio Tracking Dashboard</sup></p>
                </div>
                
                <div className="d-flex gap-2 flex-wrap">
                  {/* View Mode Selector */}
                  <div className="btn-group" role="group">
                    <button 
                      type="button" 
                      className={`btn btn-sm ${investmentsViewMode === 'cards' ? 'btn-primary' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                      onClick={() => setInvestmentsViewMode('cards')}
                      title="Card View"
                    >
                      🎴
                    </button>
                    <button 
                      type="button" 
                      className={`btn btn-sm ${investmentsViewMode === 'table' ? 'btn-primary' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                      onClick={() => setInvestmentsViewMode('table')}
                      title="Table View"
                    >
                      📋
                    </button>
                  </div>

                  {/* Investments Chart Toggle */}
                  <button 
                    type="button"
                    className={`btn btn-sm ${showInvestmentsChart ? 'btn-success' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                    onClick={() => setShowInvestmentsChart(!showInvestmentsChart)}
                    title={showInvestmentsChart ? 'Hide Portfolio Chart' : 'Show Portfolio Chart'}
                  >
                    {showInvestmentsChart ? '📊' : '📈'}
                  </button>
                  
                  {/* Animation Toggle */}
                  <button 
                    type="button"
                    className={`btn btn-sm ${investmentsAnimations ? 'btn-warning' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                    onClick={() => setInvestmentsAnimations(!investmentsAnimations)}
                    title={investmentsAnimations ? 'Disable Animations' : 'Enable Animations'}
                  >
                    {investmentsAnimations ? '🎬' : '⏸️'}
                  </button>
                </div>
              </div>

              {/* Investments Chart */}
              {showInvestmentsChart && addedInvestments.length > 0 && (
                <div className="mb-4" style={{height: '350px', position: 'relative'}}>
                  <Doughnut data={investmentsChartData} options={investmentsChartOptions} />
                  {selectedInvestment && (
                    <div className={`alert ${darkMode ? 'alert-dark' : 'alert-light'} mt-2`} 
                         style={{border: `2px solid ${getInvestmentColor(selectedInvestment, 0)}`}}>
                      <strong>{getInvestmentIcon(selectedInvestment)} Selected: {selectedInvestment.name}</strong>
                      <br />
                      <small>
                        Value: ${selectedInvestment.total_price.toFixed(2)} • 
                        Amount: {selectedInvestment.amount} • 
                        Price: ${selectedInvestment.pricePerUnit?.toFixed(2) || 'N/A'}
                      </small>
                    </div>
                  )}
                </div>
              )}

              {addedInvestments.length === 0 ? (
                <div className="text-center p-5">
                  <div className="mb-3" style={{fontSize: '4rem'}}>🚀</div>
                  <h5 className="text-muted">No Investments Have Been Added!</h5>
                  <p className="text-muted">Start building your crypto portfolio today</p>
                  <button className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-primary'}`}>
                    ➕ Add Your First Investment
                  </button>
                </div>
              ) : (
                <>
                  {/* Card View */}
                  {investmentsViewMode === 'cards' && (
                    <div className="row">
                      {addedInvestments.map((investment, index) => {
                        const investmentColor = getInvestmentColor(investment, index);
                        const performance = getInvestmentPerformance(investment);
                        const performanceInfo = getPerformanceLabel(performance);
                        const isSelected = selectedInvestment?.id === investment.id;
                        
                        return (
                          <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div 
                              className={`card h-100 ${darkMode ? 'bg-dark text-light' : 'bg-light'} border-0 shadow-sm`}
                              style={{ 
                                cursor: 'pointer',
                                transition: investmentsAnimations ? 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'none',
                                borderLeft: `5px solid ${investmentColor}`,
                                transform: isSelected ? 'scale(1.08) rotate(-1deg)' : 'scale(1)',
                                boxShadow: isSelected ? 
                                  `0 15px 40px ${investmentColor}50` : 
                                  '0 5px 20px rgba(0,0,0,0.1)',
                                background: isSelected ? 
                                  (darkMode ? `linear-gradient(135deg, #2d3748 0%, ${investmentColor}25 100%)` : `linear-gradient(135deg, #f8f9fa 0%, ${investmentColor}20 100%)`) :
                                  undefined
                              }}
                              onClick={() => setSelectedInvestment(isSelected ? null : investment)}
                              onMouseEnter={(e) => {
                                if (investmentsAnimations && !isSelected) {
                                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                                  e.currentTarget.style.boxShadow = `0 10px 30px ${investmentColor}40`;
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (investmentsAnimations) {
                                  e.currentTarget.style.transform = isSelected ? 'scale(1.08) rotate(-1deg)' : 'scale(1)';
                                  e.currentTarget.style.boxShadow = isSelected ? 
                                    `0 15px 40px ${investmentColor}50` : 
                                    '0 5px 20px rgba(0,0,0,0.1)';
                                }
                              }}
                            >
                              <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                  <div className="flex-grow-1">
                                    <h6 className="card-title mb-2 d-flex align-items-center" style={{color: investmentColor}}>
                                      <span className="me-2" style={{fontSize: '2rem'}}>
                                        {getInvestmentIcon(investment)}
                                      </span>
                                      <div>
                                        <div>{investment.name}</div>
                                        <small className={`badge bg-${performanceInfo.class} mt-1`}>
                                          {performanceInfo.label}
                                        </small>
                                      </div>
                                    </h6>
                                  </div>
                                  
                                  <div className="text-end">
                                    <div 
                                      className="rounded-circle d-flex align-items-center justify-content-center"
                                      style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: `${investmentColor}20`,
                                        border: `3px solid ${investmentColor}40`
                                      }}
                                    >
                                      <span style={{fontSize: '24px'}}>
                                        {getInvestmentIcon(investment)}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {/* Investment Value */}
                                <div className="text-center mb-3">
                                  <h3 className="mb-1" style={{color: investmentColor}}>
                                    {formatCurrency(investment.total_price)}
                                  </h3>
                                  <small className="text-muted">Portfolio Value</small>
                                </div>

                                {/* Investment Details */}
                                <div className="row text-center mb-3">
                                  <div className="col-6">
                                    <small className="text-muted">Amount</small>
                                    <div style={{color: investmentColor, fontWeight: 'bold'}}>
                                      {editIndex === index ? (
                                        <input
                                          type="number"
                                          value={editAmount}
                                          onChange={(e) => setEditAmount(e.target.value)}
                                          className={`form-control form-control-sm ${darkMode ? 'bg-dark text-light' : ''}`}
                                          style={{borderColor: investmentColor}}
                                        />
                                      ) : (
                                        investment.amount
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <small className="text-muted">Price/Unit</small>
                                    <div style={{color: investmentColor, fontWeight: 'bold'}}>
                                      ${investment.pricePerUnit?.toFixed(2) || 'N/A'}
                                    </div>
                                  </div>
                                </div>

                                {/* Performance Indicator */}
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between align-items-center mb-1">
                                    <small className="text-muted">Performance</small>
                                    <small style={{color: performance > 0 ? '#28a745' : '#dc3545'}}>
                                      {performance > 0 ? '+' : ''}{performance.toFixed(2)}%
                                    </small>
                                  </div>
                                  <div className="progress" style={{height: '6px', borderRadius: '10px'}}>
                                    <div 
                                      className="progress-bar"
                                      style={{
                                        width: `${Math.abs(performance) * 5}%`,
                                        backgroundColor: performance > 0 ? '#28a745' : '#dc3545',
                                        borderRadius: '10px',
                                        transition: investmentsAnimations ? 'width 1.5s ease-out' : 'none'
                                      }}
                                    ></div>
                                  </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="d-flex gap-2">
                                  {editIndex === index ? (
                                    <>
                                      <button 
                                        onClick={() => handleSaveInvestment(index)} 
                                        className="btn btn-sm btn-success flex-fill"
                                        style={{borderRadius: '8px'}}
                                      >
                                        💾 Save
                                      </button>
                                      <button 
                                        onClick={handleCancelEdit} 
                                        className="btn btn-sm btn-secondary flex-fill"
                                        style={{borderRadius: '8px'}}
                                      >
                                        ❌ Cancel
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <button 
                                        onClick={() => handleEditInvestment(index)} 
                                        className="btn btn-sm flex-fill"
                                        style={{
                                          backgroundColor: `${investmentColor}20`,
                                          color: investmentColor,
                                          border: `1px solid ${investmentColor}40`,
                                          borderRadius: '8px'
                                        }}
                                      >
                                        ✏️ Edit
                                      </button>
                                      <button 
                                        onClick={() => handleRemoveInvestment(index)} 
                                        className="btn btn-sm btn-outline-danger flex-fill"
                                        style={{borderRadius: '8px'}}
                                      >
                                        🗑️ Remove
                                      </button>
                                    </>
                                  )}
                                </div>

                                {/* Expanded Details */}
                                {isSelected && (
                                  <div className="mt-3 p-3 rounded" 
                                       style={{
                                         backgroundColor: `${investmentColor}15`,
                                         border: `1px solid ${investmentColor}40`,
                                         animation: investmentsAnimations ? 'fadeIn 0.3s ease-in' : 'none'
                                       }}>
                                    <h6 style={{color: investmentColor}}>📊 Investment Analytics</h6>
                                    <div className="row text-center">
                                      <div className="col-4">
                                        <small>Total Return</small><br />
                                        <strong style={{color: performance > 0 ? '#28a745' : '#dc3545'}}>
                                          ${(investment.total_price * performance / 100).toFixed(2)}
                                        </strong>
                                      </div>
                                      <div className="col-4">
                                        <small>Portfolio %</small><br />
                                        <strong style={{color: investmentColor}}>
                                          {((investment.total_price / totalPrice) * 100).toFixed(1)}%
                                        </strong>
                                      </div>
                                      <div className="col-4">
                                        <small>Risk Level</small><br />
                                        <strong style={{color: investmentColor}}>
                                          {Math.abs(performance) > 5 ? 'High 🔥' : Math.abs(performance) > 2 ? 'Medium ⚡' : 'Low 🛡️'}
                                        </strong>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Table View */}
                  {investmentsViewMode === 'table' && (
                    <div className="table-responsive">
                      <table className={`table table-hover ${darkMode ? 'table-dark' : 'table-light'}`} style={{borderRadius: '10px', overflow: 'hidden'}}>
                        <thead>
                          <tr style={{background: darkMode ? '#495057' : '#f8f9fa'}}>
                            <th>Asset</th>
                            <th>Amount</th>
                            <th>Price/Unit</th>
                            <th>Total Value</th>
                            <th>Performance</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {addedInvestments.map((investment, index) => {
                            const investmentColor = getInvestmentColor(investment, index);
                            const performance = getInvestmentPerformance(investment);
                            const performanceInfo = getPerformanceLabel(performance);
                            const isSelected = selectedInvestment?.id === investment.id;
                            
                            return (
                              <tr 
                                key={index}
                                className={isSelected ? 'table-active' : ''}
                                style={{
                                  borderLeft: `4px solid ${investmentColor}`,
                                  cursor: 'pointer',
                                  transition: investmentsAnimations ? 'all 0.3s ease' : 'none',
                                  backgroundColor: isSelected ? `${investmentColor}10` : undefined
                                }}
                                onClick={() => setSelectedInvestment(isSelected ? null : investment)}
                              >
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span style={{fontSize: '1.5rem', marginRight: '10px'}}>
                                      {getInvestmentIcon(investment)}
                                    </span>
                                    <div>
                                      <strong style={{color: investmentColor}}>{investment.name}</strong>
                                      <br />
                                      <small className={`badge bg-${performanceInfo.class}`}>
                                        {performanceInfo.label}
                                      </small>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  {editIndex === index ? (
                                    <input
                                      type="number"
                                      value={editAmount}
                                      onChange={(e) => setEditAmount(e.target.value)}
                                      className={`form-control form-control-sm ${darkMode ? 'bg-dark text-light' : ''}`}
                                      style={{borderColor: investmentColor, maxWidth: '100px'}}
                                    />
                                  ) : (
                                    <strong style={{color: investmentColor}}>{investment.amount}</strong>
                                  )}
                                </td>
                                <td style={{color: investmentColor}}>
                                  ${investment.pricePerUnit?.toFixed(2) || 'N/A'}
                                </td>
                                <td>
                                  <strong style={{color: investmentColor}}>
                                    {formatCurrency(investment.total_price)}
                                  </strong>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span style={{color: performance > 0 ? '#28a745' : '#dc3545', marginRight: '8px'}}>
                                      {performance > 0 ? '📈' : '📉'}{performance.toFixed(2)}%
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  {editIndex === index ? (
                                    <div className="btn-group">
                                      <button 
                                        onClick={(e) => {e.stopPropagation(); handleSaveInvestment(index);}} 
                                        className="btn btn-sm btn-success"
                                      >
                                        💾
                                      </button>
                                      <button 
                                        onClick={(e) => {e.stopPropagation(); handleCancelEdit();}} 
                                        className="btn btn-sm btn-secondary"
                                      >
                                        ❌
                                      </button>
                                    </div>
                                  ) : (
                                    <div className="btn-group">
                                      <button 
                                        onClick={(e) => {e.stopPropagation(); handleEditInvestment(index);}} 
                                        className="btn btn-sm"
                                        style={{
                                          backgroundColor: `${investmentColor}20`,
                                          color: investmentColor,
                                          border: `1px solid ${investmentColor}40`
                                        }}
                                      >
                                        ✏️
                                      </button>
                                      <button 
                                        onClick={(e) => {e.stopPropagation(); handleRemoveInvestment(index);}} 
                                        className="btn btn-sm btn-outline-danger"
                                      >
                                        🗑️
                                      </button>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Portfolio Summary Statistics */}
                  <div className={`mt-4 p-3 rounded ${darkMode ? 'bg-secondary' : 'bg-light'}`}>
                    <h6 className="mb-3" style={{ 
                        fontSize: '1.2rem', 
                        fontWeight: '700',
                        color: darkMode ? '#e2e8f0' : '#2d3748'
                    }}>💼 Portfolio Summary</h6>
                    <div className="row text-center">
                      <div className="col-md-3">
                        <strong style={{color: '#28a745'}}>🚀 Total Assets</strong><br />
                        <span style={{color: '#28a745', fontSize: '1.5rem'}}>{addedInvestments.length}</span>
                      </div>
                      <div className="col-md-3">
                        <strong style={{color: '#17a2b8'}}>💰 Portfolio Value</strong><br />
                        <span style={{color: '#17a2b8', fontSize: '1.2rem'}}>
                          {formatCurrency(totalPrice)}
                        </span>
                      </div>
                      <div className="col-md-3">
                        <strong style={{color: '#ffc107'}}>📊 Avg. Performance</strong><br />
                        <span style={{color: '#ffc107', fontSize: '1.2rem'}}>
                          {addedInvestments.length > 0 ? 
                            (addedInvestments.reduce((sum, inv) => sum + getInvestmentPerformance(inv), 0) / addedInvestments.length).toFixed(2) + '%' : 
                            '0.0%'
                          }
                        </span>
                      </div>
                      <div className="col-md-3">
                        <strong style={{color: '#dc3545'}}>🎯 Diversity Score</strong><br />
                        <span style={{color: '#dc3545', fontSize: '1.2rem'}}>
                          {addedInvestments.length > 0 ? Math.min(addedInvestments.length * 20, 100) : 0}%
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <br />
            <div className={`table-responsive border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                <div>
                  <h6 style={{ 
                      fontSize: '1.8rem', 
                      margin: '0 0 10px 0', 
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                      color: darkMode ? '#e2e8f0' : '#2d3748'
                  }}>🎯 Goals Progress</h6>
                  <p style={{ color: 'gray' }}><sup>Interactive Goal Tracking Dashboard</sup></p>
                </div>
                
                <div className="d-flex gap-2 flex-wrap">
                  {/* View Mode Selector */}
                  <div className="btn-group" role="group">
                    <button 
                      type="button" 
                      className={`btn btn-sm ${goalsViewMode === 'cards' ? 'btn-primary' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                      onClick={() => setGoalsViewMode('cards')}
                      title="Card View"
                    >
                      🎴
                    </button>
                    <button 
                      type="button" 
                      className={`btn btn-sm ${goalsViewMode === 'list' ? 'btn-primary' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                      onClick={() => setGoalsViewMode('list')}
                      title="List View"
                    >
                      📋
                    </button>
                  </div>

                  {/* Goals Chart Toggle */}
                  <button 
                    type="button"
                    className={`btn btn-sm ${showGoalsChart ? 'btn-success' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                    onClick={() => setShowGoalsChart(!showGoalsChart)}
                    title={showGoalsChart ? 'Hide Goals Chart' : 'Show Goals Chart'}
                  >
                    {showGoalsChart ? '📊' : '📈'}
                  </button>
                  
                  {/* Animation Toggle */}
                  <button 
                    type="button"
                    className={`btn btn-sm ${goalsAnimations ? 'btn-warning' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                    onClick={() => setGoalsAnimations(!goalsAnimations)}
                    title={goalsAnimations ? 'Disable Animations' : 'Enable Animations'}
                  >
                    {goalsAnimations ? '🎬' : '⏸️'}
                  </button>
                </div>
              </div>

              {/* Goals Chart */}
              {showGoalsChart && goalsProgress.length > 0 && (
                <div className="mb-4" style={{height: '300px', position: 'relative'}}>
                  <Doughnut data={goalsChartData} options={goalsChartOptions} />
                  {selectedGoal && (
                    <div className={`alert ${darkMode ? 'alert-dark' : 'alert-light'} mt-2`} 
                         style={{border: `2px solid ${getGoalColor((selectedGoal.saved / selectedGoal.target) * 100)}`}}>
                      <strong>{getGoalIcon((selectedGoal.saved / selectedGoal.target) * 100)} Selected: {selectedGoal.name}</strong>
                      <br />
                      <small>
                        Progress: {((selectedGoal.saved / selectedGoal.target) * 100).toFixed(1)}% • 
                        Saved: ${selectedGoal.saved.toFixed(2)} • 
                        Target: ${selectedGoal.target.toFixed(2)}
                      </small>
                    </div>
                  )}
                </div>
              )}

              {goalsProgress.length === 0 ? (
                <div className="text-center p-5">
                  <div className="mb-3" style={{fontSize: '4rem'}}>🎯</div>
                  <h5 className="text-muted">No Goals Have Been Added!</h5>
                  <p className="text-muted">Start setting financial goals to track your progress</p>
                  <button className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-primary'}`}>
                    ➕ Add Your First Goal
                  </button>
                </div>
              ) : (
                <>
                  {/* Card View */}
                  {goalsViewMode === 'cards' && (
                    <div className="row">
                      {goalsProgress.map((goal, index) => {
                        const progress = (goal.saved / goal.target) * 100;
                        const goalColor = getGoalColor(progress, index);
                        const isSelected = selectedGoal?.id === goal.id;
                        
                        return (
                          <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div 
                              className={`card h-100 ${darkMode ? 'bg-dark text-light' : 'bg-light'} border-0 shadow-sm`}
                              style={{ 
                                cursor: 'pointer',
                                transition: goalsAnimations ? 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'none',
                                borderLeft: `5px solid ${goalColor}`,
                                transform: isSelected ? 'scale(1.08) rotate(1deg)' : 'scale(1)',
                                boxShadow: isSelected ? 
                                  `0 12px 35px ${goalColor}40` : 
                                  '0 4px 15px rgba(0,0,0,0.1)',
                                background: isSelected ? 
                                  (darkMode ? `linear-gradient(135deg, #2d3748 0%, ${goalColor}20 100%)` : `linear-gradient(135deg, #f8f9fa 0%, ${goalColor}15 100%)`) :
                                  undefined
                              }}
                              onClick={() => setSelectedGoal(isSelected ? null : goal)}
                              onMouseEnter={(e) => {
                                if (goalsAnimations && !isSelected) {
                                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                  e.currentTarget.style.boxShadow = `0 8px 25px ${goalColor}30`;
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (goalsAnimations) {
                                  e.currentTarget.style.transform = isSelected ? 'scale(1.08) rotate(1deg)' : 'scale(1)';
                                  e.currentTarget.style.boxShadow = isSelected ? 
                                    `0 12px 35px ${goalColor}40` : 
                                    '0 4px 15px rgba(0,0,0,0.1)';
                                }
                              }}
                            >
                              <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                  <div className="flex-grow-1">
                                    <h6 className="card-title mb-1 d-flex align-items-center" style={{color: goalColor}}>
                                      <span className="me-2" style={{fontSize: '1.5rem'}}>
                                        {getGoalIcon(progress, goal.category)}
                                      </span>
                                      {goal.name}
                                    </h6>
                                    <small className={`badge ${progress >= 100 ? 'bg-success' : progress >= 50 ? 'bg-warning' : 'bg-danger'}`}>
                                      {getProgressLabel(progress)}
                                    </small>
                                  </div>
                                </div>

                                {/* Circular Progress */}
                                <div className="d-flex justify-content-center mb-3">
                                  <div style={{ width: 100, height: 100, position: 'relative' }}>
                                    <CircularProgressbar
                                      value={progress}
                                      strokeWidth={8}
                                      styles={buildStyles({
                                        textColor: darkMode ? 'white' : 'black',
                                        pathColor: goalColor,
                                        trailColor: darkMode ? '#4a5568' : '#e2e8f0',
                                        pathTransitionDuration: goalsAnimations ? 1.5 : 0,
                                        pathTransition: goalsAnimations ? 'stroke-dashoffset 1.5s ease-in-out' : 'none',
                                      })}
                                    />
                                    <div style={{
                                      position: 'absolute',
                                      top: '50%',
                                      left: '50%',
                                      transform: 'translate(-50%, -50%)',
                                      fontSize: '14px',
                                      fontWeight: 'bold',
                                      color: goalColor,
                                    }}>
                                      {progress.toFixed(1)}%
                                    </div>
                                  </div>
                                </div>

                                {/* Goal Details */}
                                <div className="text-center">
                                  <div className="row text-center">
                                    <div className="col-6">
                                      <small className="text-muted">Saved</small>
                                      <div style={{color: goalColor, fontWeight: 'bold'}}>
                                        ${goal.saved.toFixed(2)}
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      <small className="text-muted">Target</small>
                                      <div style={{color: goalColor, fontWeight: 'bold'}}>
                                        ${goal.target.toFixed(2)}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-3">
                                  <div className="progress" style={{height: '8px', borderRadius: '10px'}}>
                                    <div 
                                      className="progress-bar"
                                      style={{
                                        width: `${Math.min(progress, 100)}%`,
                                        backgroundColor: goalColor,
                                        borderRadius: '10px',
                                        transition: goalsAnimations ? 'width 2s ease-out' : 'none',
                                        background: `linear-gradient(90deg, ${goalColor} 0%, ${goalColor}80 100%)`
                                      }}
                                    ></div>
                                  </div>
                                  <div className="d-flex justify-content-between mt-1">
                                    <small style={{color: goalColor}}>
                                      ${(goal.target - goal.saved).toFixed(2)} remaining
                                    </small>
                                    <small style={{color: goalColor}}>
                                      {progress >= 100 ? '🎉 Complete!' : `${(100 - progress).toFixed(1)}% to go`}
                                    </small>
                                  </div>
                                </div>

                                {/* Expanded Details */}
                                {isSelected && (
                                  <div className="mt-3 p-3 rounded" 
                                       style={{
                                         backgroundColor: `${goalColor}15`,
                                         border: `1px solid ${goalColor}40`,
                                         animation: goalsAnimations ? 'fadeIn 0.3s ease-in' : 'none'
                                       }}>
                                    <h6 style={{color: goalColor}}>📊 Goal Analytics</h6>
                                    <div className="row text-center">
                                      <div className="col-4">
                                        <small>Monthly Need</small><br />
                                        <strong style={{color: goalColor}}>
                                          ${((goal.target - goal.saved) / 12).toFixed(2)}
                                        </strong>
                                      </div>
                                      <div className="col-4">
                                        <small>Weekly Need</small><br />
                                        <strong style={{color: goalColor}}>
                                          ${((goal.target - goal.saved) / 52).toFixed(2)}
                                        </strong>
                                      </div>
                                      <div className="col-4">
                                        <small>Daily Need</small><br />
                                        <strong style={{color: goalColor}}>
                                          ${((goal.target - goal.saved) / 365).toFixed(2)}
                                        </strong>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* List View */}
                  {goalsViewMode === 'list' && (
                    <div className="space-y-3">
                      {goalsProgress.map((goal, index) => {
                        const progress = (goal.saved / goal.target) * 100;
                        const goalColor = getGoalColor(progress, index);
                        const isSelected = selectedGoal?.id === goal.id;
                        
                        return (
                          <div 
                            key={index} 
                            className={`p-4 rounded-lg border ${darkMode ? 'border-secondary' : 'border-light'} mb-3`}
                            style={{
                              backgroundColor: isSelected ? `${goalColor}10` : 'transparent',
                              borderLeft: `5px solid ${goalColor}`,
                              cursor: 'pointer',
                              transition: goalsAnimations ? 'all 0.3s ease' : 'none'
                            }}
                            onClick={() => setSelectedGoal(isSelected ? null : goal)}
                          >
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center flex-grow-1">
                                <span style={{fontSize: '2rem', marginRight: '1rem'}}>
                                  {getGoalIcon(progress, goal.category)}
                                </span>
                                <div className="flex-grow-1">
                                  <h6 className="mb-1" style={{color: goalColor}}>
                                    {goal.name}
                                  </h6>
                                  <div className="d-flex align-items-center">
                                    <div className="progress flex-grow-1 me-3" style={{height: '8px'}}>
                                      <div 
                                        className="progress-bar"
                                        style={{
                                          width: `${Math.min(progress, 100)}%`,
                                          backgroundColor: goalColor,
                                          transition: goalsAnimations ? 'width 1.5s ease-out' : 'none'
                                        }}
                                      ></div>
                                    </div>
                                    <small style={{color: goalColor, minWidth: '60px'}}>
                                      {progress.toFixed(1)}%
                                    </small>
                                  </div>
                                </div>
                              </div>
                              <div className="text-end ms-3">
                                <div style={{color: goalColor, fontWeight: 'bold'}}>
                                  ${goal.saved.toFixed(2)} / ${goal.target.toFixed(2)}
                                </div>
                                <small className="text-muted">
                                  ${(goal.target - goal.saved).toFixed(2)} remaining
                                </small>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Summary Statistics */}
                  <div className={`mt-4 p-3 rounded ${darkMode ? 'bg-secondary' : 'bg-light'}`}>
                    <h6 className="mb-3" style={{ 
                        fontSize: '1.2rem', 
                        fontWeight: '700',
                        color: darkMode ? '#e2e8f0' : '#2d3748'
                    }}>📈 Goals Summary</h6>
                    <div className="row text-center">
                      <div className="col-md-3">
                        <strong style={{color: '#28a745'}}>🎯 Total Goals</strong><br />
                        <span style={{color: '#28a745', fontSize: '1.5rem'}}>{goalsProgress.length}</span>
                      </div>
                      <div className="col-md-3">
                        <strong style={{color: '#17a2b8'}}>✅ Completed</strong><br />
                        <span style={{color: '#17a2b8', fontSize: '1.5rem'}}>
                          {goalsProgress.filter(goal => (goal.saved / goal.target) * 100 >= 100).length}
                        </span>
                      </div>
                      <div className="col-md-3">
                        <strong style={{color: '#ffc107'}}>💰 Total Saved</strong><br />
                        <span style={{color: '#ffc107', fontSize: '1.2rem'}}>
                          ${totalGoalsSaved.toFixed(2)}
                        </span>
                      </div>
                      <div className="col-md-3">
                        <strong style={{color: '#dc3545'}}>🎪 Total Target</strong><br />
                        <span style={{color: '#dc3545', fontSize: '1.2rem'}}>
                          ${goalsProgress.reduce((sum, goal) => sum + goal.target, 0).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
                <br />
                <div className={`table-responsive border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                        <div>
                            <h6 style={{ 
                                fontSize: '1.8rem', 
                                margin: '0 0 10px 0', 
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                color: darkMode ? '#e2e8f0' : '#2d3748'
                            }}>💼 Financial Overview</h6>
                            <p style={{ color: 'gray' }}><sup>Interactive Summary Dashboard</sup></p>
                        </div>
                        
                        <div className="d-flex gap-2">
                            {/* Overview Chart Toggle */}
                            <button 
                                type="button"
                                className={`btn btn-sm ${showOverviewChart ? 'btn-primary' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                                onClick={() => setShowOverviewChart(!showOverviewChart)}
                                title={showOverviewChart ? 'Hide Chart' : 'Show Chart'}
                            >
                                {showOverviewChart ? '📊' : '📈'}
                            </button>
                            
                            {/* Animation Toggle */}
                            <button 
                                type="button"
                                className={`btn btn-sm ${overviewAnimations ? 'btn-success' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
                                onClick={() => setOverviewAnimations(!overviewAnimations)}
                                title={overviewAnimations ? 'Disable Animations' : 'Enable Animations'}
                            >
                                {overviewAnimations ? '🎬' : '⏸️'}
                            </button>
                        </div>
                    </div>

                    {/* Overview Chart */}
                    {showOverviewChart && (
                        <div className="mb-4" style={{height: '300px', position: 'relative'}}>
                            <Doughnut data={overviewData} options={overviewChartOptions} />
                            {selectedOverviewItem && (
                                <div className={`alert ${darkMode ? 'alert-dark' : 'alert-light'} mt-2`} style={{border: `2px solid ${getOverviewItemColor(selectedOverviewItem)}`}}>
                                    <strong>{getOverviewItemIcon(selectedOverviewItem)} Selected: {selectedOverviewItem}</strong>
                                    <br />
                                    <small>Click on different segments to explore each category!</small>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Enhanced Overview Table */}
                    <div className="row">
                        {[
                            { name: 'Budget', value: totalBudgetAmount, trend: 'up' },
                            { name: 'Balance', value: balance, trend: 'stable' },
                            { name: 'X-penses', value: totalAmount, trend: 'down' },
                            { name: 'Goals (saved)', value: totalGoalsSaved, trend: 'up' },
                            { name: 'Investments', value: totalPrice, trend: 'up' },
                            { name: 'Overview Total', value: overviewTotal, trend: overviewTotal > 0 ? 'up' : 'down' }
                        ].map((item, index) => (
                            <div key={index} className="col-md-6 col-lg-4 mb-3">
                                <div 
                                    className={`card h-100 ${darkMode ? 'bg-dark text-light' : 'bg-light'} border-0 shadow-sm`}
                                    style={{ 
                                        cursor: 'pointer',
                                        transition: overviewAnimations ? 'all 0.3s ease' : 'none',
                                        borderLeft: `4px solid ${getOverviewItemColor(item.name)}`,
                                        transform: selectedOverviewItem === item.name ? 'scale(1.05)' : 'scale(1)',
                                        boxShadow: selectedOverviewItem === item.name ? 
                                            `0 8px 25px rgba(0,123,255,0.3)` : 
                                            '0 2px 10px rgba(0,0,0,0.1)'
                                    }}
                                    onClick={() => setSelectedOverviewItem(selectedOverviewItem === item.name ? null : item.name)}
                                    onMouseEnter={(e) => {
                                        if (overviewAnimations) {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (overviewAnimations) {
                                            e.currentTarget.style.transform = selectedOverviewItem === item.name ? 'scale(1.05)' : 'scale(1)';
                                        }
                                    }}
                                >
                                    <div className="card-body p-3">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div className="flex-grow-1">
                                                <h6 className="card-title mb-1" style={{color: getOverviewItemColor(item.name)}}>
                                                    {getOverviewItemIcon(item.name)} {item.name}
                                                </h6>
                                                <h4 className="mb-1" style={{color: getOverviewItemColor(item.name)}}>
                                                    {formatCurrency(item.value)}
                                                </h4>
                                                <small className={`text-${item.trend === 'up' ? 'success' : item.trend === 'down' ? 'danger' : 'muted'}`}>
                                                    {item.trend === 'up' ? '📈 Positive' : item.trend === 'down' ? '📉 Negative' : '➡️ Stable'}
                                                </small>
                                            </div>
                                            <div className="text-end">
                                                <div 
                                                    className="rounded-circle d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: `${getOverviewItemColor(item.name)}20`,
                                                        border: `2px solid ${getOverviewItemColor(item.name)}30`
                                                    }}
                                                >
                                                    <span style={{fontSize: '20px'}}>
                                                        {getOverviewItemIcon(item.name)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Progress Bar for Visual Representation */}
                                        <div className="mt-2">
                                            <div className="progress" style={{height: '4px'}}>
                                                <div 
                                                    className="progress-bar"
                                                    style={{
                                                        width: `${Math.min(Math.abs(item.value) / Math.max(totalBudgetAmount, balance, totalAmount, totalPrice, totalGoalsSaved) * 100, 100)}%`,
                                                        backgroundColor: getOverviewItemColor(item.name),
                                                        transition: overviewAnimations ? 'width 1s ease' : 'none'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        
                                        {selectedOverviewItem === item.name && (
                                            <div className="mt-2 p-2 rounded" style={{backgroundColor: `${getOverviewItemColor(item.name)}10`}}>
                                                <small>
                                                    <strong>Details:</strong><br />
                                                    {item.name === 'Budget' && 'Total budget allocated across all categories'}
                                                    {item.name === 'Balance' && 'Current available balance in accounts'}
                                                    {item.name === 'X-penses' && 'Total expenses recorded in transactions'}
                                                    {item.name === 'Goals (saved)' && 'Amount saved towards financial goals'}
                                                    {item.name === 'Investments' && 'Total value of crypto investments'}
                                                    {item.name === 'Overview Total' && 'Net financial position calculation'}
                                                </small>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Stats */}
                    <div className={`mt-3 p-3 rounded ${darkMode ? 'bg-secondary' : 'bg-light'}`}>
                        <div className="row text-center">
                            <div className="col-md-3">
                                <strong style={{color: '#28a745'}}>💰 Total Assets</strong><br />
                                <span style={{color: '#28a745'}}>{formatCurrency(totalBudgetAmount + balance + totalGoalsSaved + totalPrice)}</span>
                            </div>
                            <div className="col-md-3">
                                <strong style={{color: '#dc3545'}}>💸 Total Spent</strong><br />
                                <span style={{color: '#dc3545'}}>{formatCurrency(totalAmount)}</span>
                            </div>
                            <div className="col-md-3">
                                <strong style={{color: '#17a2b8'}}>📊 Net Worth</strong><br />
                                <span style={{color: overviewTotal >= 0 ? '#28a745' : '#dc3545'}}>{formatCurrency(overviewTotal)}</span>
                            </div>
                            <div className="col-md-3">
                                <strong style={{color: '#ffc107'}}>🎯 Savings Rate</strong><br />
                                <span style={{color: '#ffc107'}}>
                                    {totalBudgetAmount > 0 ? ((totalGoalsSaved / totalBudgetAmount) * 100).toFixed(1) : '0.0'}%
                                </span>
                            </div>
                        </div>
                    </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;