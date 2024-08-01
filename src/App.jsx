
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContexts';
import { useEffect } from 'react';





function App() {

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      if(location.pathname !== '/login' && location.pathname !== '/signup')
        navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />


      </Routes>
    </>
  )
}

export default App
