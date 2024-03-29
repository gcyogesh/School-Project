import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import Footer from '../components/Footer'
import CoursesPageBanner from '../components/CoursesPageBanner'

// import teacherr1 from '../assets/images/course/teacher/t-1.jpg'
// import teacher2 from '../assets/images/course/cu-1.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faStar, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Courses = () => {


	const [data, setdata] = useState([]);
	const [page, setPage] = useState(1);
	const pageSize = 6;

	
	const fetchData=async()=>{
		try{
			const api = `https://api.escuelajs.co/api/v1/users?page=${page}&pageSize=${pageSize}`;
			const response = await fetch(api);
			const data = await response.json();
			setdata(data);

		}catch(err){
              console.log(err, "Error fetching data");
		}
		

	}

	useEffect(()=>{
		fetchData();
	},[page])

	const handleNext=()=>{
		setPage((prevPage)=>prevPage+1);
	}

	const handlePrevious=()=>{
      setPage((prevPage)=>prevPage-1);
	}

	



  return (
	<>
	  <TopNav/>
	  <BottomNav/>
	  <CoursesPageBanner/>



	  <section id="courses-part" className="pt-120 pb-120 gray-bg"  style={{paddingTop:"120px", paddingBottom:"120px"}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="courses-top-search">
          <ul className="nav float-left" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="active"
                id="courses-grid-tab"
                data-toggle="tab"
                href="#courses-grid"
                role="tab"
                aria-controls="courses-grid"
                aria-selected="true"
              >
                <i className="fa fa-th-large" />
              </a>
            </li>
            <li className="nav-item">
              <a
                id="courses-list-tab"
                data-toggle="tab"
                href="#courses-list"
                role="tab"
                aria-controls="courses-list"
                aria-selected="false"
              >
                <i className="fa fa-th-list" />
              </a>
            </li>
            <li className="nav-item">Showning 4 0f 24 Results</li>
          </ul>{" "}
          {/* nav */}
          
        
          {/* courses search */}
        </div>
        {/* courses top search */}
      </div>
    </div>
    
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="courses-grid"
        role="tabpanel"
        aria-labelledby="courses-grid-tab"
      >
        <div className="row">
         
         {/* mapping item */}
           {data.map((item, index)=>{

			const {name, avatar, email, role} = item;

			



		return(

			
			<div key={index} className="col-lg-4 col-md-6">
            <div className="singel-course mt-30">
              <div className="thum">
                <div className="image">
                  <img src={avatar} alt="Course" />
                </div>
                <div className="price">
                  <span>Free</span>
                </div>	
              </div>
              <div className="cont">
                <ul>
                  <li>
                   <i><FontAwesomeIcon icon={faStar}/></i>
                  </li>
                  <li>
				  <i><FontAwesomeIcon icon={faStar}/></i>
                  </li>
                  <li>
				  <i><FontAwesomeIcon icon={faStar}/></i>
                  </li>
                  <li>
				  <i><FontAwesomeIcon icon={faStar}/></i>
                  </li>
                  <li>
				  <i><FontAwesomeIcon icon={faStar} style={{color:"gray"}}/></i>
                  </li>
                </ul>
                <span>({name})</span>
                <a href="courses-singel.html">
                  <h4>{email}</h4>
                </a>
                <div className="course-teacher">
                  <div className="thum">
                    <a href="#">
                      <img src={avatar} alt="teacher" />
                    </a>
                  </div>
                  <div className="name">
                    <a href="#">
                      <h6>Mark anthem</h6>
                    </a>
                  </div>
                  <div className="admin">
                    <ul>
                      <li>
                        <a href="#">
                          <i><FontAwesomeIcon icon={faUser}/></i>
                          <span>31</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i><FontAwesomeIcon icon={faHeart}/></i>
                          <span>{role}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* singel course */}
          </div>
	)
	})}
        </div>{" "}
        {/* row */}
      </div>
      <div
        className="tab-pane fade"
        id="courses-list"
        role="tabpanel"
        aria-labelledby="courses-list-tab"
      >
        <div className="row">
          
          
          
         
        </div>{" "}
        {/* row */}
      </div>
    </div>{" "}
    {/* tab content */}
    <div className="row">
      <div className="col-lg-12">
        <nav className="courses-pagination mt-50">
          <ul className="pagination justify-content-center">
           <button onClick={handlePrevious} disabled ={page===1} > <li className="page-item">
              <a href="#" aria-label="Previous">
				<i><FontAwesomeIcon icon={faAngleLeft}/></i>
              </a>
            </li></button>
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
            <button onClick={handleNext}><li className="page-item">
              <a href="#" aria-label="Next">
				<i><FontAwesomeIcon icon={faAngleRight}/></i>
              </a>
            </li></button>
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

export default Courses
