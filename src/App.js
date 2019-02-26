import React, { Component } from 'react';
import base from './Firebase/Firebase';
import 'util'

import Welcome from './components/Welcome';
import TodoList from './Todo/TodoList';
import NavbarSide from './NavbarSide/NavbarSide';
import Formulaire from './Tchat/Formulaire';
import Message from './Tchat/Message';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './App.scss';

import logosamourai from './Logo/samourai.gif';
import logostreet2 from './Logo/streetfighter2.gif';
import logosonic from './Logo/sonic.gif';
import logoobelix from './Logo/obelixfrapperomain.gif';
import logomariokart from './Logo/mariokart.gif';
import logoglobeallemagne from './Logo/globeallemagne.gif'


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
        <Carousel>
          <div className="carousel">
            <img src={logosonic} alt="" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={logostreet2} alt="" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={logosamourai} alt="" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={logoobelix} alt="" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={logomariokart} alt="" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={logoglobeallemagne} alt="" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>       
          
          <h1><Welcome name="shtex"/></h1>   
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
