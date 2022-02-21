import React, { Component } from 'react';
import Img from '../../Img/imgCours.jpg';



class Course extends Component {
    
    
    render() {
        return (
            <div key={this.props.course.id} >
            <h3 style={{fontSize:'50px'}}>{this.props.course.courseName}</h3>
            <img id="imgCours" src={Img}/>
            
            
            </div>
        );
    }
}

export default Course;