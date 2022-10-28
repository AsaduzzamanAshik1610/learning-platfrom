import React from 'react';
import { jsPDF } from "jspdf";
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetailes.css';
const CourseDetails = () => {
  const courseDetail = useLoaderData();
  const { _id, detalies, img, name, price } = courseDetail;
  const download = () => {
    const doc = new jsPDF();
    doc.text(`${name}`, 10, 10);
    doc.addImage(`${img}`, "JPEG", 15, 40, 80, 80);

    doc.save(`${name}.pdf`);
  };
  return (
    <div className="row">
      <h2 className='text-center text-danger bg-warning p-5 mt-3 mb-3 rounded'>this is course
            detalies</h2>
      <div className="mx-auto detailes w-25">
        <div>
          <button className='border-0 bg-danger p-2 m-2 text-white rounded' onClick={download}>Dounload pdf</button>
        </div>
        <img style={{height:"200px"}} className='w-100 rounded' src={img}></img>
        <div className="">
          <h5>{name}</h5>
          <p>{detalies}</p>
          <p>price:${price}</p>
          <Link to={`/checkout/${_id}`} className="btn btn-primary">checkout</Link>

        </div>
      </div>
    </div>

  );
};

export default CourseDetails;