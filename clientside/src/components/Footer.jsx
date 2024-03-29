import React from 'react'
import logo1 from '../assets/images/logo-2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faTwitter, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faPhone, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  return (
	<>
	  <footer id="footer-part">
  <div className="footer-top" style={{paddingBottom:"70px", paddingTop:"40px"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-about mt-40" style={{marginTop:"40px"}}>
            <div className="logo">
              <a href="#">
                <img src={logo1} alt="Logo" />
              </a>
            </div>
            <p>
            Shree Mani Siddha Basic School is regarded as a beacon of education in the village, providing a well-rounded and empowering educational experience for its students.
            </p>
            <ul className="mt-20" style={{marginTop:"20px"}}>
              <li>
                <a href="#">
				<i><FontAwesomeIcon icon={faFacebookF}/></i>
                </a>
              </li>
              <li>
                <a href="#">
				<i><FontAwesomeIcon icon={faTwitter}/></i>
                </a>
              </li>
              <li>
                <a href="#">
                 <i> <FontAwesomeIcon icon={faGooglePlus}/></i>
                </a>
              </li>
              <li>
                <a href="#">
				<i><FontAwesomeIcon icon={faInstagram}/></i>
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* footer about */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="footer-link mt-40" style={{marginTop:"40px"}}>
            <div className="footer-title pb-25" style={{paddingBottom:"25px"}}>
              <h6>Sitemap</h6>
            </div>
            <ul>
              <li>
                <a href="index-2.html">
				<i><FontAwesomeIcon icon={faAngleRight}/></i>
                  Home
                </a>
              </li>
              <li>
                <a href="about.html">
				<i><FontAwesomeIcon icon={faAngleRight}/></i>
                  About us
                </a>
              </li>
              <li>
                <a href="courses.html">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  Courses
                </a>
              </li>
              <li>
                <a href="blog.html">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  News
                </a>
              </li>
              <li>
                <a href="events.html">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  Event
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  Gallery
                </a>
              </li>
              <li>
                <a href="shop.html">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  Shop
                </a>
              </li>
              <li>
                <a href="teachers.html">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  Teachers
                </a>
              </li>
              <li>
                <a href="#">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  Support
                </a>
              </li>
              <li>
                <a href="contact.html">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  Contact
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* footer link */}
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="footer-link support mt-40" style={{marginTop:"40px"}}>
            <div className="footer-title pb-25" style={{paddingBottom:"25px"}}>
              <h6>Support</h6>
            </div>
            <ul>
              <li>
                <a href="#">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  FAQS
                </a>
              </li>
              <li>
                <a href="#">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  Privacy
                </a>
              </li>
              <li>
                <a href="#">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  Policy
                </a>
              </li>
              <li>
                <a href="#">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  Support
                </a>
              </li>
              <li>
                <a href="#">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
                  Documentation
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* support */}
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-address mt-40" style={{marginTop:"40px"}}>
            <div className="footer-title pb-25" style={{paddingBottom:"25px"}}>
              <h6>Contact Us</h6>
            </div>
            <ul>
              <li>
                <div className="icon">
				<i><FontAwesomeIcon  style={{color:"yellow"}} icon={faHome}/></i>
                </div>
                <div className="cont">
                  <p>Sardi-Bhartha , Bhardaghat-East, Nepal</p>
                </div>
              </li>
              <li>
                <div className="icon">
				<i><FontAwesomeIcon  style={{color:"yellow"}} icon={faPhone}/></i>
                </div>
                <div className="cont">
                  <p>+977 9847365308</p>
                </div>
              </li>
              <li>
                <div className="icon">
				<i><FontAwesomeIcon style={{color:"yellow"}} icon={faEnvelope}/></i>
                </div>
                <div className="cont">
                  <p>smsbc1@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>{" "}
          {/* footer address */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </div>{" "}
  {/* footer top */}
  <div className="footer-copyright pt-10 pb-25" style={{paddingTop:"10px", paddingBottom:"25px"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="copyright text-md-left text-center pt-15" style={{paddingTop:"15px"}}>
            <p>
            © 2024 Yogesh Gc | All rights reserved.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="copyright text-md-right text-center pt-15"></div>
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </div>{" "}
  {/* footer copyright */}
</footer>

	</>
  )
}

export default Footer
