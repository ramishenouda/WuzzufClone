import React, {Component} from 'react'
import NavbarView from './navbar-view'

class Navbar extends Component{
    state= {
        test: `"Props Navbar"`
    }
    render() {
        return (
            <div>
                <NavbarView number= {this.state.test}/>
            </div>
        );
    }
}
export default Navbar