import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './pages/login';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div>
      <Login />
      <GlobalStyle />
    </div>
  );
}

export default App;
