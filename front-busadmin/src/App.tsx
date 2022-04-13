import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Login } from './pages/login';
import GlobalStyle from './styles/global';
import { Dashboard } from './pages/dashboard';
import { Clients } from './pages/clients/Clients';
import { Drivers } from './pages/drivers';
import { AddDrivers } from './components/app/drivers/AddDriver';
import { getAuthTokenUser } from './utils/localStorage';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/clientes" element={<Clients />} />
        <Route path="/dashboard/motoristas" element={<Drivers />} />
        <Route path="/dashboard/motoristas/adicionar" element={<AddDrivers />} />
        <Route path="/dashboard/motoristas/detalhes/:id" element={<AddDrivers />} />
      </Routes>
    </Router>
  );
}

export default App;
