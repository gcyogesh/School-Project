import React from 'react';


// all styles
// import '../css/style.css';
// import '../css/responsive.css';
// import '../css/nice-select.css';
// import '../css/font-awesome.min.css';
// import '../css/bootstrap.min.css';


// importing all images 
import call from '../assets/images/all-icon/call.png';
import map from '../assets/images/all-icon/map.png';
import email from '../assets/images/all-icon/email.png';


// fa fa awesome 

import { faFacebookF, faTwitter, faGooglePlus, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopNav = () => {
  return (
    <>
      <header id="header-part">
        <div className="header-top d-none d-md-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="header-contact text-lg-left text-center">
                  <ul>
                    <li>
                      <img src={call} alt="icon" />
                      <span>+977 9847365308</span>
                    </li>
                    <li>
                      <img src={email} alt="icon" />
                      <span>gcyogesh962@gmail.com</span>
                    </li>
                    <li>
                      <img src={map} alt="icon" />
                      <span>Bharta, Sardi, Bardhaghat-East</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="header-social text-lg-right text-center">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faGooglePlus} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container */}
        </div>{" "}
        {/* header top */}
      </header>
    </>
  );
};

export default TopNav;
