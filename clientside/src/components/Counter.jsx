import React from 'react';
import counterBack from '../assets/images/bg-2.jpg'

// all styles
// import '../css/style.css';
// import '../css/responsive.css';
// import '../css/nice-select.css';
// import '../css/font-awesome.min.css';
// import '../css/bootstrap.min.css'

const Counter = () => {
  return (
	<>
	  <>
  {/*====== COUNTER PART START ======*/}
  <div
    id="counter-part"
    className="bg_cover pt-65 pb-110"
    
    data-overlay={8}
    style={{ backgroundImage: `url(${counterBack})`, paddingTop:"65px", paddingBottom:"110px" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="singel-counter text-center mt-40" style={{marginTop:"40px"}}>
            <span>
              <span className="counter">3000</span>+
            </span>
            <p>Students enrolled</p>
          </div>{" "}
          {/* singel counter */}
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="singel-counter text-center mt-40" style={{marginTop:"40px"}}>
            <span>
              <span className="counter">4</span>+
            </span>
            <p>Courses Uploaded</p>
          </div>{" "}
          {/* singel counter */}
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="singel-counter text-center mt-40" style={{marginTop:"40px"}}>
            <span>
              <span className="counter">1100</span>+
            </span>
            <p>People certifie</p>
          </div>{" "}
          {/* singel counter */}
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="singel-counter text-center mt-40" style={{marginTop:"40px"}}>
            <span>
              <span className="counter">30</span>+
            </span>
            <p>Professional Teachers</p>
          </div>{" "}
          {/* singel counter */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </div>
  {/*====== COUNTER PART ENDS ======*/}
</>

	</>
  )
}

export default Counter
