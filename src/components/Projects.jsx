/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import l1 from "../assets/img/logos/marvel.jpg";
import l2 from "../assets/img/logos/clinicc.jpg";
import l3 from "../assets/img/logos/pharmacyy.png";
import l4 from "../assets/img/logos/space.jpg";
import l5 from "../assets/img/logos/3D.jpg";
import l6 from "../assets/img/logos/onlineBankingSystem.JPG";
import l9 from "../assets/img/l9.png";
import Diablo from  "../assets/img/Diablo.png";
import skyRoad from  "../assets/img/sky roads.png";
import space from  "../assets/img/space.png";
import argame from  "../assets/img/argame.png";
import vrgame from  "../assets/img/vrgame.png";
import marker from  "../assets/img/marker1.webp";
import wizard from  "../assets/img/wizard.png";

import myprofile from "../assets/img/myprofile.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Marvel Ultimate War",
      description: "OOP concepts were used to make the game, and GUI features were used",
      imgUrl: l1,
      linkText: " Learn more about the code for the Marvel Game",
      linkUrl: "https://github.com/sarahhsallam2/Marvel-Utlimate-War"
    },

    {
      title: "3D Amusement Park Game",
      description: "The game environment includes various 3D objects and a character representing you as the player. ",
      imgUrl: l5,
      linkText: " Learn more about the code for the 3D Amusement Park Game",
      linkUrl: "https://github.com/sarahhsallam2/3D-Amusement-Park-Game"
    },
    {
      title: "Online Banking System",
      description: "A website for an online banking system for admin, clients, and banker accounts",
      imgUrl: l6,
      linkText: " Learn more about the code for the Online Banking System",
      linkUrl: "https://github.com/sarahhsallam2/Online-Banking-System"
    },
    {
      title: "Virtual Pharmacy Application",
      description: "A website for virtual pharmacy with three main users patient, admin, and pharmacist based on the username and password that will be logged in by the user.",
      imgUrl: l2,
      linkText: " Learn more about the code for the Virtual Pharmacy Application",
      linkUrl: "https://github.com/sarahhsallam2/Virtual-Pharmacy-Application"
    },
    {
      title: "Virtual Clinic Application",
      description: "A website for software solution for clinics, doctors, and patients alike to streamline and automate the interactions between patients, and medical doctors.",
      imgUrl: l3,
      linkText: " Learn more about the code for the Virtual Clinic Application",
      linkUrl: "https://github.com/sarahhsallam2/Virtual-Clinic-Application-"
    },
    {
      title: "My Profile",
      description: "a website for My Profile",
      imgUrl: myprofile,
      linkText: " Learn more about the code for my profile",
      linkUrl: "https://github.com/sarahhsallam2/Space-Exploration-Game"
    },
    {
      title: "Space Exploration Game",
      description: "An immersive space exploration game that allows users to explore planetary scenes and interact with spacecraft, providing an educational experience. This was created with Oculus Quest as VR.",
      imgUrl: l4,
      linkText: " Learn more about the code for the Space Exploration Game",
      linkUrl: "https://github.com/sarahhsallam2/Space-Exploration-Game"
    },
    {
      title: "Diablo IV Game",
      description: "An action game inspired by Diablo IV, where players choose a character class (Barbarian, Sorcerer, or Rogue). ",
      imgUrl: Diablo,
      linkText: " Learn more about the code for the Space Exploration Game",
      linkUrl: "https://drive.google.com/drive/folders/1kWQXzINwsGJfSWQjQbQkuxG0Rf8WQF-S?usp=share_link"
    },
    {
      title: "Lost in Space: A Narrative-Driven Adventure Game",
      description: "This game is Narrative-driven gameplay and player choices. ",
      imgUrl: space,
      linkText: " Learn more by playing the Game",
      linkUrl: "https://drive.google.com/drive/folders/1i3PVZphjo-rYmb2VBEkXUhQ4lRbwBBmL?usp=share_link"
    },
    {
      title: "Endless Runner Game",
      description: "An endless runner game inspired by Sky Roads, similar to Subway Surfers, where the player navigates through a dynamic, obstacle-filled road. ",
      imgUrl: skyRoad,
      linkText: " Learn more by playing the Game",
      linkUrl: "https://drive.google.com/drive/folders/1Zy66CA6FZBMfTYrPMFjAsd-6tf5tXfnS?usp=share_link"
    },


    {
      title: "PokéAdventure VR",
      description: "An immersive VR Pokémon-themed adventure game where players explore a vibrant world, capture Pokémon, and complete challenges.",
      imgUrl: vrgame,
      linkText: " Watch the Video to watch the Game",
      linkUrl: "https://drive.google.com/file/d/1fansWAxvYTSRHcDTYsZbhPYHTm1XczQJ/view?usp=sharing"
    },

    {
      title: "Mobile AR Challenges Game",
      description: "Four-level Android AR game: shoot cubes, collect keys, answer quizzes, and fight with a boss",
      imgUrl: argame,
      linkText: " Watch the Video to watch the Game",
      linkUrl: "https://drive.google.com/file/d/1xnjFdTEBtJf3uNC47Ou6zZT82OOxffhB/view?usp=sharing"
    },  
    
    {
      title: "Marker-Based AR Experience",
      description: "Supports simultaneous multi-marker tracking, real-time pose updates, and pre-scaled model alignment.",
      imgUrl: marker,
      linkText: " Learn more about the code for the experience",
      linkUrl: "https://github.com/sarahhsallam2/AR_First_Task.git"
    },


    {
      title: "Potion Class in Flames",
      description: "A cinematic short movie where a wizard apprentice accidentally triggers magical chaos, so the wizard is trying to save the day.",
      imgUrl: wizard,
      linkText: " Watch the Video to watch the Movie",
      linkUrl: "https://drive.google.com/file/d/1-s2lBwtjXhufFgOfRNvAIQKU3_S4iQGw/view?usp=sharing"
    },


    // {
    //   title: "Endless Runner Game",
    //   description: "An endless runner game inspired by Sky Roads, similar to Subway Surfers, where the player navigates through a dynamic, obstacle-filled road. ",
    //   imgUrl: skyRoad,
    //   linkText: " Learn more by playing the Game",
    //   linkUrl: "https://drive.google.com/drive/folders/1Zy66CA6FZBMfTYrPMFjAsd-6tf5tXfnS?usp=share_link"
    // },
  
  ];

  return (
   <section className="project" id="projects">
  <Container>
    <Row>
      <Col size={12}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>My Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          )}
        </TrackVisibility>
      </Col>
    </Row>
  </Container>
  <img className="background-image-right" src={colorSharp2} alt="Background" />
</section>
  );
};
