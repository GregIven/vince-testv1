import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import PageIndex from './pages/PageIndex'

function App() {
  return (
    <div className="App">
      <Router>
        <PageIndex />
      </Router>
    </div>
  );
}

export default App;
