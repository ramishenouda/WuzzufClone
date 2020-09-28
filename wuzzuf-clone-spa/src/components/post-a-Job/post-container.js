import React, {Component} from 'react';
import makeAnimated from 'react-select/animated';

import PostView from './post-view';

class Post extends Component {
    state = {
        title: '',
        salary: '',
        jobType: '',
        jobRoles: '',
        careerLevel: '',
        keyWords: '',
        jobRequirements: '',
        about: '',
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]

        return(
            <PostView 
                state={this.state}
                handleChange={this.handleChange}
                animatedComponents={makeAnimated()}
                options={options}
            />
        )
    }
}

export default Post;