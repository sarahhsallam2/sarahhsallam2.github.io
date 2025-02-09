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
              Hi, I'm <b>Sara Khaled</b>, a passionate software engineer with a love for technology and creative problem-solving. I am a senior student in Computer Science and Computer Engineering at the German University in Cairo (GUC). 
              I love learning, creating, and solving problems. 🚀 Whether it’s coding, designing games, or teaching others, I enjoy using my skills to make ideas come to life. 💻✨
                I specialize in <b>web development</b>, <b>game development</b>, and <b>VR solutions</b>, aiming to create immersive and user-friendly experiences. I’m curious about how things work and love finding smart ways to fix or build things. 
              </p>
              <p>
                My journey into tech started with a fascination for how things work. Over the years, I've improved my skills in languages like <b>JavaScript</b>, <b>Python</b>, <b>C#</b>, and frameworks such as <b>ReactJS</b>, <b>Unity</b>, and <b>NestJS</b>.  In my free time, I’m all about space adventures, games, and exploring new tech. 🌌🎮 I believe in turning dreams into real things that can make a difference! 🌍💡
              </p>
              <p>
                Beyond coding, I enjoy exploring emerging technologies, reading about space exploration, and engaging in outdoor adventures. Let's connect and collaborate on something impactful!
              </p>
              <p> 
              You can view my detailed CV here: <a href="https://drive.google.com/file/d/1UIAU6lB-cu3kR9DDAlATP5I4KizZCqmS/view?usp=sharing" target="_blank" rel="noopener noreferrer">My CV</a>
              </p>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
