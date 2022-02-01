import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import GlobalStyle from './styles/global';
import { Dashboard } from './pages/dashboard';

function App() {
  return (
    <Router>
      <Login />
      <GlobalStyle />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
