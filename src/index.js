import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'react-bootstrap/dist/react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import Connexion from './Connexion/Connexion';
import NotFound from './Connexion/NotFound';
import App from './App';
import Games from './Games/Games';
import School from './School/School';
import House from './House/House';

class Root extends Component {
    render() {
        return (
           
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Connexion} />
                        <Route path='/pseudo/:pseudo' component={App} />
                        <Route path='/games/:pseudo' component={Games} />
                        <Route path='/school/:pseudo' component={School} />
                        <Route path='/house/:pseudo' component={House} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
          
            
        )
    }
}


ReactDOM.render(<Root />, document.getElementById('root'))
export default Root;

