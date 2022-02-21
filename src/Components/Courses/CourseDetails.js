import React from 'react';
import { coursesData } from '../../elearningData';
import Img from '../../Img/imgCours.jpg'
import {useParams} from "react-router-dom";


const CourseDetails = () => {

    const { id } = useParams();

        const course = coursesData.find(c => c.id === Number(id));

        return (
            <div>
            <h3>{course.courseName}</h3>
            <img id="imgCours" src={Img}/>
            <p> {course.courseDescription} </p>
            <span> Durée : {course.courseDuration}min </span>
            <span> Note : {course.courseNote} </span>
            <p>Date de création: {course.courseCreatedAt}</p>
            <p>{course.courseVideo}</p>
            <button id="button"
                            onClick={() => window.location = `/course/${course.id}/quiz`}> Voir Quiz </button>
        </div>
        );
}

export default CourseDetails;