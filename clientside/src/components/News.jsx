import React from 'react'
import newss from '../assets/images/news/n-1.jpg'
import news1 from '../assets/images/news/ns-1.jpg'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const News = () => {
  return (
	<>
	  <>
  {" "}
  <section id="news-part" className="pt-115 pb-110" style={{paddingTop:"115px", paddingBottom:"110px"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title pb-50" style={{paddingBottom:"50px"}}>
            <h5>Latest News</h5>
            <h2>From the news</h2>
          </div>{" "}
          {/* section title */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row">
        <div className="col-lg-6">
          <div className="singel-news mt-30" style={{marginTop:"30px"}}>
            <div className="news-thum pb-25" style={{paddingBottom:"25px"}}>
              <img src={newss} alt="News" />
            </div>
            <div className="news-cont">
              <ul>
                <li>
                  <a href="#">
				  <FontAwesomeIcon style={{color:"yellowgreen"}} icon={faCalendarAlt}/>5 March 2024{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span>By</span> Yubraj Gc
                  </a>
                </li>
              </ul>
              <a href="blog-singel.html">
                <h3>Tips to grade high gpa in school life.</h3>
              </a>
              <p>
              To achieve a high GPA in school, efficient time management is crucial. Plan your study schedule, actively participate in class, and prioritize quality over quantity when learning. Regularly review your notes, maintain a balanced lifestyle, and seek help when needed.
              </p>
            </div>
          </div>{" "}
          {/* singel news */}
        </div>
        <div className="col-lg-6">
          <div className="singel-news news-list">
            <div className="row">
              <div className="col-sm-4">
                <div className="news-thum mt-30" style={{marginTop:"30px"}}>
                  <img src={news1} alt="News" />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="news-cont mt-30">
                  <ul>
                    <li>
                      <a href="#">
					  <FontAwesomeIcon style={{color:"yellowgreen"}} icon={faCalendarAlt}/>4 December 2023{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>By</span> Yubraj Gc
                      </a>
                    </li>
                  </ul>
                  <a href="blog-singel.html">
                    <h3> communication</h3>
                  </a>
                  <p>
                    Communication helps you to grow your all type of skill. SO never be afraid of giving presenation.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* singel news */}
          <div className="singel-news news-list">
            <div className="row">
              <div className="col-sm-4">
                <div className="news-thum mt-30" style={{marginTop:"30px"}}>
                  <img src={news1} alt="News" />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="news-cont mt-30">
                  <ul>
                    <li>
                      <a href="#">
					  <FontAwesomeIcon style={{color:"yellowgreen"}} icon={faCalendarAlt}/>2 December 2018{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>By</span> Yubraj Gc
                      </a>
                    </li>
                  </ul>
                  <a href="blog-singel.html">
                    <h3>Study makes you perfect</h3>
                  </a>
                  <p>
                   If you study well then your grade is good anyway. So study hard.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* singel news */}
          <div className="singel-news news-list">
            <div className="row">
              <div className="col-sm-4">
                <div className="news-thum mt-30" style={{marginTop:"30px"}}>
                  <img src={news1} alt="News" />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="news-cont mt-30" style={{marginTop:"30px"}}>
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon style={{color:"yellowgreen"}} icon={faCalendarAlt}/>2 December 2028{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>By</span> Yubraj Gc
                      </a>
                    </li>
                  </ul>
                  <a href="blog-singel.html">
                    <h3>Technology edcution is now....</h3>
                  </a>
                  <p>
                    The growth of technology is so high. So we must focus on how technology works in real life.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* singel news */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
</>

	</>
  )
}

export default News
