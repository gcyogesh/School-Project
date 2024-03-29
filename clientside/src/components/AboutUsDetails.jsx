import React from 'react'
import aboutus from  '../assets/images/about/about-2.jpg'

const AboutUsDetails = () => {
  return (
	<>
	  <section id="about-page" className="pt-70 pb-110" style={{paddingTop:"80px",paddingBottom:"80px"}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <div className="section-title " style={{paddingBottom:"15px"}}>
          <h5>About us</h5>
          <h2>Welcome to SMSBS </h2>
        </div>{" "}
        {/* section title */}
        <div className="about-cont">
          <p>
		  Shree Mani Siddha Basic School stands out as the best educational institution in the village due to its commitment to academic excellence, dedicated faculty, and a nurturing learning environment. With a focus on holistic development, the school not only emphasizes quality education but also encourages extracurricular activities and character-building initiatives. The institution's reputation is built on a strong foundation of student success, community involvement, and a supportive atmosphere that fosters the overall growth of each student.
          </p>
        </div>
      </div>{" "}
      {/* about cont */}
      <div className="col-lg-7">
        <div className="about-image   " >
          <img src={aboutus} alt="About" />
        </div>{" "}
        {/* about imag */}
      </div>
    </div>{" "}
    {/* row */}
    <div className="about-items " style={{paddingTop:"60px"}}>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="about-singel-items mt-30">
            <span>01</span>
            <h4>Why Choose us</h4>
            <p>
			Shree Mani Siddha Basic School is regarded as a beacon of education in the village, providing a well-rounded and empowering educational experience for its students.
            </p>
          </div>{" "}
          {/* about singel */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="about-singel-items mt-30">
            <span>02</span>
            <h4>Our Mission</h4>
            <p>
			The mission of Shree Mani Siddha Basic School is to empower students with a quality education that fosters academic excellence, character development, and critical thinking skills.
            </p>
          </div>{" "}
          {/* about singel */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="about-singel-items mt-30">
            <span>03</span>
            <h4>Our vission</h4>
            <p>
            The vision of Shree Mani Siddha Basic School is to be a beacon of educational excellence, inspiring students to become lifelong learners and responsible global citizens.
            </p>
          </div>{" "}
          {/* about singel */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* about items */}
  </div>{" "}
  {/* container */}
</section>

	</>
  )
}

export default AboutUsDetails
