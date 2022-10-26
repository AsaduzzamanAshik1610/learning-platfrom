import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <nav className="navbar navbar-expand-lg bg-dark">
     <div className="container-fluid">
     <h4 className='me-3 text-white'>Talk Digital</h4>
    <Link className="navbar-brand text-white" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/courses">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="#">FAQ</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="#">Blog</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;