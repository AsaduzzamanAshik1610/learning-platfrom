import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({sub}) => {
  const {_id,name, price, img} = sub;
  console.log(_id)
    return (
      <div className='p-5 col-lg-4'>
       <div class="card">
       <img className='m-3 rounded' src={img}></img>
      <div class="card-body">
      <p>{name}</p>
      <p>price:${price}</p>
      <Link to={`/course/${_id}`} className="btn btn-primary">course detailes</Link>
      </div>
    </div>
     </div>
    );
};

export default Course;