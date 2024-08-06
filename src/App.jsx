import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContexts'; 
import { useEffect } from 'react';
import AdicionarGastos from './components/addGastos/AddGastos';
import AddCategoria from './components/CardCategoria/addCategoria';

function App() {

 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/addGastos" element={<AdicionarGastos />} />
        <Route path="/addCategorias" element={<AddCategoria/>} />


      </Routes>
    </>
  );
}

export default App;
