import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectData = [
  {
    id: 1,
    title: "MY-PORTFOLIO-WEBSITE",
    description: "A platform to share my projects, skills, and story with potential clients and employers.",
    images: "/projects/portfolio.jpeg",
    tag: ["All", "Web"]
  },
  {
    id: 2,
    title: "MY-PORTFOLIO-WEBSITE",
    description: "",
    images: "/projects/summaryapp.jpeg",
    tag: ["All", "Web"]
  },
  {
    id: 3,
    title: "MY-PORTFOLIO-WEBSITE",
    description: "",
    images: "/projects/notification.jpeg",
    tag: ["All", "Web"]
  },
  {
    id: 4,
    title: "MY-PORTFOLIO-WEBSITE",
    description: "",
    images: "/projects/hosted-landing-page.jpeg",
    tag: ["All", "Web"]
  },
  {
    id: 5,
    title: "MY-PORTFOLIO-WEBSITE",
    description: "",
    images:  "/projects/react-calculator.jpeg",
    tag: ["All", "Web"]
  },
  {
    id: 6,
    title: "MY-PORTFOLIO-WEBSITE",
    description: "",
    images: "/projects/youtube-clone.jpeg",
    tag: ["All", "Web"]
  }
];

const ProjectsSection = ({ imgURL, title, description }) => {
  return (
    <div>
      {ProjectData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgURL={project.images}
        />
      ))}
    </div>
  );
};

export default ProjectsSection;