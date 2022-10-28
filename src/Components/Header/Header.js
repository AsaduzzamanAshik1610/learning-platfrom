import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode,MdOutlineWbSunny } from "react-icons/md";
import { AuthContext } from '../UserContext/UserContext';
import './Header.css';
const Header = () => {
  const [open, setopen] = useState(false);
    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    const logOutHandle = ()=>{
        logOut()
        .then(()=>{})
        .catch(error=> {
            console.error(error)
        })
    }
    
    return (
    <nav className="navbar navbar-expand-lg bg-primary">
     <div className="container-fluid">
     <h4 className='me-3 text-white'>
      <img className='logo' src={"https://as2.ftcdn.net/v2/jpg/02/19/98/93/500_F_219989372_K1pBzmbiGfoMd6X5JJd5SYOVIBzSUN8f.jpg"} alt="" />
     <span> Talk Digital</span></h4>
    <button className='bg-dark text-white border-0 py-1 rounded'><Link className="navbar-brand text-white" to="/">Home</Link></button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav float-end">
        <li className="nav-item">
         <button className='bg-success ms-2 border-0 rounded'><Link className="nav-link text-white active" aria-current="page" to="/courses">Courses</Link></button>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/faq">FAQ</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white" to="/blog">Blog</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link text-white" to="/register">Register</Link>
        </li>
        { user?.email && <span className='text-white'>{user?.email}</span>}

         {user?.photoURL ?
          <Image style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image>
           : ""
            
         }
        {
            user?.uid? <button onClick={logOutHandle} className='bg-danger text-white rounded border-0'>Logout</button>
            :
      
          <Link className="nav-link text-white" to="/login">Login</Link>
      
        }
      </ul>
      <div className='text-white' onClick={()=> setopen (!open)}>
            { 
               open ?<MdOutlineDarkMode /> : <MdOutlineWbSunny />
             }
      </div>
    </div>
  </div>
</nav>
    );
};

export default Header;