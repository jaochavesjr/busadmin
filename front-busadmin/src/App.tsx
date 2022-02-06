import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import GlobalStyle from './styles/global';
import { Dashboard } from './pages/dashboard';
import { Clients } from './pages/clients/Clients';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/clientes" element={<Clients />} />
      </Routes>
    </Router>
  );
}

export default App;
