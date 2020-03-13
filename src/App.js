import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./components/MyCSS/Button.css"
import ButtonContainer from "./components/ButtonContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ButtonContainer/>
      </header>
    </div>
  );
}

export default App;
