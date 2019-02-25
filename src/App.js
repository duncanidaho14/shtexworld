import React, { Component } from 'react';
import Welcome from './components/Welcome';
import TodoList from './Todo/TodoList';
import NavbarSide from './NavbarSide/NavbarSide';
import Formulaire from './Tchat/Formulaire';
import Message from './Tchat/Message';
import logo from './logo.svg';
import './App.css';

import base from './Firebase/Firebase';

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }
  
  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  addMessage = message => {
    const messages = {...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }
  render() {
    const messages = Object
    .keys(this.state.messages)
    .map(key => (
        <Message 
            key={key}
            message={this.state.messages[key].message}
            pseudo={this.state.messages[key].pseudo}
        />
    ))
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

        <div>
          <div className='messages'>
              { messages }
          </div>
          <div>
            <Formulaire
                length={140}
                pseudo={this.state.pseudo}
                addMessage={this.addMessage}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
