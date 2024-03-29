import React from 'react'
import image1 from '../assets/images/category/ctg-1.jpg'

const Category = () => {
  return (
	<>
	  <section id="category-2-part">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="category-2-items pt-10">
          <div className="row">
            <div className="col-md-6">
              <div className="singel-items text-center mt-30"style={{marginTop:"30px"}}>
                <div className="items-image">
                  <img src={image1} alt="Category" />
                </div>
                <div className="items-cont">
                  <a href="#">
                    <h5>Nepali Course</h5>
                    <span>4 courses</span>
                  </a>
                </div>
              </div>{" "}
              {/* singel items */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* category */}
      </div>
      <div className="col-lg-5 offset-lg-1">
        <div className="category-form">
          <div className="form-title text-center">
            <h3>Contact Us</h3>
            <span>We hire </span>
          </div>
          <div className="main-form">
            <form action="#">
              <div className="singel-form">
                <input type="text" placeholder="Your name" />
              </div>
              <div className="singel-form">
                <input type="email" placeholder="Your Mail" />
              </div>
              <div className="singel-form">
                <input type="text" placeholder="Your Phone" />
              </div>
              <div className="singel-form">
                <button className="main-btn" type="button">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* row */}
  </div>{" "}
  {/* container */}
</section>

	</>
  )
}

export default Category
