import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';
const TOKEN_KEY = 'xpense_token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

export const api = axios.create({ baseURL: API_BASE_URL });

// Attach the login token to every request made through `api`.
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// If the server says the session is no longer valid, drop the token and tell the app.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const url = error.config?.url || '';
    const isAuthForm = url.includes('/login') || url.includes('/register');
    if (error.response?.status === 401 && !isAuthForm) {
      clearToken();
      window.dispatchEvent(new Event('xpense:logged-out'));
    }
    return Promise.reject(error);
  }
);

// Same as fetch(), but sends the login token (used by components that don't use axios).
export const authFetch = (url, options = {}) => {
  const token = getToken();
  const headers = { ...(options.headers || {}) };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return fetch(url, { ...options, headers }).then((response) => {
    if (response.status === 401) {
      clearToken();
      window.dispatchEvent(new Event('xpense:logged-out'));
    }
    return response;
  });
};

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
