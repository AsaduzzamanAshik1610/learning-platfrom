import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
        <h4 className='text-center text-primary'>All Course</h4>
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
              <div className='bg-info p-3 me-3 rounded'>
              <h2 className='text-danger'>courses</h2>
              {
                courses.map(sb=> <p key={sb}><button className='border-0 bg-dark text-white p-1 rounded'>{sb.name}</button></p>)
              }
              </div>
          </div>
        </div>
       </div>
      </div>
    );
};

export default Courses;