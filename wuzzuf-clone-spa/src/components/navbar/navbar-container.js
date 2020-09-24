import React, {Component} from 'react'
import { LoggedInNavbarView } from './navbar-view'

class Navbar extends Component{
    state= {
        authenticated: false,
        isSmallScreen: window.innerWidth < 768 ? true : false,
    }

    render() {
        return(
            <LoggedInNavbarView isSmallScreen={this.state.isSmallScreen}/>
        );
    }
}
export default Navbar
