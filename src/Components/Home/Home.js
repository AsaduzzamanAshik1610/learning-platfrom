import React from 'react';
import picture from '../images/javascript_logo.png';
import img from '../images/python-hero.jpg';
import pic from '../images/react-pic.png';
const Home = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={picture}></img>
          </div>
          <div className="carousel-item">
            <img src={img}></img>
          </div>
          <div className="carousel-item">
           <img src={pic}></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
    );
};

export default Home;