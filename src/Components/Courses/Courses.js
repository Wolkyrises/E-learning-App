import React, { Component } from 'react';
import { coursesData } from '../../elearningData';
import Course from './Course';


class Courses extends Component {

    render() {
        return (
            <div>
                {
                    coursesData.map((course) => (
                        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '100px'}}>
                            <Course course={course} />
                            <button id="button"
                            onClick={() => window.location = `/course/${course.id}`}> Voir Détails </button>
                        </div>
                    ) )
                }
            </div>
        );
    }
}

export default Courses;