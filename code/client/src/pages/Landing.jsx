import React, { useEffect } from 'react'
import '../styles/landing.css'
import {PiStudent} from 'react-icons/pi'
import {FaHandHoldingWater} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("usertype") === 'freelancer'){
      navigate("/freelancer")
    } else if (localStorage.getItem("usertype") === 'client'){
      navigate("/client")
    } else if (localStorage.getItem("usertype") === 'admin'){
      navigate("/admin")
    }
  })


  return (
    <div className="landing-page">

        <div className="landing-hero">

            <div className='landing-nav'>
              <h3>SB Works</h3>
              <div className="nav-links">
                <p onClick={() => navigate('/')}>Home</p>
                <p onClick={() => navigate('/about')}>About</p>
                <button onClick={()=> navigate('/authenticate')} >Sign In</button>
              </div>
            </div>

            <div className="landing-hero-text">

                <h1>Empower Your Journey: Elevate Your Craft on SB Works</h1>
                <p>Dive into a realm of endless possibilities with SB Works. Unleash your creativity, skills, and passion as you embark on a freelancing journey like never before. Our platform is a thriving marketplace where innovation meets opportunity, connecting talented freelancers with businesses seeking excellence. </p>
                <button onClick={()=> navigate('/authenticate')}>Join Now</button>
            </div>

        </div>

        <div className="landing-features">
          <h2>Why Choose SB Works?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <PiStudent className="feature-icon" />
              <h3>For Freelancers</h3>
              <p>Showcase your skills, find exciting projects, and build your career in a supportive community.</p>
            </div>
            <div className="feature-card">
              <FaHandHoldingWater className="feature-icon" />
              <h3>For Clients</h3>
              <p>Find the perfect talent for your projects with our extensive network of skilled professionals.</p>
            </div>
            <div className="feature-card">
              <MdHealthAndSafety className="feature-icon" />
              <h3>Secure & Reliable</h3>
              <p>Enjoy peace of mind with our secure platform, timely payments, and dedicated support team.</p>
            </div>
          </div>
        </div>

        <div className="landing-how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign Up</h3>
              <p>Create your account and set up your profile as a freelancer or client.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Connect</h3>
              <p>Browse projects or post your requirements to find the perfect match.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Collaborate</h3>
              <p>Work together seamlessly with our integrated tools and communication features.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Succeed</h3>
              <p>Complete projects successfully and build lasting professional relationships.</p>
            </div>
          </div>
        </div>

        <footer className="landing-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SB Works</h3>
              <p>Connecting talent with opportunity worldwide.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <p onClick={() => navigate('/about')}>About Us</p>
              <p onClick={() => navigate('/authenticate')}>Join Now</p>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <p>Help Center</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 SB Works. All rights reserved.</p>
          </div>
        </footer>

    </div>
  )
}

export default Landing