import React, { useState } from 'react'
import UserHeader from '../Shared/UserHeader'
import UserFooter from '../Shared/UserFooter'
import axios from 'axios'

function Contact() {
  
  const [mailing, setmailing] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e) => {
            setmailing({ ...mailing, [e.target.name]: e.target.value })
    }

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/send-email", 
      mailing
    );
    alert('Thank you for contacting us, check your email for more related info.')
    console.log(res.data);
  } catch (error) {
    console.log("Error Occured: ", error);
  }
};


  return (
    <div>
      <UserHeader />
  {/* Start Contact Us Section */}
  <section id="contact" className="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center wow fadeInDown" data-wow-duration="2s" data-wow-delay="50ms">
            <h2>Contact With Us</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form name="sentMessage" id="contactForm" noValidate onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="600ms">
                <div className="form-group">
                  <input type="text" name="name" onChange={handleChange} className="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name." />
                  <p className="help-block text-danger" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" onChange={handleChange} className="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address." />
                  <p className="help-block text-danger" />
                </div>
                <div className="form-group">
                  <input type="text" name='subject' onChange={handleChange} className="form-control" placeholder="Subject" id="phone" required data-validation-required-message="Please enter your phone number." />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="col-md-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="600ms">
                <div className="form-group">
                  <textarea className="form-control" name='message' onChange={handleChange} placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message." defaultValue={""} />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="clearfix" />
              <div className="col-lg-12 text-center wow zoomIn" data-wow-duration="1s" data-wow-delay="600ms">
                <div id="success" />
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <div className="google-map">
    <div id="map" data-position-latitude="48.858370" data-position-longitude="2.294481" />
  </div>

  <UserFooter />
</div>

  )
}

export default Contact