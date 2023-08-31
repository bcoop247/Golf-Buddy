import Navbar from './Navbar';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FetchPlayers from './FetchPlayers';
import Tournaments from './Tournaments';
import './styles.css'

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
          <Routes>
          <Route index element={<Home />} />
          <Route path="FetchPlayers" element={<FetchPlayers />} />
          <Route path="Tournaments" element={<Tournaments />} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
