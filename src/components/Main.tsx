import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePic from "../assets/images/profilePic.png";



function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AmaanKhan2000" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/amaan-khan-6a64b21b8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h2>Mohammed Amaan Ahmed Khan</h2>
          <p>MSc Data Science & Analytics @ASU | Gen AI Enthusiast | Ex - Cybersecurity Engineer II @Verizon |  Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AmaanKhan2000" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/amaan-khan-6a64b21b8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;