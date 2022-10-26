import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:7000/regular-courses')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
    return (
      <div>
        <h4>All Courses :{courses.length} </h4>
        <div>
            {
                courses.map(sub=> <Course 
                key={sub.id}
                sub={sub}
                ></Course>)
                // courses.map(course=><p key={course.id}><Link to={course.id}>{course.name}</Link></p>)
            }
        </div>
      </div>
    );
};

export default Courses;