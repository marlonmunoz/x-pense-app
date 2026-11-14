import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BarChart3, DollarSign, CreditCard, Receipt, Target, TrendingUp, Lightbulb, Plus } from 'lucide-react';

// Fixed two-row navigation bar shown only on small screens.
const MobileBottomNav = ({ darkMode }) => {
  const location = useLocation();
  
  // Split navigation items into two rows of 4 tabs each
  const topRowItems = [
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { path: '/budget', icon: DollarSign, label: 'Budget' },
    { path: '/balance', icon: CreditCard, label: 'Balance' },
    { path: '/add', icon: Plus, label: 'X-PENSE' }
  ];

  const bottomRowItems = [
    { path: '/transactions', icon: Receipt, label: 'Transactions' },
    { path: '/goals', icon: Target, label: 'Goals' },
    { path: '/investments', icon: TrendingUp, label: 'Investments' },
    { path: '/ai-demo', icon: Lightbulb, label: 'AI Demo' }
  ];

  const renderNavRow = (items) => (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '50%'
    }}>
      {items.map((item, index) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        const isXPense = item.path === '/add';
        
        return (
          <NavLink
            key={index}
            to={item.path}
            className="text-decoration-none"
            onClick={() => {
              // Immediate scroll to top on mobile navigation
              if (window.innerWidth <= 768) {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                
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
              padding: isXPense ? '6px 4px' : '4px 2px', // Larger padding for X-PENSE
              flex: '1 1 25%', // Each tab takes 25% width (4 tabs per row)
              borderRadius: isXPense ? '12px' : '8px', // More rounded for X-PENSE
              margin: '0 1px',
              transition: 'all 0.2s ease',
              color: isXPense 
                ? (isActive ? '#ffffff' : '#ffffff') // Always white text for X-PENSE
                : (isActive ? '#4299e1' : (darkMode ? '#a0aec0' : '#6c757d')),
              background: isXPense 
                ? (isActive 
                  ? 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' // Active green gradient
                  : 'linear-gradient(135deg, #28a745 0%, #20c997 100%)') // Always green for X-PENSE
                : (isActive 
                  ? (darkMode ? 'rgba(66, 153, 225, 0.15)' : 'rgba(66, 153, 225, 0.15)')
                  : 'transparent'),
              boxShadow: isXPense 
                ? '0 4px 15px rgba(40, 167, 69, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)' 
                : 'none',
              textAlign: 'center',
              transform: isXPense ? 'scale(1.05)' : 'scale(1)' // Slightly larger X-PENSE
            }}
          >
            <Icon 
              size={isXPense ? 18 : 16} // Larger icon for X-PENSE
              style={{ 
                marginBottom: '2px',
                strokeWidth: isXPense ? 3 : (isActive ? 2.5 : 2), // Thicker stroke for X-PENSE
                flexShrink: 0
              }} 
            />
            <span 
              style={{ 
                fontSize: isXPense ? '10px' : '9px', // Larger text for X-PENSE
                fontWeight: isXPense ? '700' : (isActive ? '600' : '500'), // Bolder text for X-PENSE
                lineHeight: '1.1',
                display: 'block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
                letterSpacing: isXPense ? '0.5px' : 'normal' // Spacing for X-PENSE
              }}
            >
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </div>
  );

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
        padding: '4px',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        height: '100px', // Increased height for two rows
        boxSizing: 'border-box',
        transform: 'translateZ(0)'
      }}
    >
      <div 
        className="mobile-nav-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: '2px'
        }}
      >
        {/* Top row: Dashboard, Budget, Balance, X-PENSE */}
        {renderNavRow(topRowItems)}
        
        {/* Bottom row: Transactions, Goals, Investments, AI Demo */}
        {renderNavRow(bottomRowItems)}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
