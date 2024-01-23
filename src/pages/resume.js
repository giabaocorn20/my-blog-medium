import * as React from "react"
import { graphql } from "gatsby"

import PageTemplate from "./page-templates/pageTemplate"
import Button from "@mui/material/Button"

const CV = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const downloadFile = () => {

    const fileUrl = '../assets/Jason_Nguyen.pdf';

    const link = document.createElement('a');

    link.download = 'Jason_cv.pdf';

    link.href = fileUrl;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  }
  return (
    <PageTemplate
      location={location}
      pageTitle={"Curriculum Vitae"}
      pageSeo={"CV"}
      tabIndex={4}
    >
      <div>
        <Button
          style={{
            float: 'right',
            marginTop: '10px',
            marginRight: '10px',
          }}
          onClick={downloadFile}
        >
          Download CV
        </Button>

        <h2>Personal Information</h2>
        <div>
          <p>
            <strong>Name:</strong> Bao (Jason)
          </p>
          <p>
            <strong>Education:</strong> Electrical Engineering, Toronto Metropolitan University (TMU)
          </p>
        </div>
        <br />


        <h2>Professional Interests</h2>
        <div>
          <p>
            I have a strong passion for Mathematics, Physics, and the world of chip design and software engineering.
            Pursuing studies in electrical engineering to further explore and contribute to these fields.
          </p>
        </div>
        <br />

        <div>
          <h2>About Me</h2>
          <p>
            I'm a perfectionist with a keen interest in solving problems in optimal ways. Apply Bellman Equation in life
            optimization, navigating through the challenges with a focus on continuous improvement.
          </p>
          <p>
            Enthusiast in expanding skill sets through learning new programming languages, exploring technology trends,
            and undertaking creative DIY projects.
          </p>
        </div>
        <br />


        <h2>Experience</h2>
        <div>
          <div>
            <h3>Toronto Metropolitan Aerial Vehicles (Aug 2023 – Present)</h3>
            <p><strong>Control System - lead Battery Management System subteam | Toronto, ON</strong></p>
            <ul>
              <li>Led the development of a full-stack application using Python, Flask, HTML, and CSS to calculate
                optimal
                drone battery usage, resulting in significant cost savings and reduced test flight time.
              </li>
              <li>Created a Battery Management System with State of Charge, Battery Discharge Prevention, and Emergency
                Landing features using Matlab, Arduino (C++), Python on a Virtual Machine and using ROS to facilitate
                communication
                between parts of the system, enhancing drone safety for competition.
              </li>
              <li>Conducted Computational Fluid Dynamics (CFD) analysis using AutoDesk Simulation to estimate drag
                values,
                achieving a 10% increase in calculation accuracy.
              </li>
            </ul>
          </div>
          <br />

          <div>
            <h3>Toronto Metropolitan Aerial Vehicles (Sep 2023 – Dec 2023)</h3>
            <p><strong>Propulsion Team | Toronto, ON</strong></p>
            <ul>
              <li>Conducted weekly programming and math learning sessions with team members, covering software tools and
                course material in Calculus, Physics, and Programming.
              </li>
              <li>Hosted informative tutorials focusing on the functionality of drones, specializing in the intricacies
                of
                flight controllers, motor battery systems, and more. These sessions contributed to a 25% increase in
                team
                efficiency and a notable 40% rise in software adoption.
              </li>
            </ul>
          </div>
          <br />

          <div>
            <h3>Communication Specialist, MetHacks</h3>
            <p><strong>Toronto, ON</strong></p>
            <ul>
              <li>Crafted engaging content to share exciting updates and connect with our hackathon community.</li>
              <li>Navigated friendly and effective email communications to keep everyone in the loop.</li>
              <li>Provided approachable responses to inquiries, making information accessible to all.</li>
              <li>Shared hackathon details in a way that resonated with our diverse audience.</li>
              <li>Contributed to boosting our online presence and fostering stronger community connections.</li>
            </ul>
          </div>
          <br />
        </div>


        <h2>Notable Projects</h2>
        <div>
          <div>
            <h3>General Purpose Processor | Nov 2023 - Dec 2023</h3>
            <p style={{ color: "#888" }}>Technologies: Quartus, VHDL</p>
            <p style={{ color: "#888" }}>Source: <a href="https://github.com/giabaocorn20/generalPurposeProcessor"
                                                    target="_blank">GitHub</a></p>

            <h4>Project Overview</h4>
            <ul>
              <li>Designed and implemented an FPGA-based Arithmetic Logic Unit (ALU) using VHDL within the Quartus
                environment.
              </li>
              <li>Conducted comprehensive simulations with Quartus Simulator to validate functionalities and optimize
                efficiency.
              </li>
              <li>Gained hands-on experience translating theoretical concepts into practical applications.</li>
            </ul>
          </div>
        </div>
        <br />


        <h2>Skills</h2>
        <div>
          <div>
            <h3>Programming Languages</h3>
            <p>
              I excel in developing software solutions, leveraging a versatile range of programming languages. My
              expertise
              encompasses C/C++, Python, Java, the trio JavaScript, HTML, CSS and some of its big frameworks like
              React.js
              and Next.js.
              Moreover, I bring hands-on experience with Java, MATLAB, JavaScript, and R, having
              successfully executed substantial projects in each of these languages.
            </p>
          </div>
          <div>
            <h3>Office Suites</h3>

            <p>
              Demonstrating a keen proficiency in crafting polished documents, I am well-versed in utilizing LaTeX and
              Markdown. This proficiency underscores my ability to communicate and present information with precision
              and
              clarity.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}

export default CV

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`