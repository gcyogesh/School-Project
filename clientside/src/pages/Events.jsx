import React from 'react'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import Footer from '../components/Footer'
import EventsBanner from '../components/EventsBanner'
import events1 from '../assets/images/event/e-2.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const Events = () => {
  return (
	<>
      <TopNav/>
      <BottomNav/>
      <EventsBanner/>
      <section id="event-page" className="pt-90 pb-120 gray-bg" style={{paddingTop:"90px", paddingBottom:"120px"}}>
  <div className="container">
    <div className="row">

      <div className="col-lg-6">
        <div className="singel-event-list mt-30">
          <div className="event-thum">
            <img src={events1} alt="Event" />
          </div>
          <div className="event-cont">
            <span>
              <i className="fa fa-calendar" /> 2 December 2024
            </span>
            <a href="events-singel.html">
              <h4>Tech Summit</h4>
            </a>
            <span>
            <i><FontAwesomeIcon icon={faClock}/></i> 10:00 Am - 3:00 Pm
            </span>
            <span>
            <i><FontAwesomeIcon icon={faMapMarker}/></i> Rc Auditorim
            </span>
            <p>
             We request everyone to participate in this program. We will be so glad with your participation. 
            </p>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* row */}
    <div className="row">
      <div className="col-lg-12">
        <nav className="courses-pagination mt-50">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a href="#" aria-label="Previous">
              <i><FontAwesomeIcon icon={faAngleLeft}/></i>

              </a>
            </li>
            <li className="page-item">
              <a className="" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#">2</a>
            </li>
            <li className="page-item">
              <a href="#">3</a>
            </li>
            <li className="page-item">
              <a href="#" aria-label="Next">
                <i><FontAwesomeIcon icon={faAngleRight}/></i>
              </a>
            </li>
          </ul>
        </nav>{" "}
        {/* courses pagination */}
      </div>
    </div>{" "}
    {/* row */}
  </div>{" "}
  {/* container */}
</section>

      <Footer/>
	</>
  )
}

export default Events
