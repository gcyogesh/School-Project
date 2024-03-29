import React from 'react'
import aboutbg from '../assets/images/page-banner-1.jpg';
import { Link } from 'react-router-dom';

const AboutPageBanner = () => {
  return (
	<>
	  <section
  id="page-banner"
  className="bg_cover "
  data-overlay={8}
  style={{ backgroundImage: `url(${aboutbg })`, height:"240px" }}
>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="page-banner-cont">
          <h2>About Us</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>{" "}
        {/* page banner cont */}
      </div>
    </div>{" "}
    {/* row */}
  </div>{" "}
  {/* container */}
</section>

	</>
  )
}

export default AboutPageBanner
