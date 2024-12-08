import React, { useEffect, useRef, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styling/Aboutme.scss';
import '../styling/Projects.scss';
import '../styling/Skills.scss';
import "../styling/imageSlider.scss";
import ImageSlider from './imageSlider'; // Ensure this is imported
import picture from '../assets/profilePicDos.jpg';
import linkedin from '../assets/linkedin.png';
import email from '../assets/newEmail.png';
import github from '../assets/github.png';
//import projectGif from '../assets/AquaTeenHunger - Made with Clipchamp.gif';
//import eduGif from '../assets/EduPalDemo-MadewithClipchamp-ezgif.com-crop.gif';
//import dandyCover from '../assets/dandyCoverFour.jpg';
//import aquaCover from '../assets/aquaCover.png';
//import eduCover from '../assets/eduCover.jpg';
//import ucCover from '../assets/ucCover.jpg';
import image1 from '../assets/dandy/dandyWiz.png';
import image2 from '../assets/dandy/adventurer.png';
import image3 from '../assets/dandy/pathway.png';
import image4 from '../assets/dandy/GameOver.png';
import image5 from '../assets/athm/titleATHM.png';
import image6 from '../assets/athm/Instruction.png';
import image7 from '../assets/athm/aquaHouse.png';
import image8 from '../assets/athm/Game Over.png';
import image9 from '../assets/edupal/advert.png';
import image10 from '../assets/edupal/title.png';
import image11 from '../assets/edupal/schedule.png';
import image12 from '../assets/edupal/profile.png';
import image13 from '../assets/smackdown/UCMerced_Modified.png';
import image14 from '../assets/smackdown/menu.png';
import image15 from '../assets/smackdown/controls.png';
import image16 from '../assets/smackdown/fight.png';

interface Project {
  title: string;
  description: React.ReactNode;
  //coverImageUrl: string; // Cover image for project-note background
  //gifImageUrl: string; // Gif for expanded project content
  imageUrls?: string[]; // Add this line
}

const projectData: Project[] = [
  {
    title: "DANDY",
    description: (
      <>
        A D&D-inspired text adventure featuring three thrilling encounters: <br/>
        gear up, explore a dangerous dungeon, and face a showdown <br/> 
        with a dragon! The LLM will dynamically generate the story <br/>
        and control the NPCs, while you guide the main character with <br/>
        your choices. Every decision impacts the outcome <br/>
      </>
    ),
    //coverImageUrl: dandyCover,
    //gifImageUrl: projectGif,
    imageUrls: [image1, image2, image3, image4]
  },
  { 
    title: "Aqua Team Hunger Madness", 
    description: (
      <>
       A timed-endless runner with tweens and object animations <br/>
       that present a minimal but highly visual game with simple <br/>
       mechanics and fun modern pop culture references <br/>
      </>
    ),
    //coverImageUrl: aquaCover, 
    //gifImageUrl: eduGif 
    imageUrls:[image5, image6, image7,image8]
  },
  { 
    title: "EduPal", 
    description: (
      <>
        An innovative app that helps educators create personalized <br/>
        learning for their students resulting in increased engagement <br/>
        both in class and with course content. Features a scheduling tool, <br/>
        a discussion forum and many more features to help teachers <br/>
      </>
    ),
    //coverImageUrl: dandyCover, 
    //gifImageUrl: projectGif
    imageUrls:[image9, image10, image11, image12]
  },
  { 
    title: "UC Smackdown",
    description: (
      <>
        A fast-paced, pixel-art 2D platformer fighter <br/>
        where the iconic mascots of the University of California clash in an <br/>
        epic battle to prove who reigns supreme! From the bustling streets <br/>
        of Berkeley to the sun-soaked shores of Santa Cruz, every stage is <br/>
        a dynamic representation of a UC campus, packed with hazards <br/>
        and surprises. <br/>
      </>
    ),
    //coverImageUrl: dandyCover, 
    //gifImageUrl: eduGif },
    imageUrls:[image13,image14,image15,image16]
  },
];
const skillsData = [
  {
    icon: <i className="fa-brands fa-js"></i>,
    name: 'JavaScript',
    description: 'Proficient in modern JavaScript (ES6+) for front-end and back-end development',
  },{
    icon: <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/typescript.png" alt="typescript"/>,
    name: 'TypeScript',
    description: 'Building scalable, type-safe applications with TypeScript',
  },{
    icon: <i className="fa-brands fa-python"></i>,
    name: 'Python',
    description: 'Creating efficient scripts and applications with Python',
  },{
    icon: <img src="https://img.icons8.com/ios-filled/50/000000/c-plus-plus-logo.png" alt="C++ Icon" />,
    name: 'C++',
    description: 'Skilled in Object-Oriented Programming and Data Structures using C++',
  },{
    icon: <i className="fa-brands fa-java"></i>,
    name: 'Java',
    description: 'Experienced in Java for web development and software engineering',
  },{
    icon: <img width="50" height="50" src="https://img.icons8.com/carbon-copy/100/matlab--v2.png" alt="matlab--v2"/>,
    name: 'Matlab',
    description: 'Harnessing MATLAB for computational analysis and prototyping',
  },{
    icon: <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/react.png" alt="react"/>,
    name: 'React',
    description: 'Building dynamic, responsive user interfaces with React',
  },{
    icon: <img width="50" height="20" src="https://cdn.phaser.io/images/logo/phaser-pixel-small-flat.png" alt="react"/>,
    name: 'Phaser',
    description: 'Experienced in developing interactive web games using Phaser',
  },{
    icon: <img width="50" height="50" src="https://img.icons8.com/ios/50/bootstrap.png" alt="bootstrap"/>,
    name: 'Bootstrap',
    description: "Crafting polished, professional designs using Bootstrap's CSS framework",
  },{
    icon: <img src="https://icons.iconarchive.com/icons/simpleicons-team/simple/128/vite-icon.png" width="50" height="50"></img>,
    name: 'Vite',
    description: 'Leveraging Vite for ultra-fast development and optimized builds',
  },{
    icon: <img width="48" height="48" src="https://img.icons8.com/fluency-systems-filled/48/1A1A1A/nextjs.png" alt="nextjs"/>,
    name: 'Next',
    description: 'Building full-stack web applications with Next.js API routes and serverless architecture',
  },{
    icon: <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/angularjs.png" alt="angularjs"/>,
    name: 'Angular',
    description: 'Developing efficient, scalable, and feature-rich web applications with Angular',
  },{
    icon: <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/figma--v1.png" alt="figma--v1"/>,
    name: 'Figma',
    description: 'Skilled in using Figma for creating modern, interactive UI/UX designs',
  },{
    icon: <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/adobe-illustrator.png" alt="adobe-illustrator"/>,
    name: 'Illustrator',
    description: 'Delivering vector-based design for logos, icons, and branding materials',
  },{
    icon: <img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/adobe-photoshop--v1.png" alt="adobe-photoshop--v1"/>,
    name: 'Photoshop',
    description: "Specializing in photo manipulation, enhancement, and design with Photoshop's robust tools",
  },{
    icon: <img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/blender-3d.png" alt="blender-3d"/>,
    name: 'Blender',
    description: 'Proficient in using Blender for 3D modeling, animation, and rendering',
  },{
    icon: <i className="fa-brands fa-css"></i>,
    name: 'HTML/CSS',
    description: 'Experienced in creating user-friendly interfaces using HTML5 and CSS3',
  },{
    icon: <img width="48" height="48" src="https://img.icons8.com/material-sharp/48/1A1A1A/adobe-xd.png" alt="adobe-xd"/>,
    name: 'XD',
    description: 'Creating user-centered designs with Adobe XD for responsive web and mobile apps',
  },
  // Add more skills as needed
];
const Aboutme = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]); // Add this line for skills
  // Slide-in animation observer (if still needed)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Project note ${entry.target} is now in view`);
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  
  // New useEffect for skill items
  useEffect(() => {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Add a fade-in class
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    skillRefs.current.forEach((ref) => {
      if (ref) skillObserver.observe(ref);
    });
    
    return () => {
      skillObserver.disconnect();
    };
  }, []);

  const handleProjectClick = (index: number) => {
    setActiveProject(index === activeProject ? null : index);
  };

  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveProject(null);
  };

  return (
    <div className="aboutme-root">
      <div className="content">
        <img src={picture} alt="Me" className="profile-photo" />
        
        {/* Updated Title Section for Fade-In Effect */}
        <h2 className="title">
          {"Hello".split("").map((letter, index) => (
            <span key={index} className="fade-in-letter">
              {letter}
            </span>
          ))}
        </h2>
        
        <p className="paragraph">My name is Leonardo Dulanto</p>
        <p className="subparagraph">I come from a Psychology and Computer Science background</p>
        <p className="subparagraph">specializing in UI/UX and frontend development</p>
        <div className="parent-containerTwo">
          <a href="https://www.linkedin.com/in/leonardodulanto14/">
            <img src={linkedin} alt="LinkedIn" className="icon linkedin" />
          </a>
          <a href="mailto: leonardodulanto14@gmail.com">
            <img src={email} alt="Email" className="icon email" />
          </a>
          <a href="https://github.com/LeoDulanto23">
            <img src={github} alt="GitHub" className="icon github" />
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="projects-root">
        {projectData.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`project-note ${activeProject === index ? 'active' : ''}`}
            style={{
              //backgroundImage: `url(${project.coverImageUrl})` // Set cover image as background
            }}
            onClick={() => handleProjectClick(index)}
          >
            <div className="project-note-inner">
              <h3 className="project-title">{project.title}</h3>
              <div className={`project-content ${activeProject === index ? 'visible' : ''}`}>
                <p className="project-description">{project.description}</p>
                {/* Show gif only when project is expanded */}
                
                {project.imageUrls && project.imageUrls.length > 0 && (
                  <ImageSlider images={project.imageUrls} />
                )}
              </div>
            </div>
            {activeProject === index && (
              <button className="close-button" onClick={(e) => handleClose(e)}>Close</button>
            )}
          </div>
        ))}
        
      </div>
      {/* Skills Section */}
      <div id="skills" className="skills-root">
        
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div 
            key={index} 
            className="skill-item"
            ref={(el) => (skillRefs.current[index] = el)} // Attach ref here
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="Copyright">
        © Copyright 2024 All Rights Reserved
      </footer>
    </div>
    
  );
};

export default Aboutme;
