import React, { Component } from 'react';
import Welcome from './components/Welcome';
import TodoList from './Todo/TodoList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <h1>Bienvenue</h1>
           <p><Welcome name="shtex"/></p> 
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      
        <div className="">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
