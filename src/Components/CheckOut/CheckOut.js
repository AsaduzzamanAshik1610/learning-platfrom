import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
        console.log(course);
    const {name, img, price} = course;
    return (
    <div> 
     <div class="w-50 p-5 col-lg-4 m-5">
      <img className='w-50' src={img}></img>
     <div class="card-body">
      <p class="card-text">{name}</p>
      <p>price:{price}</p>
     </div>
     </div>
    </div>
    );
};

export default CheckOut;