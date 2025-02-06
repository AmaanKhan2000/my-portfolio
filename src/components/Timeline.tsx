import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import verizonPic from "../assets/images/verizon.jpeg";
import btPic from "../assets/images/BT.jpeg";
import atgPic from "../assets/images/ATG.jpeg";
import tsfPic from "../assets/images/TSF.jpeg";

const VerizonIcon = () => {
  return <img src={verizonPic} alt="Custom Icon"       style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',  // Makes the image circular
  }} />;
};

const BTIcon = () => {
  return <img src={btPic} alt="Custom Icon"       style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',  // Makes the image circular
  }} />;
};

const ATGIcon = () => {
  return <img src={atgPic} alt="Custom Icon"       style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',  // Makes the image circular
  }} />;
};

const TSFIcon = () => {
  return <img src={tsfPic} alt="Custom Icon"       style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',  // Makes the image circular
  }} />;
};

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2022 - August 2024"
            iconStyle={{ background: 'transparent', padding: 0, borderRadius: '50%' }} // Adjust iconStyle to fit your image
            icon={<VerizonIcon />}
          >
            <h3 className="vertical-timeline-element-title">Cybersecurity Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Verizon, Hyderabad, India</h4>
            <p>
            - Integrated single sign-on solutions to provide 6300+ users with seamless access to multiple systems using a single set of credentials. <br></br>
- Developed and enforced more than 1000 access control policies using ForgeRock, SAML, etc. to ensure only authorized personnel had access to critical systems and sensitive data.<br></br>
- Administrated 100% end-to-end identity lifecycle management processes, including onboarding, offloading, and role changes, to streamline operations and enhance security.<br></br>
- Collaborated with cross-functional teams to analyse business requirements and translate into IAM solutions; decreased unwanted risks by 22%.<br></br>
- Migrated over 3000+ In-house applications and implementing ForgeRock policies to ensure easier management and increasing compliance.<br></br>
- Implementation of OAuth, MSSO and Multi factor Authentication for secured user experience and mitigating risk of unauthorized access.<br></br>
- Developed and executed a multi-layered cybersecurity strategy to safeguarded critical infrastructure; the initiative produced a 35% decrease in security incidents, surpassing the initial target of reducing threats by 20%.<br></br>
- Directed team meetings and collaborated a team of 4 in working towards a secure portal by adding DUO security and accomplishing fingerprint authorization to enter the portal.<br></br>
- Conducted Knowledge Training sessions on CompTIA Security+ including practices - IAM, SSDLC, Risk Management and etc for 50 employees while increasing the team engagement and impacting the teamwork<br></br>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2021 - September 2021"
            iconStyle={{ background: 'transparent', padding: 0, borderRadius: '50%' }} // Adjust iconStyle to fit your image
            icon={<BTIcon />}
          >
            <h3 className="vertical-timeline-element-title">React Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Banao Technologies, Bengaluru, Karnataka, India</h4>
            <p>
            - Created mobile applications based on React, integrating Facebook's best practices for interface design. <br></br>

- Designed REST calls using React to streamline user interface performance.<br></br>

- Maintained high-level expertise in React state management strategies.<br></br>

- Developed user interfaces for deployment on Amazon Web Services (AWS) platforms.<br></br>

- Worked on a large-scale E-commerce project, where designers are able to post their designs and share it with the whole world and users can bid/buy designs and can be shipped within India.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2021 - September 2021"
            iconStyle={{ background: 'transparent', padding: 0, borderRadius: '50%' }} // Adjust iconStyle to fit your image
            icon={<ATGIcon />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Across The Globe (ATG), Bengaluru, Karnataka, India</h4>
            <p>
            - Learned software engineering process improvements and best practices.<br></br>

- Supported development, QA and user experience staff to develop new products.<br></br>

- Documented technical workflows and knowledge to educate newly hired employees.<br></br>

- Developed an extension which can track the progress of GitHub users. It allows the Tech Lead/ Tester to verify the branches according to their needs and keeps a track on people of Excellent Communication their progress.<br></br>

- Solving daily basis bugs on the master website.<br></br>

- Developing a Crop & Field Management UI using React JS and Semantic UI.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2021 - Feb 2021"
            iconStyle={{ background: 'transparent', padding: 0, borderRadius: '50%' }} // Adjust iconStyle to fit your image
            icon={<TSFIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">The Sparks Foundation, Hyderabad, India</h4>
            <p>
            - Studied user requirements to gain strong understanding of project initiatives and deadlines.<br></br>

- Took detailed notes during team meetings and disseminated to staff members.<br></br>

- Worked closely with developers on creating new code.<br></br>

- Pitched feature improvements to developer team for use in applications.<br></br>

- Created a Donation Website that integrates payment gateway and once the payment is
done, the invoice of the same is received.<br></br>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;