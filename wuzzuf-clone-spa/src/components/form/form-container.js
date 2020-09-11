import React, {Component} from 'react';
import Register, {RegisterEmployer} from './register';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class Form extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        adress: '',
        country: '',
        career:'',
        companySize:'',
        companyPhone:'',
        companyName:'',
        companyWebsite:'',
        registering: false
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <RegisterEmployer
                handleChange={this.handleChange}
                registerInfo={this.state}
                />

            </div>
        );
    }
}
export default Form