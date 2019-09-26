import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ContextProvider } from './global_state/contextComposer';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <ContextProvider>

    
    <div className="App">
      
      <h1>Context Combination</h1>
      <Home />
    </div>
    </ContextProvider>
  );
}

export default App;
