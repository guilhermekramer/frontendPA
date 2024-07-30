
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import { Routes, Route } from 'react-router-dom'


function App() {

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
