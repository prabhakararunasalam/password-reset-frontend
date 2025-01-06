import React,{ useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';

const App = () => {
  const [token , setToken] = useState('');
  return (
    <div>
      <div>
        <ToastContainer/>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<RegisterPage/>} />
        <Route path='/login' element={<LoginPage setToken={setToken}/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/reset-password/:token' element={<ResetPassword/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;