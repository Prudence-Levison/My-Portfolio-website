
"use client"
import React,{useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const ProjectData = [
  {
    id: 1,
    title: "MY-PORTFOLIO-WEBSITE",
    description: "A platform to share my projects, skills, and story with potential clients and employers, showing my years of dedication and hardwork",
    images: "/projects/portfolio.jpeg",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 2,
    title: "AI-Article-Summarization-App",
    description: "This web application  makes it easier for you to get the whole story without clicking the link. Isn't this so lovely?",
    images: "/projects/summaryapp.jpeg",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 3,
    title: "Notification System",
    description: " A system that sends notifications to my team at specifics intervals on the tasks they need to carry out.",
    images: "/projects/notification.jpeg",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 4,
    title: "Full Landing Page",
    description: " A simple web applications that showcases customer's product",
    images: "/projects/hosted-landing-page.jpeg",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 5,
    title: "Calculator App",
    description: " A simple calaculator app that allows you do some arithmetic without having to use a physical Calculator. You can calculate on the go- anyplace and anytime",
    images:  "/projects/react-calculator.jpeg",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 6,
    title: "Youtube",
    description: " A replication of the Youtube Web-app, tailored to fit in this modern day application",
    images: "/projects/youtube-clone.jpeg",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
    
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
    <h2 className='text-center text-4xl font-bold mt-4 text-white'>My Projects</h2>
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