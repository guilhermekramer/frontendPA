import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContexts'; 
import { useEffect } from 'react';

function App() {
  const { isAuthenticated, checkAuth } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    checkAuth(); 

    if (!isAuthenticated && location.pathname !== '/login' && location.pathname !== '/signup') {
      navigate('/login');
    }

    if (isAuthenticated && (location.pathname === '/login' || location.pathname === '/signup')) {
      navigate('/');
    }
  }, [isAuthenticated, navigate, location.pathname, checkAuth]); 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
