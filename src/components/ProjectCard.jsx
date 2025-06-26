/* eslint-disable jsx-a11y/alt-text */
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkText, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="project-image" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {linkUrl && (
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
              {linkText}
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
