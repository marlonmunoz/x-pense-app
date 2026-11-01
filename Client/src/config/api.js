import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';

export const api = axios.create({ baseURL: API_BASE_URL });

export const API_ENDPOINTS = {
  balance: `${API_BASE_URL}/balance`,
  transactions: `${API_BASE_URL}/transactions`,
  goals: `${API_BASE_URL}/goals`,
  budget: `${API_BASE_URL}/budgets`,
  investments: `${API_BASE_URL}/investments`,
};

export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

export { API_BASE_URL };
