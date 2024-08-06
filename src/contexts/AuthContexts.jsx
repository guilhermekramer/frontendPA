import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(true);
        }
    }, []);

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        setIsAuthenticated(true);
    };

    const logout = () => {
        try {
            localStorage.removeItem('token');
            setToken(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Error occurred while logging out:', error);
        }
    };

    const checkAuth = () => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token); // Atualizar estado com base na presença do token
    };

    return (
        <AuthContext.Provider value={{ token, setToken, isAuthenticated, setIsAuthenticated, login, logout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
