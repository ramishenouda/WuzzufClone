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
        vacancies:'1',
        experienceNeeded:'0 to 4 years',
        careerLevel: 'Entry Level',
        jobType: 'Full Time',
        salary: 'Unpaid',
        educationLevel: `Bachelor's Degree`,
        jobRoles: ['Crative', 'Design', 'Art', 'Marketing'],
        jobAbout: `Working on designs to produce an effective marketing and advertising campaign.
        Think creatively and develop new design concepts, graphics, and layouts
        Initiate storyboards to present Ideas before implementation.
        Design logos, backdrops, catalogs, and other designing material.
        Create graphic design work for multiple channels which include, digital and social media.`,
        jobRequirements: `Fresh graduate up to 4 years Experience.
        High level of spirit and passion for work.
        Excellent Knowledge of Adobe Photoshop, Adobe Illustrator.
        Good knowledge of printing, media, and web design.
        Adobe InDesign is a plus.
        Communication & Presentation Skills.
        Strong attention to details, teamwork, time management and crew.
        Strong sense of aesthetics and design elements.
        Good in English.`,
        keywords:['Fine Arts',
            'Adobe Photoshop',
            'Adobe Illustrator',
            'Adobe Indesign',
            'Design',
            'Web Design',
            'Online Media',
            'Graphic Design',
            'GIFs',
            'Campaigns'],
        screenWidth: window.innerWidth,
    }

    render() {
        return(
            <JobPageView state={this.state}/>
        )
    }
}

export default JobPage;
