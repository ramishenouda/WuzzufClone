import React, { Component } from 'react'

import { RegisterView, RegisterEmployerView } from './register-view'

class Register extends Component {
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
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    toggleEmployer = () => {
        this.setState({ employer: !this.state.employer });
    }

    render() {
        if (!this.state.employer) {
            return (
                <RegisterView
                    handleChange={this.handleChange}
                    registerInfo={this.state}
                    toggleEmployer={this.toggleEmployer}
                />
            )
        } else {
            return (
                <RegisterEmployerView 
                    handleChange={this.handleChange}
                    registerInfo={this.state}
                    toggleEmployer={this.toggleEmployer}
                />
            )
        }
    }
}

export default Register;
