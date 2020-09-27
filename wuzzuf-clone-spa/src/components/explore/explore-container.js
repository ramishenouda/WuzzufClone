import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { Container } from 'react-bootstrap';

import ExploreItem from './explore-item';
import ExploreView from './explore-view';

class Explore extends Component {
    state = {
        employer: true,
        data: [
            {
                header: "Graphic Designer - Internship",
                title: "Businessita Women Empowerment- Cairo, Egypt",
                body: "Student · Graphic Design · Design · Creativity · Adobe Photoshop · Adobe Illustrator · Internship · Creative/Design/Art",
                career: 'Software Engineer',
                id:'1'
            },
            {
                header: "Video Editor - intern",
                title: "360-courses.com- Cairo, Egypt",
                body: "Student · Video Editing · Adobe After Effects · Media · Video Edit · Creative/Design/Art · Writing/Editorial · Media/Journalism/Publishing",
                career: 'Designer',
                id:'2'
            },
            {
                header: "Digital Marketing Specialist",
                title: "EnR Consultancy Services- London, United Kingdom",
                body: "Entry Level · 20 Vacancies · Digital Marketing · Social Media · Media · Marketing · Adobe Photoshop · Adobe Illustrator · Design · Market Research · Market Analysis · Marketing/PR/Advertising",
                career: 'Software Engineer',
                id:'3'
            },
            {
                header: "Website Development Intern - Indonesia",
                title: "Visit Ventures- Nozha, Cairo",
                body: "Entry Level · Laravel · PHP · Information Technology (IT) · Computer Science · javaScript · Git · HTML5 · CSS3 · SQL · Front-End",
                career: 'Software Engineer',
                id:'4'
            },
            {
                header: "Laravel PHP Developer",
                title: "Businessita Women Empowerment- Cairo, Egypt",
                body: "Student · Graphic Design · Design · Creativity · Adobe Photoshop · Adobe Illustrator · Internship · Creative/Design/Art",
                career: 'Software Engineer',
                id:'5'
            }
        ]
    }

    applyJob = (event) => {
        if (event.target.id === "apply") {
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to apply to this job!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, apply it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Applied',
                        'Your request has been sent.',
                        'success'
                    )
                }
            })
        } else if (event.target.id === "save") {
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to save this job!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#28a745',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, save it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Saved',
                        'Your job has been saved.',
                        'success'
                    )
                }
            })
        }
    }

    render() {
        const exploreItem = this.state.data.map((item) => (
            <ExploreItem
                data={item}
                key={item.id}
                state={this.state}
                applyJob={this.applyJob}
            />
        ));

        return (
            <Container className="mt-3">
                <ExploreView
                    state={this.state}
                    open={this.state.open}
                    applyJob={this.applyJob}
                    postWindow={this.postWindow}
                />
                {exploreItem}
            </Container>
        );
    }
}

export default Explore;