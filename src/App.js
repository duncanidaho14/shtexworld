import React, { Component } from 'react';
import Welcome from './components/Welcome'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <h1>Bienvenue</h1>  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      
        <div className="Welcome">
          <Welcome name="shtex"/>
        </div>
      </div>
    );
  }
}

export default App;
