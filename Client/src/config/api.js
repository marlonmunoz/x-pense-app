// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';

// API endpoints
export const API_ENDPOINTS = {
  balance: `${API_BASE_URL}/balance`,
  transactions: `${API_BASE_URL}/transactions`,
  goals: `${API_BASE_URL}/goals`,
  budget: `${API_BASE_URL}/budget`,
  investments: `${API_BASE_URL}/investments`,
};

// Helper function to build full URL for dynamic endpoints
export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Export base URL for direct use
export { API_BASE_URL };
