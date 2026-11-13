<div style="text-align: center;">
    <h1>X-PENSE</h1>
</div>

<!-- # X-pense App -->
![Alt text](./Client/public/ai-xpense-v2.png)

A full-stack expense tracking application built with React and Flask, now powered by advanced AI features.

**Live site:** [https://x-penseapp.com](https://x-penseapp.com)

Create an account to get your own private profile. Your transactions, budgets, balances, goals and investments are only visible to you.

## 🤖 AI-POWERED FEATURES

### Intelligent Transaction Categorization
- **Automatic AI Categorization**: Transactions are automatically categorized using pattern recognition and machine learning
- **Smart Learning**: The AI learns from your corrections and improves categorization accuracy over time
- **Confidence Scoring**: Each categorization comes with a confidence score to help you trust the AI's decisions
- **Bulk Training**: Train the AI with multiple transactions at once for faster learning

### Advanced Dashboard AI
- **Financial Insights**: Get intelligent analysis of your spending patterns and financial health
- **Predictive Analytics**: AI-powered predictions for future expenses and savings goals
- **Smart Alerts**: Receive intelligent notifications about unusual spending or opportunities to save
- **Natural Language Queries**: Ask questions about your finances in plain English (e.g., "How much did I spend on food last month?")
- **Personalized Recommendations**: Get AI-driven suggestions for budget optimization and financial improvements

### Professional Financial Analysis
- **Financial Health Scoring**: Comprehensive scoring system that evaluates your overall financial wellness
- **Emergency Fund Analysis**: Intelligent assessment of your emergency fund adequacy with months of coverage calculation
- **Liquidity Ratio Analysis**: Professional-grade analysis of your liquid assets vs. total assets
- **Smart Allocation Assistant**: AI-powered recommendations for optimal money distribution across accounts
- **Risk Assessment**: Automated evaluation of financial risks and opportunities

### Enhanced Balance Management
- **Intelligent Account Consolidation**: AI suggests when and how to consolidate low-balance accounts
- **Optimal Allocation Suggestions**: Smart recommendations for distributing money across cash, bank, and savings
- **Financial Health Dashboard**: Real-time metrics and insights about your financial wellness
- **Quick Preset Applications**: AI-curated presets for different financial situations (emergency, student, family)
- **Smart Update Validation**: AI-powered validation and suggestions during balance updates
- **Bulk Update Operations**: Efficiently update multiple accounts with intelligent recommendations
- **Update History Tracking**: AI tracks and analyzes your update patterns for insights

### Interactive AI Assistant
- **Natural Language Processing**: Chat with your financial data using everyday language
- **Actionable Insights**: AI provides not just information, but actionable recommendations
- **Contextual Help**: Get relevant financial advice based on your current situation
- **Learning Preferences**: AI adapts to your financial goals and preferences over time
- **Smart Update Assistance**: AI guides you through updates with intelligent suggestions and validation

## Features is a personal finance management application that allows users to track their cash on hand, bank account balances, savings, expenses and set financial goals. The application is built using Flask for the backend and React for the frontend. In addition, under Investments tab, the user can check a live crypto price update that can be added to the dashboard to calculate over all budget.

## CORE-Features

- Add and manage transactions
- **Smart Categorization Updates**: Modify and refine transaction categories with AI learning
- **Set and track budget goals**
- **AI-Powered Budget Optimization**: Intelligent budget adjustments based on spending patterns
- **Bulk Budget Updates**: Update multiple budget items efficiently with AI validation
- **Smart Budget Recommendations**: AI suggests budget modifications based on financial analysis
- **Investment Portfolio Updates**: Real-time updates with AI-powered portfolio optimization
- **Smart Investment Adjustments**: AI analyzes market conditions and suggests portfolio updates
- **Bulk Investment Operations**: Update multiple investments efficiently with intelligent recommendations
- **View balance and budget summaries**
- Dark-Light mode support
- Mobile Compatibility
- **User accounts**: sign up and log in with email and password; each user's data is private to their account, with an owner/admin role
- **Password reset by email**: a "Forgot password?" link sends a single-use reset link that expires after 30 minutes; resetting a password also logs out every other session
- **Security basics**: login and reset rate limiting, input validation on every data route, a CORS allow-list and a request size cap
- Live Crypto Update APIs
- Responsive Graphs and Progress Bars
- CRUD ops 
- Input validation checks

### SERVER - Backend Activation
Before the first run, copy `Server/.env.example` to `Server/.env` and fill in:

- `DATABASE_URL`: your Postgres connection string (Supabase session pooler in production)
- `SECRET_KEY`: a long random string that signs login tokens. The server will not start without it. Generate one with `python3 -c "import secrets; print(secrets.token_hex(32))"`
- `ADMIN_EMAIL`: the account that signs up with this email becomes the owner/admin
- `RESEND_API_KEY` (optional locally): API key from [Resend](https://resend.com) used to email password reset links. Without it, the reset link is printed in the server terminal instead of being emailed
- `APP_URL` (production only): the address of the front-end, used to build the link in reset emails (for example `https://x-penseapp.com`). Locally it defaults to `http://localhost:5173`

Never commit `.env`.

<!-- pipenv install -->
<!-- pipenv shell -->
1. Navigate to the `Server` directory:
```
cd Server
```
1. Run the Flask application: 
```
python app.py
```

### CLIENT - Frontend Activation
1. Navigate to the `Client` directory:
```
cd Client
```
2. Install the required dependencies: 
```
nvm use 20.16
```
3. Start the React application:
```
npm run dev
```
## Usage

## Usage

- **AI-Enhanced Dashboard**: Consolidates all transactions with intelligent insights and predictions
- **Smart Transaction Entry**: Add transactions with automatic AI categorization and validation
- **Intelligent Balance Management**: Manage cash on hand, bank account balance, savings with AI-powered financial analysis
- **AI-Driven Goal Setting**: Set future goals with intelligent progress tracking and predictive completion dates
- **Smart Investment Tracking**: Monitor crypto investments with live price updates and AI-powered portfolio analysis
- **Natural Language Queries**: Ask questions about your finances in plain English and get intelligent responses
- **Automated Financial Health Monitoring**: Receive real-time financial health scores and professional-grade analysis

## RESTful APIs:
`GET` | `PUT` | `POST` | `DELETE`

## Route Testing With POSTMAN
Every route except `/register`, `/login`, `/forgot-password` and `/reset-password` requires a login token. Send `POST /login` with `{"email": "...", "password": "..."}`, then add the returned token to each request as the header `Authorization: Bearer <token>`.

`GET` Route
```
http://localhost:5001/investments
```

`POST` Route
```
http://localhost:5001/investments
```
```
Example:

{
    "name": "Bitcoin",
    "pricePerUnit": 96063.00,
    "amount": 1,
    "totalPrice": 96063.00
}
```

`PUT` Route
```
Example:

{   
    "amount": 1,
    "totalPrice": 96063.99
}
```



`DELETE` Route <sup>Replace the id# with your id</sup>
```
http://localhost:5001/investments/97
```

## 🧠 AI Features Breakdown

### 1. Intelligent Transaction Categorization Service (`aiCategorization.js`)
- **Pattern Recognition**: Advanced algorithms recognize merchant names and transaction patterns
- **Machine Learning**: Learns from user corrections to improve accuracy over time
- **Confidence Scoring**: Provides confidence levels for each categorization decision
- **Bulk Training**: Process multiple transactions simultaneously for faster AI training
- **Persistent Learning**: Stores learning patterns in localStorage for consistent improvement

### 2. Comprehensive Dashboard AI (`dashboardAI.js`)
- **Financial Insights Generator**: Analyzes spending patterns and provides actionable insights
- **Predictive Analytics Engine**: Forecasts future expenses based on historical data
- **Smart Alert System**: Monitors for unusual spending patterns and optimization opportunities
- **Recommendation Engine**: Provides personalized financial advice and suggestions
- **Natural Language Processing**: Interprets user queries and provides relevant financial information

### 3. Professional Financial Calculator (`financialCalculator.js`)
- **Financial Health Scoring**: Comprehensive scoring algorithm evaluating overall financial wellness
- **Emergency Fund Analysis**: Calculates months of expenses covered by emergency savings
- **Liquidity Ratio Calculation**: Professional-grade analysis of liquid assets vs. total assets
- **Optimal Allocation Engine**: AI-powered recommendations for money distribution
- **Risk Assessment**: Evaluates financial risks and provides mitigation strategies

### 4. Interactive AI Insights Panel (`AIInsightsPanel.jsx`)
- **Tabbed Interface**: Organized presentation of insights, predictions, alerts, and recommendations
- **Natural Language Queries**: Chat interface for asking financial questions in plain English
- **Actionable Navigation**: Direct links to relevant sections based on AI recommendations
- **Real-time Updates**: Dynamic content that adapts to current financial data

### 5. Enhanced Balance Management with AI
- **Smart Validation**: Intelligent input validation with helpful suggestions
- **AI-Powered Update Recommendations**: Real-time suggestions during balance updates
- **Bulk Update Operations**: Efficiently update multiple accounts with AI validation
- **Account Consolidation**: AI-powered recommendations for optimizing account structure
- **Financial Health Dashboard**: Real-time metrics display with professional calculations
- **Quick Presets**: AI-curated balance presets for different life situations
- **Allocation Assistant**: Smart suggestions for optimal fund distribution
- **Update History Tracking**: AI tracks and analyzes update patterns for insights
- **Smart Warning System**: Intelligent alerts during potentially problematic updates

## 🔧 Enhanced Technology Stack

### Frontend Technologies
- **React 18+**: Modern JavaScript library with hooks and context for state management
- **Bootstrap 5**: Responsive CSS framework with custom dark/light mode support
- **HTML5/CSS3**: Modern web standards with advanced styling capabilities
- **JavaScript ES6+**: Modern JavaScript features including async/await, destructuring, and modules

### Backend Technologies
- **Flask 2.x**: Lightweight Python web framework with RESTful API design
- **SQLAlchemy**: Advanced ORM with relationship management and query optimization
- **PostgreSQL (Supabase)**: Production database, with a local SQLite fallback for development
- **PyJWT**: Signed login tokens for user accounts, with passwords stored as salted hashes, and signed single-use links for password reset
- **Resend**: Transactional email service that delivers password reset emails from `noreply@x-penseapp.com`
- **Flask-Migrate**: Database version control and migration management
- **Flask-CORS**: Cross-origin resource sharing for frontend-backend communication

### AI & Intelligence Technologies
- **Custom AI Engines**: Purpose-built artificial intelligence services for financial analysis
- **Pattern Recognition Algorithms**: Advanced pattern matching for transaction categorization
- **Machine Learning Models**: Adaptive learning systems that improve accuracy over time
- **Natural Language Processing**: Text analysis and understanding for user query interpretation
- **Predictive Analytics**: Statistical models for forecasting financial trends and behaviors
- **Financial Mathematics**: Industry-standard algorithms for professional financial calculations
- **Smart Validation Engine**: AI-powered input validation with intelligent recommendations
- **Bulk Operation Intelligence**: Advanced algorithms for efficient multi-item updates

### Update & Validation Technologies
- **SmartUpdateService**: AI-powered update validation and recommendation engine
- **Real-time Validation**: Instant feedback and suggestions during data entry
- **Bulk Processing Engine**: Efficient handling of multiple simultaneous updates
- **Pattern Analysis**: Historical update analysis for personalized recommendations
- **Risk Assessment**: Automated evaluation of update risks and warnings

### Development & DevOps
- **Python 3.8+**: Modern Python runtime with type hints and advanced features
- **Node.js 20.16+**: JavaScript runtime for frontend development and build tools
- **npm/pipenv**: Package management for both frontend and backend dependencies
- **Git**: Distributed version control system for collaborative development
- **VS Code**: Integrated development environment with AI assistance
- **Cloudflare Pages**: Hosts the React frontend at x-penseapp.com
- **Railway**: Hosts the Flask API
- **Supabase**: Hosts the PostgreSQL database

### Data Management & Persistence
- **localStorage**: Client-side storage for AI learning patterns and user preferences
- **SQLite**: Lightweight database for development and testing
- **PostgreSQL**: Production-ready relational database with advanced features
- **JSON**: Data interchange format for API communication and configuration

## 💡 Enhanced User Experience Features

### AI-Powered Interactions
- **Smart Form Validation**: Intelligent input validation with contextual error messages
- **Predictive Text**: Auto-suggestions based on previous transactions and patterns
- **Contextual Help**: Dynamic assistance that adapts to user's current financial situation
- **Learning Preferences**: AI system that remembers and adapts to user preferences

### Professional Financial Analysis
- **Real-time Metrics**: Live calculation of financial health indicators and ratios
- **Visual Analytics**: Enhanced charts and graphs with AI-generated insights
- **Goal Tracking**: Intelligent progress monitoring with predictive completion dates
- **Risk Assessment**: Automated evaluation of financial risks and opportunities

### Intelligent Automation
- **Auto-categorization**: Seamless transaction classification without user intervention
- **Smart Notifications**: Relevant alerts and recommendations based on spending patterns
- **Optimization Suggestions**: AI-driven recommendations for improving financial health
- **Bulk Operations**: Intelligent batch processing for account management

### Advanced Update Features
- **Smart Update Validation**: Real-time validation with AI-powered suggestions and warnings
- **Bulk Update Intelligence**: Efficiently update multiple items with comprehensive validation
- **Update Pattern Analysis**: AI learns from your update history to provide better recommendations
- **Risk-Aware Updates**: Intelligent warnings for potentially problematic changes
- **Optimization Recommendations**: AI suggests improvements during update processes

## Usage

- **AI-Enhanced Dashboard**: Consolidates all transactions with intelligent insights and predictions
- **Smart Transaction Entry**: Add transactions with automatic AI categorization and validation
## Technologies Used

### 🤖 AI & Machine Learning
<div style="text-align: center;">
    <div style='display: inline-block;'>
        <img src="./Client/src/tech_pngs/JS_logo.png" alt="JavaScript AI Services" width="70" height="70">
        <img src="./Client/src/tech_pngs/python_logo.png" alt="Python Backend with AI" width="70" height="70">
        <img src="./Client/src/tech_pngs/React.webp" alt="React with AI Components" width="70" height="70">
        <img src="./Client/src/tech_pngs/flask_logo.png" alt="Flask API with AI Endpoints" width="80" height="70">
        <img src="./Client/src/tech_pngs/psql_logo.webp" alt="Database with AI Analytics" width="70" height="70">
        <img src="./Client/src/tech_pngs/Bootstrap_logo.png" alt="Responsive AI Interface" width="70" height="70">
        <img src="./Client/src/tech_pngs/html_css_logo.png" alt="Modern Web with AI Features" width="80" height="70">
    </div>
</div>

**Enhanced with Custom AI Services:**
- 🧠 **Intelligent Transaction Categorization** - Advanced pattern recognition and machine learning
- 📊 **Financial Health Analysis** - Professional-grade financial calculations and insights  
- 🔮 **Predictive Analytics** - AI-powered forecasting and trend analysis
- 💬 **Natural Language Processing** - Chat with your financial data in plain English
- 🎯 **Smart Recommendations** - Personalized financial advice and optimization suggestions
- 🤖 **Adaptive Learning** - AI that improves and learns from your financial behavior
