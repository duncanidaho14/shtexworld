import React, { Component } from 'react';
import Welcome from './components/Welcome';
import TodoList from './Todo/TodoList';
import NavbarSide from './NavbarSide/NavbarSide';
import Calendar from './Calendar/Calendar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <nav>
          <NavbarSide />
        </nav>
        <header className="App-header">       
          <img src={logo} className="App-logo" alt="logo" />
          <h1><Welcome name="shtex"/></h1>   
        </header>
      
        <div className="">
          <TodoList />
        </div>

        <Calendar />
      </div>
    );
  }
}

export default App;
