import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div >
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h1 className='library'>Library Management</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-colap" id="navbarNav">
      <ul className="navbar-nav" >
      <li className="nav-item">
        <Link to='/'>Home</Link>
        </li>
        <li className="nav-item">
       <Link to='/books'>Books</Link>
        </li>
        <li className="nav-item">
       <Link to='/createbook'>Create Book</Link>
        </li>
        <li className="nav-item">
        <i className="fa-solid fa-envelope" style={{fontSize:'25px', margin:"7px", marginRight:'10px'}}></i>
        </li>
        <li className="nav-item">
        <i className="fa-solid fa-user" style={{fontSize:'25px', margin:"7px"}}></i>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;