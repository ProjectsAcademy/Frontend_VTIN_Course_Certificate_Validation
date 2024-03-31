import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Home from './views/home';
import './App.css'

function App() {
  return (
    <BrowserRouter> {/* Wrap your application with BrowserRouter */}
      <Home />
    </BrowserRouter>
  );
}

export default App;
