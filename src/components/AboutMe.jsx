import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="about-me-text">
              <h2>About Me</h2>
              <p>
              Hi, I am <b>Sara Khaled</b>, a senior student in Computer Science and Computer Engineering at the German University in Cairo (GUC). 
              As a passionate software engineer and proactive problem solver, I am dedicated to continuous learning, creative problem-solving, and turning ideas into reality through coding, game design, and mentoring others.
              I specialize in <b>Web Development</b>, <b>Full Stack Architectures</b>, <b>Game Development</b>, and <b>VR/AR Solutions</b>, aiming to create immersive and user-friendly experiences. 
              </p>
              <p>
                My journey into tech started with a fascination for how things work. Over the years, I've improved my skills in languages like <b>Java</b>, <b>JavaScript</b>, <b>Python</b>, <b>C#</b>, <b>TypeScript</b>, <b>CSS</b>, <b>MEL</b>, <b>Prolog</b>, and frameworks such as <b>ReactJS</b> and <b>NestJS</b>.
                I have built full-stack apps with <b>ReactJS</b>, <b>MERN Stack</b>, and engineered microservices using <b>Spring Boot</b>, <b>Docker</b>, <b>Kubernetes</b>, <b>RabbitMQ</b>, and <b>Redis</b> while managing databases like <b>MongoDB</b>, <b>PostgreSQL</b>, and <b>Microsoft SQL Server</b>.  
                I also create immersive AR/VR experiences in <b>Unity</b> and tackle animation & 3D simulation with <b>Blender</b> and <b>Maya</b>. In my free time, I’m all about space adventures, game development, and exploring emerging tech. I believe in turning dreams into real solutions that make a difference! 
              </p>

              <p>
                Outside of software engineering, I explore emerging technologies, read about space exploration, and pursue outdoor adventures. I would welcome the opportunity to connect and build innovative, real-world solutions together.  Let's connect and collaborate on something impactful!
              </p>
              <p> 
              You can view my detailed CV here: <a href="https://drive.google.com/file/d/1Nz0RHEwfmQwOGBaNKP4a_LD30qiBkP1w/view?usp=sharing" target="_blank" rel="noopener noreferrer">My CV</a>
              </p>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
