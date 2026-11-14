import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BarChart3, DollarSign, CreditCard, Receipt, Target, TrendingUp, Lightbulb, Plus } from 'lucide-react';

// Left-hand navigation (plus the mobile hamburger button and overlay), the welcome box and Log out.
function Sidebar({ darkMode, toggleDarkMode, sidebarOpen, setSidebarOpen, user, onLogout }) {
  const navigate = useNavigate();

  return (
    <>
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
              onClick={() => navigate('/dashboard')}
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
              backgroundColor: isActive ? '#28a745' : (darkMode ? '#2d3748' : '#ffffff'),
              color: isActive ? 'white' : (darkMode ? '#e2e8f0' : '#2d3748'),
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
                e.target.style.backgroundColor = darkMode ? '#2d3748' : '#ffffff';
                e.target.style.color = darkMode ? '#e2e8f0' : '#2d3748';
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
            <span>Welcome {user.email.split('@')[0]}</span>
            <span>🟢</span>
            <span>Online</span>
          </small>
          {user.role === 'admin' && (
            <div className="mt-1">
              <span className="badge bg-warning text-dark">Owner / Admin</span>
            </div>
          )}
        </div>
        <button
          type="button"
          className={`btn btn-sm w-100 mt-2 ${darkMode ? 'btn-outline-light' : 'btn-outline-secondary'}`}
          onClick={onLogout}
        >
          Log out
        </button>
      </div>
    </nav>
    </>
  );
}

export default Sidebar;
