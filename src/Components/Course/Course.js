import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({sub}) => {
  const {name, price, img} = sub;
    return (
     <div className='p-5 col-lg-4'>
       <div class="card">
       <img className='m-3 rounded' src={img}></img>
      <div class="card-body">
      <p>{name}</p>
      <p>price:${price}</p>
      <Link href="#" className="btn btn-primary">start course</Link>
      </div>
    </div>
     </div>
    );
};

export default Course;