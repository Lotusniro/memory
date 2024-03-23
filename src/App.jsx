import React from 'react';
import './App.css';
import MemoryGame from '/src/components/MemoryGame'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MemoryGame />
    
  
    </div>
  );
}

export default App;