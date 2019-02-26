import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'react-bootstrap/dist/react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import Connexion from './Connexion/Connexion';
import NotFound from './Connexion/NotFound';
import Games from './Games/Games';
import App from './App';

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Connexion} />
                    <Route path='/pseudo/:pseudo' component={App} />
                    <Route path='/games/:pseudo' component={Games} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('root'))

