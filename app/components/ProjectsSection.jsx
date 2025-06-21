
"use client"
import React,{useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const ProjectData = [
  {
    id: 1,
    title: "MY-PORTFOLIO-WEBSITE",
    description: 'Each project here tells a part of my story — showing how far I’ve come, what I’ve learned, and where I’m headed.',
    images: "/projects/portfolio.jpeg",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Prudence-Levison/My-Portfolio-website.git",
    previewUrl:"/"
  },
  {
    id: 2,
    title: "AI-Article-Summarization-App",
    description: "This app helps you get the whole gist of any article without opening the link — clean, quick, and super helpful",
    images: "/projects/summaryapp.jpeg",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Prudence-Levison/Open-AI-article-summarization.git",
    previewUrl:"https://openaiapplication.netlify.app/"
  },
  {
    id: 3,
    title: "Notification System",
    description: " A system that sends notifications to my team at specifics intervals on the tasks they need to carry out.",
    images: "/projects/notification.jpeg",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Prudence-Levison/Notification-System.git",
    previewUrl:"/"
  },
  {
    id: 4,
    title: "Full Landing Page",
    description: " A clean landing page that puts your product front and center. It was built to impress at first glance",
    images: "/projects/landingpage.jpeg",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Prudence-Levison/Landing-Page.git",
    previewUrl:"https://prudyslandingpage.netlify.app/"
  },
  {
    id: 5,
    title: "Calculator App",
    description: " A handy calculator app that lets you do quick math anywhere. Now, you don't need a physical calculator. ",
    images:  "/projects/react-calculator.jpeg",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Prudence-Levison/Calclator-App.git",
    previewUrl:"https://prudys-calculator-app.netlify.app/"
  },
  {
    id: 6,
    title: "Youtube",
    description: "A full replica of the YouTube web app, rebuilt to mirror its layout, features, and user experience",
    images: "/projects/youtube-clone.jpeg",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Prudence-Levison/Youtube-Clone.git",
    previewUrl:"https://youtube-clone-by-pruddy.netlify.app/"
    
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = ProjectData.filter((project) => project.tag.includes(tag))

  return (
    <>
    <h2 className='text-center text-4xl font-bold mt-4 text-white' id="projects">My Projects</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
     <ProjectTag onClick={handleTagChange} name="All" isSelected={tag ==="All"}/>
     <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag ==="Web"}/>
     <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag  ==="Mobile"}/>
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgURL={project.images}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
        />
      ))}
    </div>
    </>
  );
};

export default ProjectsSection;