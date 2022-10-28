import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import picture from '../images/pic.6.jpg';
import img from '../images/img.1.jpg';
import pic from '../images/react-pic.png'
const Home = () => {
    return (
        <div className='mx-auto'>
          <Carousel>
        <Carousel.Item interval={300}>
          <img
            className="d-block w-100"
            src={picture}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={300}>
          <img
            className="d-block w-100"
            src={img}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Home;