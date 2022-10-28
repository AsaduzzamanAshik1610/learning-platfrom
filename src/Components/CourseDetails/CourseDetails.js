import React from 'react';
import { jsPDF } from "jspdf";
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetail = useLoaderData();
   const {_id, detalies, img, name, price} = courseDetail;
   const download = () => {
    const doc = new jsPDF();
    doc.text(`${name}`, 10, 10);
    doc.addImage(`${img}`, "JPEG", 15, 40, 80, 80);

    doc.save(`${name}.pdf`);
  };
    return (
     
<div className="w-50 lg-w-50 p-5 col-lg-4 m-5">
  <div>
  <h2 className='text-center text-danger bg-warning p-5 mb-3 rounded'>this is course
   detalies</h2>
   <button className='border-0 bg-danger p-2 m-2 text-white rounded' onClick={download}>Dounload pdf</button>
  </div>
   <img className='w-50 rounded' src={img}></img>
   <div className="card-body">
    <h5 className="card-title mb-3">{name}</h5>
    <p className="card-text">{detalies}</p>
    <p>price:${price}</p>
    <Link to={`/checkout/${_id}`} className="btn btn-primary">checkout</Link>
   
  </div>
</div>
);
};

export default CourseDetails;