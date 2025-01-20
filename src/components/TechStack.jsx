/* eslint-disable jsx-a11y/img-redundant-alt */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import javascript from "../assets/img/logos/javascript.svg";
import CPlusPlus from "../assets/img/logos/CPlusPlus.svg";
import CSharp from "../assets/img/logos/CSharp.svg";
import python from "../assets/img/logos/python.svg";
import TypeScript from "../assets/img/logos/TypeScript.svg";
import Java from "../assets/img/logos/java.svg";
import prolog from "../assets/img/logos/prolog.svg";
import nestjs from "../assets/img/logos/nestjs.svg";
import minio from "../assets/img/logos/minio-1.svg";
import expressjs from "../assets/img/logos/expressjs.svg";
import nodejs from "../assets/img/logos/node-js.svg";
import react from "../assets/img/logos/react.svg";
import postgresql from "../assets/img/logos/postgresql.svg";
import mysql from "../assets/img/logos/mysql.svg";
import mongodb from "../assets/img/logos/mongodb.svg";
import git from "../assets/img/logos/git.svg";
import docker from "../assets/img/logos/docker.svg";
import HTML from "../assets/img/logos/HTML.svg";
import CSS from "../assets/img/logos/CSS.svg";
import unity from "../assets/img/logos/unity.svg";
export const TechStack = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const skills = [
    { category: "Programming Languages", items: ["JavaScript","Java", "Prolog","C and C++","C#","TypeScript","HTML","CSS", "Python"] },
    { category: "Frameworks & Technologies", items: ["Node.js", "NestJS","ExpressJS", "ReactJS", "Unity"] },
    { category: "DevOps & Tools", items: ["Docker", "Minio", "Git"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  ];

    const getLogo = (item) => {
        switch(item){
            case "JavaScript":
                return <img src={javascript} alt="JavaScript Logo" className="tech-logo" />;
            
            case "C and C++":
                return <img src={CPlusPlus} alt="C and C++ Logo" className="tech-logo" />;
            
            case "C#":
                return <img src={CSharp} alt="CSharp Logo" className="tech-logo" />;

            case "TypeScript":
                return <img src={TypeScript} alt="TypeScript Logo" className="tech-logo" />;

            case "Python":
                return <img src={python} alt="Python Logo" className="tech-logo" />;

            case "Java":
                return <img src={Java} alt="Java Logo" className="tech-logo" />;

            case "Prolog":
                return <img src={prolog} alt="Prolog Logo" className="tech-logo" />;
    
            case "HTML":
                return <img src={HTML} alt="HTML Logo" className="tech-logo" />;
                    
            case "CSS":
                return <img src={CSS} alt="CSS Logo" className="tech-logo" />;
                
            case "Node.js":
                return <img src={nodejs} alt="NodeJS Logo" className="tech-logo" />;
            case "NestJS":
                return <img src={nestjs} alt="NestJS Logo" className="tech-logo" />;
            case "ExpressJS":
                return <img src={expressjs} alt="ExpressJS Logo" className="tech-logo" />;
            case "ReactJS":
                return <img src={react} alt="React Logo" className="tech-logo" />;

            case "Unity":
                return <img src={unity} alt="Unity Logo" className="tech-logo" />;  
                          
            case "Docker":
                return <img src={docker} alt="Docker Logo" className="tech-logo" />;

            case "Minio":
                return <img src={minio} alt="Minio Logo" className="tech-logo" />;
            
            case "Git":
                return <img src={git} alt="Git Logo" className="tech-logo" />;
            case "PostgreSQL":
                return <img src={postgresql} alt="Postgresql Logo" className="tech-logo" />;
                    
            case "MongoDB":
                return <img src={mongodb} alt="Mongodb Logo" className="tech-logo" />;
            
            case "MySQL":
                return <img src={mysql} alt="MySQL Logo" className="tech-logo" />;  
                                                                                        
            default:
                return null;
            
        }
    }
 
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tech-stack-bx wow zoomIn">
              <h2>My Tech Stack</h2>
              {skills.map((skill) => (
                <div key={skill.category} className={skill.category === "Programming Languages" ? "programming-languages" : ""}>
                    <h3>{skill.category}</h3> {/* This will be white now */}
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme tech-slider"
                  >
                    {skill.items.map((item) => (
                      <div className="item card" key={item}>
                        <h5 className="card-title">{item}</h5> {/* This will also be white */}

                        <div className="card-body">
                          {getLogo(item)} {}
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
