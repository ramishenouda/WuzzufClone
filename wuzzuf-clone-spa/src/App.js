import React, {Component} from 'react';
import Navbar from './components/navbar/navbar-container';
import Home from './components/home/home-container';
import Form from './components/form/form-container';
import Login from './components/form/login';
import Register, {RegisterEmployer} from './components/form/register';
import './style.css'
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Form} />
                    <Route exact path="/RegisterEmployer" component={RegisterEmployer} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App;
