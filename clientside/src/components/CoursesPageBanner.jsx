import React from 'react'
import courses1 from '../assets/images/page-banner-2.jpg';
const CoursesPageBanner = () => {
  return (
	<>
	  <section
  id="page-banner"
  className="pt-105 pb-110 bg_cover"
  data-overlay={8}
  style={{ backgroundImage: `url(${courses1})`, height:"240px" }}
>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="page-banner-cont">
          <h2>Our Courses</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Courses
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

export default CoursesPageBanner
