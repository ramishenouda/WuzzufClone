import React, { Component } from 'react';
import makeAnimated from 'react-select/animated';

import PostView from './post-view';

class Post extends Component {
    state = {
        title: '',
        salary: '',
        jobType: [],
        jobRoles: [],
        careerLevel: [],
        keyWords: [],
        jobRequirements: '',
        about: '',
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSelectChange = (event) => {
        let Select = []
        if(event === null){}
        else if (event[0]) {
            Select= [];
            const name = event[0].name
            for (let index = 0; index < event.length; index++) {
                Select.push(event[index].value)
            }
            console.log(...Select);
            return this.setState({[name]: Select});
        }
    }

    /*
    handleSelectChange = (event) => {
        let careerLevel = this.state.careerLevel;
        careerLevel= [];
        
        if(event === null || event.length === 0){}
        else if(event.length < 2){
            careerLevel.push(event[0].value)
        }
        else if (event[0]) {
            careerLevel= [];
            for (let index = 0; index < event.length; index++) {
                careerLevel.push(event[index].value)
            }
        }
        console.log(...careerLevel);
    }
    */

    render() {
        const options = [
            { name:'careerLevel', value: 'chocolate', label: 'Chocolate' },
            { name:'careerLevel', value: 'strawberry', label: 'Strawberry' },
            { name:'careerLevel', value: 'vanilla', label: 'Vanilla' }
        ]
        const options2 = [
            { name:'jobType', value: 'test', label: 'Test' },
            { name:'jobType', value: 'test2', label: 'Test2' },
            { name:'jobType', value: 'test3', label: 'Test3' }
        ]

        return (
            <PostView
                state={this.state}
                handleChange={this.handleChange}
                animatedComponents={makeAnimated()}
                options={options}
                options2={options2}
                handleSelectChange={this.handleSelectChange}
            />
        )
    }
}

export default Post;
