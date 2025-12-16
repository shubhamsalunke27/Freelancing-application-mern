import React from 'react'
import '../styles/about.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About SB Works</h1>
        <p className="about-intro">
          SB Works is a premier freelancing platform that connects talented freelancers with businesses worldwide.
          Our mission is to empower professionals and organizations to achieve their goals through seamless collaboration.
        </p>

        <div className="about-sections">
          <section className="about-section">
            <h2>Our Vision</h2>
            <p>
              To create a thriving ecosystem where creativity meets opportunity, enabling freelancers to showcase their skills
              and businesses to find the perfect talent for their projects.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Offer</h2>
            <ul>
              <li>Secure and transparent freelancing platform</li>
              <li>Wide range of project categories</li>
              <li>Advanced project management tools</li>
              <li>Real-time communication features</li>
              <li>Comprehensive user support</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Why Choose SB Works?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Quality Assurance</h3>
                <p>We ensure high-quality deliverables through our rigorous vetting process.</p>
              </div>
              <div className="feature-item">
                <h3>Global Reach</h3>
                <p>Connect with clients and freelancers from around the world.</p>
              </div>
              <div className="feature-item">
                <h3>Secure Payments</h3>
                <p>Safe and timely payment processing for all transactions.</p>
              </div>
              <div className="feature-item">
                <h3>24/7 Support</h3>
                <p>Round-the-clock customer support to assist you whenever needed.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About