// context/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode }from 'jwt-decode';
import Login from '../components/login/Login';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');
    if (token) {
      return { token, user: jwtDecode(token) };
    }
    return { token: null, user: null };
  });

  const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8000/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      const token = data.access;
      localStorage.setItem('token', token);
      setAuth({ token, user: jwtDecode(token) });
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ token: null, user: null });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth({ token, user: jwtDecode(token) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Login />
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };