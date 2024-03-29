import React from 'react';
import teacher1 from '../assets/images/course/teacher/t-1.jpg';
import course1 from '../assets/images/course/cu-1.jpg';

// all styles
// import '../css/style.css';
// import '../css/responsive.css';
// import '../css/nice-select.css';
// import '../css/font-awesome.min.css';
// import '../css/bootstrap.min.css';

const FeaturedCourse = () => {
  return (
	<>
	  <section id="course-part" className="pt-115 pb-115" style={{paddingTop:"115px", paddingBottom:"115"}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="section-title pb-45" style={{paddingBottom:"45px"}}>
          <h5>Our course</h5>
          <h2>Featured courses </h2>
        </div>{" "}
        {/* section title */}
      </div>
    </div>{" "}
    {/* row */}
    <div className="row course-slied mt-30" style={{marginTop:"30px"}}>
      <div className="col-lg-4">
        <div className="singel-course-2">
          <div className="thum">
            <div className="image">
              <img src={course1} alt="Course" />
            </div>
            <div className="price">
              <span>Free</span>
            </div>
            <div className="course-teacher">
              <div className="thum">
                <a href="courses-singel.html">
                  <img src={teacher1} alt="teacher" />
                </a>
              </div>
              <div className="name">
                <a href="#">
                  <h6>Mark anthem</h6>
                </a>
              </div>
              <div className="review">
                <ul>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cont">
            <a href="#">
              <h4>Learn Easy in Natural Environment.</h4>
            </a>
          </div>
        </div>{" "}
        {/* singel course */}
      </div>
      
    
      <div className="col-lg-4">
        <div className="singel-course-2">
          <div className="thum">
            <div className="image">
              <img src={course1} alt="Course" />
            </div>
            <div className="price">
              <span>Free</span>
            </div>
            <div className="course-teacher">
              <div className="thum">
                <a href="courses-singel.html">
                  <img src={teacher1} alt="teacher" />
                </a>
              </div>
              <div className="name">
                <a href="#">
                  <h6>Mark anthem</h6>
                </a>
              </div>
              <div className="review">
                <ul>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cont">
            <a href="#">
              <h4>Learn Easy in Natural Environment.</h4>
            </a>
          </div>
        </div>{" "}
        {/* singel course */}
      </div>
      <div className="col-lg-4">
        <div className="singel-course-2">
          <div className="thum">
            <div className="image">
              <img src={course1} alt="Course" />
            </div>
            <div className="price">
              <span>Free</span>
            </div>
            <div className="course-teacher">
              <div className="thum">
                <a href="courses-singel.html">
                  <img src={teacher1} alt="teacher" />
                </a>
              </div>
              <div className="name">
                <a href="#">
                  <h6>Mark anthem</h6>
                </a>
              </div>
              <div className="review">
                <ul>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cont">
            <a href="#">
              <h4>Learn Easy in Natural Environment.</h4>
            </a>
          </div>
        </div>{" "}
        {/* singel course */}
      </div>
    </div>{" "}
    {/* course slied */}
  </div>{" "}
  {/* container */}
</section>

	</>
  )
}

export default FeaturedCourse
