import React, {Component} from 'react'
import { MainNavbarView, LoggedInNavbarView } from './navbar-view'

class Navbar extends Component{
    state= {
        authenticated: false,
    }

    render() {
        if(!this.state.authenticated) {
            return (
                <MainNavbarView toggleLogin={this.toggleLogin} />
            );
        } else {
            return (
                <LoggedInNavbarView toggleLogin={this.toggleLogin} />
            )
        }
    }
}
export default Navbar
