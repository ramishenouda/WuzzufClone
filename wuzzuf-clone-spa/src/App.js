import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/navbar-container';
import Home from './components/home/home-container';
import Login from './components/login/login-container';
import Register from './components/register/register-container';
import Profile from './components/profile/profile-container';
import Explore from './components/explore/explore-container';
import Post from './components/post-a-Job/post-container';
import JobPage from './components/Job-page/jobPage-container';

import './style.css'

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Navbar />
                <JobPage />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/editInfo" component={Profile} />
                    <Route exact path="/explore" component={Explore} />
                    <Route exact path="/post" component={Post} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App;
