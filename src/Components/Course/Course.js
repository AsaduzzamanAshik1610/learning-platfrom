import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({sub}) => {
  const {name, img} = sub;
    return (
     <div className='p-5 col-lg-4'>
       <div class="card">
       <img className='m-3' src={img}></img>
      <div class="card-body">
      <p>Name:{name}</p>
      <Link href="#" className="btn btn-primary">start course</Link>
      </div>
    </div>
     </div>
    );
};

export default Course;