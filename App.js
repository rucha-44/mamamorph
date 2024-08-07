import React from 'react';
import Chatbot from './chatbot';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          
          <h1>MamaMorph Postpartum Care</h1>
        </div>
      </header>
      <main className="App-main">
        <Chatbot />
      </main>
    </div>
  );
}

export default App;
