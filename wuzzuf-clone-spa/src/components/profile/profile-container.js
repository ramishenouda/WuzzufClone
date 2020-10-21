import React, {Component} from 'react';

import ProfileView from './profile-view';

class Profile extends Component {
    state = {
        firstName: 'Mostafa',
        lastName: 'Amr',
        email: 'MostafaAmro5619@gmail.com',
        country: 'Egypt',
        adress: '11St. Cairo',
        career: 'Software engineer',
        gender: 'Male',
        maritalStatus: 'Single',
        companySize:'11-50 employees',
        companyPhone:'01223455789',
        companyName:'M7ame7o ll parmga',
        companyWebsite:'www.m7ame7oWebsite.com',
        about: '',
        pf: 'https://www.facebook.com/photo?fbid=2776912992585484&set=a.1879410215669104',
        employer: true
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return(
            <div>
                <ProfileView 
                    ProfileInfo={this.state}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Profile;