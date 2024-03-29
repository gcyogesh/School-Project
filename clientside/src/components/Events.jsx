import React from 'react'
import bg from '../assets/images/bg-3.jpg';

const Events = () => {
  return (
	<>
	  <section id="event-part" className="pt-120" style={{paddingTop:"120px"}}>
  <div className="container">
    <div
      className="event-bg bg_cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="row">
        <div className="col-lg-5 offset-lg-6 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <div className="event-2 pt-90 pb-70" style={{paddingTop:"90px", padding:"70px"}}>
            <div className="event-title">
              <h3>Upcoming events</h3>
            </div>{" "}
            {/* event title */}
            <ul>
              <li>
                <div className="singel-event">
                  <span>
                    <i className="fa fa-calendar" /> 2 Feb 2024
                  </span>
                  <a href="events-singel.html">
                    <h4>School clean workshop</h4>
                  </a>
                  <span>
                    <i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm
                  </span>
                  <span>
                    <i className="fa fa-map-marker" /> Yubraj Gc
                  </span>
                </div>
              </li>
              <li>
                <div className="singel-event">
                  <span>
                    <i className="fa fa-calendar" /> 21 March 2024
                  </span>
                  <a href="events-singel.html">
                    <h4>Tech Summit</h4>
                  </a>
                  <span>
                    <i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm
                  </span>
                  <span>
                    <i className="fa fa-map-marker" /> Yubraj Gc
                  </span>
                </div>
              </li>
              <li>
                <div className="singel-event">
                  <span>
                    <i className="fa fa-calendar" /> 22 February 2024
                  </span>
                  <a href="events-singel.html">
                    <h4>Quiz Competition</h4>
                  </a>
                  <span>
                    <i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm
                  </span>
                  <span>
                    <i className="fa fa-map-marker" /> Yubraj Gc
                  </span>
                </div>
              </li>
            </ul>
          </div>{" "}
          {/* event 2 */}
        </div>
      </div>{" "}
      {/* row */}
    </div>
  </div>{" "}
  {/* container */}
</section>

	</>
  )
}

export default Events
