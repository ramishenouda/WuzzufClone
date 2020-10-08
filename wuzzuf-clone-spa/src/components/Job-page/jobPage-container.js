import React, {Component} from 'react';

import JobPageView from './jobPage-view';

class JobPage extends Component {
    state = {
        title: 'Computer Science Researcher - Internship',
        companyName: 'Digital Cloud Platforms',
        jobDate:'5 days ago',
        applicants:'65',
        consideration: '15',
        notSelected: '21',
        viewed:'35',
        openPosition:'1',
        screenWidth: window.innerWidth,
    }

    render() {
        return(
            <JobPageView state={this.state}/>
        )
    }
}

export default JobPage;