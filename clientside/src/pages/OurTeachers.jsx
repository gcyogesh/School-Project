import React from 'react'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import Footer from '../components/Footer'
import TeacherBanner from '../components/TeacherBanner'
import teacherData from './data.json'





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import teacher1 from '../assets/images/teachers/t-1.jpg'



const OurTeachers = () => {







  return (

   



	<>
	  <TopNav/>
	  <BottomNav/>
	  <TeacherBanner/>
	  <section id="teachers-page" className="pt-90 pb-120 gray-bg" style={{paddingTop:"90px", paddingBottom:"120px"}}>
  <div className="container">


      <div className="row">
    {teacherData.map((item, index)=>{

      const {name, post, image} = item;

      return(

        <div key={index} className="col-lg-3 col-sm-6">
        <div className="singel-teachers mt-30 text-center">
          <div className="image">
            <img src={image} alt="Teachers" />
          </div>
          <div className="cont">
            <a href="#">
              <h6>{name}</h6>
            </a>
            <span>{post}</span>
          </div>
        </div>{" "}
        {/* singel teachers */}
      </div>

)
    })}
     
      
    </div>
    {/* row */}
    <div className="row">
      <div className="col-lg-12">
        <nav className="courses-pagination mt-50">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a href="#" aria-label="Previous">
			  <i><FontAwesomeIcon icon={faAngleRight}/></i>
              </a>
            </li>
            <li className="page-item">
              <a className="active" href="#">
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

export default OurTeachers
