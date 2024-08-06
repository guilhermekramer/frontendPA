import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContexts'; 
import { useEffect } from 'react';
import AdicionarGastos from './components/addGastos/AddGastos';

function App() {

 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/addgasto" element={ <AdicionarGastos /> } />
      </Routes>
    </>
  );
}

export default App;
