import React, { Component } from 'react';
import base from './Firebase/Firebase';
import 'util'

import Welcome from './components/Welcome';
import TodoList from './Todo/TodoList';
import NavbarSide from './NavbarSide/NavbarSide';
import Formulaire from './Tchat/Formulaire';
import Message from './Tchat/Message';

import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import './App.scss';
import ControlledCarousel from './Carousel/Carousel';



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
    .keys(this.state.messages, this.state.pseudos)
    .map(key => (
        <Message 
            key={key}
            message={this.state.messages[key].message}
            pseudo={this.state.messages[key].pseudo}
        />
    ))
    return (
      <div className="container App">  
        <nav>
          <NavbarSide />
        </nav>
        <header className="App-header">
            <ControlledCarousel />
          <h1><Welcome name={this.state.pseudo}/></h1>   
        </header>
      
        <div className="todolist">
          <TodoList />
        </div>

        <div>
          <div className='messages'>
              ${`pseudo`}
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
