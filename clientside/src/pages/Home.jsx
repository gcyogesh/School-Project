import React from 'react'
import TopNav from "../components/TopNav"
import BottomNav from "../components/BottomNav"
import Slider from "../components/Slider"
import Category from "../components/Category"
import Counter from "../components/Counter"
import FeaturedCourse from "../components/FeaturedCourse"
import Teachers from "../components/Teachers"
import Events from "../components/Events"
import News from "../components/News"
import Footer from "../components/Footer"
import FaAngleUp from '../components/FaAngleUp'



const Home = () => {
  return (
	<>
	    <TopNav/>
   <BottomNav/>
   <Slider/>
   <Category/>
   <FeaturedCourse/>
   <Counter/>
   <Teachers/>
   <Events/>
   <News/>
   <Footer/>
   <FaAngleUp/>
	</>
  )
}

export default Home
