
"use client"
import React,{useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const ProjectData = [
  {
    id: 1,
    title: "MY-PORTFOLIO-WEBSITE",
    description: "A platform to share my projects, skills, and story with potential clients and employers.",
    images: "/projects/portfolio.jpeg",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 2,
    title: "AI-Article-Summarization-App",
    description: " Project 2 description",
    images: "/projects/summaryapp.jpeg",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 3,
    title: "Notification System",
    description: "  Project 3 description",
    images: "/projects/notification.jpeg",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 4,
    title: "Full Landing Page",
    description: "  Project 4 description",
    images: "/projects/hosted-landing-page.jpeg",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 5,
    title: "Calculator App",
    description: " Project 5 description",
    images:  "/projects/react-calculator.jpeg",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 6,
    title: "Youtube",
    description: " Project 6 description",
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