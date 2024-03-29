import React from 'react'
import { Link } from 'react-router-dom';

// import '../css/style.css';
import '../css/responsive.css';	
import '../css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const BottomNav = () => {
  return (
	<>
	  <div className="navigation navigation-2">
  <div className="container">
    <div className="row no-gutters">
      <div className="col-lg-11 col-md-10 col-sm-9 col-9">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="index-3.html">
            <img src="images/logo.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div
            className="collapse navbar-collapse sub-menu-bar"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
               <Link className="" to="/">Home</Link>
               
              </li>
              <li className="nav-item">
			  <Link  to="/about">About Us</Link>
              </li>
              <li className="nav-item">
			  <Link  to="/courses">Courses</Link>
                
              </li>
              <li className="nav-item">
			  <Link  to="/events">Events</Link>

                
              </li>
              <li className="nav-item">
			  <Link  to="/ourteachers">Our Teachers</Link>          
              </li>
              <li className="nav-item">
			  <Link  to="/contact">Contact</Link>

                
              </li>
            </ul>
          </div>
        </nav>{" "}
        {/* nav */}
      </div>
      <div className="col-lg-1 col-md-2 col-sm-3 col-3">
        <div className="right-icon text-right">
          <ul>
            <li>
              
              <a href="#" id="search">
                <FontAwesomeIcon icon={faSearch}/>
              </a>
            </li>
           
          </ul>
        </div>{" "}
        {/* right icon */}
      </div>
    </div>{" "}
    {/* row */}
  </div>{" "}
  {/* container */}
</div>

	</>
  )
}

export default BottomNav
