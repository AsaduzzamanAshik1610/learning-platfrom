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
        <div className='row'>
          <div className='col-lg-9'>
          <div className='row'>
          {
                courses.map(sub=> <Course 
                key={sub.id}
                sub={sub}
                ></Course>)
            }
          </div>
          </div>
          <div className='col-lg-3'>
             
          </div>
        </div>
       </div>
      </div>
    );
};

export default Courses;