import React, { useState } from 'react'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import Footer from '../components/Footer'
import ContactPageBanner from '../components/ContactPageBanner'


import { faHome, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Contact = () => {

  const [contact, setContact] = useState({
      name:"",
      email:"",
      subject:"",
      phone:"",
      message:"",
  })
  const [error, setError] = useState({
    name:"",
    email:"",
    subject:"",
    phone:"",
    message:"",

  })

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setContact({
      ...contact,
      [name]:value,
    })
  }

  const validateForm =()=>{
    let isValid = true;
    const newErrors= {name:"", email:"", subject:"", phone:"", message:""};


    // for name part 
    if(contact.name.trim() === ''){
      newErrors.name = "Name is required";
      isValid=false;
    }

    // for email part 
    const emailrex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailrex.test(contact.email)){
      newErrors.email = "Email is not valid";
      isValid = false;
    }
    if(contact.email.trim() === ""){
      newErrors.email= "Email is required";
      isValid = false;
    }
  //  for subject 
    if(contact.subject.trim() === ""){
          newErrors.subject = "Pleae enter a subject";
          isValid = false;

    }

  // for phone 
const phoneRegex = /^\d{10}$/;
if (!phoneRegex.test(contact.phone)) {
  newErrors.phone = "Phone Number is not valid";
  isValid = false;
}

// For message 
if (contact.message.length < 3) {
  newErrors.message = "Please write some message";
  isValid = false;
}


    setError(newErrors);
    return isValid;
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
         if(validateForm()){
          console.log("Submited", contact)
         }else{
          console.log("login failed");
         }
  }


  return (
	<>
	  <TopNav/>
	  <BottomNav/>  
	  <ContactPageBanner/>

	  <section id="contact-page" className="pt-90 pb-120 gray-bg">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="contact-from mt-30">
          <div className="section-title">
            <h5>Contact Us</h5>
            <h2>Keep in touch</h2>
          </div>
          {/* section title */}
          <div className="main-form pt-45">
            <form
             onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="singel-form form-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={contact.name}
                      onChange={handleChange}
                    />
                    <div className="help-block with-errors" />
                    <span >{error.name}</span>
                  </div>
                  {/* singel form */}
                </div>
                <div className="col-md-6">
                  <div className="singel-form form-group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={contact.email}
                      onChange={handleChange}

                    />
                    <div className="help-block with-errors" />
                    <span>{error.email}</span>
                  </div>
                  {/* singel form */}
                </div>
                <div className="col-md-6">
                  <div className="singel-form form-group">
                    <input
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      value={contact.subject}
                      onChange={handleChange}

                    />
                    <div className="help-block with-errors" />
                    <span>{error.subject}</span>
                  </div>
                  {/* singel form */}
                </div>
                <div className="col-md-6">
                  <div className="singel-form form-group">
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone"
                      value={contact.phone}
                      onChange={handleChange}

                    />
                    <div className="help-block with-errors" />
                    <span>{error.phone}</span>
                  </div>
                  {/* singel form */}
                </div>
                <div className="col-md-12">
                  <div className="singel-form form-group">
                    <textarea
                      name="message"
                      placeholder="Messege"
                      defaultValue={""}
                      value={contact.message}
                      onChange={handleChange}

                    />
                    <div className="help-block with-errors" />
                    <span>{error.message}</span>
                  </div>
                  {/* singel form */}
                </div>
                <p className="form-message" />
                <div className="col-md-12">
                  <div className="singel-form">
                    <button type="submit" className="main-btn">
                      Send
                    </button>
                  </div>
                  {/* singel form */}
                </div>
              </div>
              {/* row */}
            </form>
          </div>
          {/* main form */}
        </div>
        {/*  contact from */}
      </div>
      <div className="col-lg-5">
        <div className="contact-address mt-30">
          <ul>
            <li>
              <div className="singel-address">
                <div className="icon">
				<i><FontAwesomeIcon icon={faHome}/></i>
                </div>
                <div className="cont">
                  <p>Sardi-Bhartha , Bardhaghat-east , Nepal</p>
                </div>
              </div>
              {/* singel address */}
            </li>
            <li>
              <div className="singel-address">
                <div className="icon">
                  <i><FontAwesomeIcon icon={faPhone}/></i>
                </div>
                <div className="cont">
                  <p>078690059</p>
                  <p>+977 9847365308</p>
                </div>
              </div>
              {/* singel address */}
            </li>
            <li>
              <div className="singel-address">
                <div className="icon">
				<i><FontAwesomeIcon icon={faEnvelope}/></i>
                </div>
                <div className="cont">
                  <p>gcyogesh962@gmail.com</p>
                  <p>smsbs1@gmail.com</p>
                </div>
              </div>
              {/* singel address */}
            </li>
          </ul>
        </div>
        {/* contact address */}
        <div className="map mt-3 " style={{position:"relative", bottom:"200px"}}>
          <div id="contact-map" />
          <iframe className='  position-relative '
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4862.11832403576!2d83.86968618855839!3d27.64213647932059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399437df1e8806ed%3A0x7553da202201f167!2z4KS24KWN4KSw4KWAIOCkruCko-Ckv-CkuOCkv-CkpuCljeCkpyDgpIbgpKfgpL7gpLDgpK3gpYLgpKQg4KS14KS_4KSm4KWN4KSv4KS-4KSy4KSvLCDgpLXgpL_gpKjgpK_gpYAg4KSk4KWN4KSw4KS_4KS14KWH4KSj4KWALSDgpao!5e0!3m2!1sen!2snp!4v1705335445500!5m2!1sen!2snp"
  width={390}
  height={300}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
        {/* map */}
      </div>
    </div>
    {/* row */}
  </div>
  {/* container */}
</section>




	  <Footer/>
	</>
  )
}

export default Contact
