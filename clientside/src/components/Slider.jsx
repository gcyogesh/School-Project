import React from 'react'
// all styles
// import '../css/style.css';
// import '../css/responsive.css';
// import '../css/nice-select.css';
// import '../css/font-awesome.min.css';
// import '../css/bootstrap.min.css';



import slider from '../assets/images/slider/s-2.jpg'
const Slider = () => {
  return (
	<>
	  <section id="slider-part" className="slider-active">
  <div
    className="single-slider slider-2 bg_cover"
    style={{ backgroundImage: `url(${slider})`}}
    data-overlay={4}
  >
    <div className="container">
      <div className="row">
        <div className="col-xl-9 col-lg-10">
          <div className="slider-cont">
            <h1 data-animation="bounceInLeft" data-delay="1s">
              Chose the best government college in your village.
            </h1>
            <a
              data-animation="fadeInUp"
              data-delay="1.3s"
              href="#"
              className="main-btn"
            >
              Start Trial now
            </a>
          </div>
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </div>{" "}
  {/* single slider */}
</section>

	</>
  )
}

export default Slider
