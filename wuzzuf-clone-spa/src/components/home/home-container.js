import React, {Component} from 'react'
import HomeView from './home-view'

class Home extends Component{
    state= {
        test: `"Props Home"`
    }
    render() {
        return (
            <div>
                <HomeView number= {this.state.test}/>
            </div>
        );
    }
}
export default Home