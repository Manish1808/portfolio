import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MoodChef from "../../Assets/Projects/MoodChef.png";
import E_Sanchay from "../../Assets/Projects/E_Sanchay.png";
import Cybernauts from "../../Assets/Projects/Cybernauts.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={E_Sanchay}
              isBlog={false}
              title="E-Sanchay"
              description="E-Sanchay is an AI-powered financial literacy platform using Gemini 2.0 and Google AI Studio to provide expense tracking and AI chatbot support. Built with MERN Stack, it enhances financial awareness, improves savings habits, and promotes self-reliance."
              ghLink="https://github.com/Manish1808/E-Sanchay"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cybernauts}
              isBlog={false}
              title="Cybernauts"
              description="Cybernauts Event Platform is an online registration system for the CSE student committee, developed with MERN Stack by a team of 5 in 1-2 months. It doubled event participation and introduced a blogging feature for updates and engagement."
              ghLink="https://github.com/Manish1808/Cybernauts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MoodChef}
              isBlog={false}
              title="MoodChef"
              description="MoodChef is a food recommendation app built with HTML, CSS, JavaScript, and Express.js. It suggests meals based on user mood, diet, and preferences, enhancing comfort and enjoyment in food choices."
              ghLink="https://github.com/Manish1808/moodchef-client"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
