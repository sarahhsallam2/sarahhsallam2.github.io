import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <p>If you'd like to connect, feel free to reach me via:</p>

                  <ul className = "contact-list">
                    <li>
                      <strong>Email:</strong>{" "}
                      <a 
                      href= "mailto:sarahsallam21@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                         sarahsallam21@gmail.com
                      </a>
                    </li>
                    <li>
                      <strong>LinkedIn: </strong>
                      <a
                       href= "https://www.linkedin.com/in/sara-sallam-89aa20228/"
                       target="_blank"
                       rel="noopener noreferrer"
                      >
                        linkedin.com/in/sara-sallam

                      </a>
                    </li>
                    <li>
                      <strong>Github: </strong>
                      <a
                       href= "https://github.com/sarahhsallam2"
                       target="_blank"
                       rel="noopener noreferrer"
                      >
                        github.com/sarahhsallam2

                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
