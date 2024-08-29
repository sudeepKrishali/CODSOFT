import React from 'react';
import { FaGithub, FaLinkedin,FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <div className="image-section">
            <img src="profile.webp" alt="Sudeep" className="profile-image" />
          </div>
          <div className="intro-section">
            <h1 className="intro-title">Hi, I'm Sudeep krishali</h1>
            <p className="intro-text">
              A passionate developer and technology enthusiast. Explore my portfolio to see my projects, learn about my skills, and get in touch for collaboration.
            </p>
            <div className="social-icons">
              <a href="https://github.com/sudeepKrishali" target="_blank" rel="noopener noreferrer">
                <FaGithub size="2em" />
              </a>
              <a href="https://www.linkedin.com/in/sudeep-krishali-68470731b" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="2em" />
              </a>
              <a href="mailto:sud945835@gmail.com">
              <MdEmail size="2em" />
              </a>
            </div>
            <div className="explore-container">
            <span><a href="/ContactMe" className="explore-button">Contact me</a></span> 
            <span><a href="resume.pdf" className='explore-button' download="sudeep_krishali.pdf">Resume <FaDownload/> </a></span> 
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
