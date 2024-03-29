import React from 'react';
import first1 from '../assets/images/teachers/teacher-2/tc-1.jpg'
import first2 from '../assets/images/teachers/teacher-2/happy.png'
import first3 from '../assets/images/teachers/teacher-2/quote.png'

// all styles
// import '../css/style.css';
// import '../css/responsive.css';
// import '../css/nice-select.css';
// import '../css/font-awesome.min.css';
// import '../css/bootstrap.min.css';


const Teachers = () => {
  return (
	<>
	  <section id="teachers-part" className="pt-65 pb-120 gray-bg" style={{paddingTop:"65px", paddingBottom:"120px"}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="section-title mt-50 pb-25" style={{marginTop:"50px", paddingBottom:"25px"}}>
          <h5>Top Tutors</h5>
          <h2>Featured Teachers</h2>
        </div>{" "}
        {/* section title */}
        <div className="teachers-2">
          <div className="row">
            <div className="col-md-6">
              <div className="teachers-2-singel mt-30" style={{marginTop:"30px"}}>
                <div className="thum">
                  <img src={first1} alt="Teacher" />
                </div>
                <div className="cont">
                  <a href="teachers-singel.html">
                    <h5>Mark anthem</h5>
                  </a>
                  <p>Social Expert</p>
                  <span>
                    <i className="fa fa-book" />
                    10 Courses
                  </span>
                </div>
              </div>{" "}
              {/* teachers 2 singel */}
            </div>
            <div className="col-md-6">
              <div className="teachers-2-singel mt-30" style={{marginTop:"30px"}}>
                <div className="thum">
                  <img src={first1} alt="Teacher" />
                </div>
                <div className="cont">
                  <a href="teachers-singel.html">
                    <h5>Hellen Mark</h5>
                  </a>
                  <p>Maths Expert</p>
                  <span>
                    <i className="fa fa-book" />
                    05 Courses
                  </span>
                </div>
              </div>{" "}
              {/* teachers 2 singel */}
            </div>
            <div className="col-md-6">
              <div className="teachers-2-singel mt-30" style={{marginTop:"30px"}}>
                <div className="thum">
                  <img src={first1} alt="Teacher" />
                </div>
                <div className="cont">
                  <a href="teachers-singel.html">
                    <h5>Maria Noor</h5>
                  </a>
                  <p>Science Expert</p>
                  <span>
                    <i className="fa fa-book" />
                    10 Courses
                  </span>
                </div>
              </div>{" "}
              {/* teachers 2 singel */}
            </div>
            <div className="col-md-6">
              <div className="teachers-2-singel mt-30" style={{marginTop:"30px"}}>
                <div className="thum">
                  <img src={first1} alt="Teacher" />
                </div>
                <div className="cont">
                  <a href="teachers-singel.html">
                    <h5>Alan hen</h5>
                  </a>
                  <p>Grammer Expert</p>
                  <span>
                    <i className="fa fa-book" />
                    05 Courses
                  </span>
                </div>
              </div>{" "}
              {/* teachers 2 singel */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* teachers 2 */}
      </div>
      <div className="col-lg-6 ">
        <div className="happy-student mt-55" style={{marginTop:"55px"}}>
          <div className="happy-title">
            <h3>Happy Students</h3>
          </div>
          <div className="student-slied">
            <div className="singel-student">
              <img src={first3} alt="Quote" />
              <p>
                Glad to be part of most precious school of our village. It's fund to Study
                in the centre of nature.
              </p>
              <h6>Khem Chaudhary</h6>
              <span>BLE Student</span>
            </div>{" "}

            
            {/* singel student */}
          </div>{" "}
          {/* student slied */}
          <div className="student-image">
            <img src={first2} alt="Image" />
          </div>
        </div>{" "}
        {/* happy student */}
      </div>
    </div>{" "}
    {/* row */}
  </div>{" "}
  {/* container */}
</section>

	</>
  )
}

export default Teachers
