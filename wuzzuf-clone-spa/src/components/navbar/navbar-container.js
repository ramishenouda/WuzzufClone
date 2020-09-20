import React, {Component} from 'react'
import { MainNavbarView, LoggedInNavbarView } from './navbar-view'

class Navbar extends Component{
    state= {
        authenticated: false,
    }

    render() {
        return(
            <LoggedInNavbarView />
        );
    }
}
export default Navbar
