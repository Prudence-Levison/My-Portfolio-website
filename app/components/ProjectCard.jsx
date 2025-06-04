import React from 'react'

const ProjectCard = ({imgURL, title, description}) => {
  return (
    <div>
      <div  className='h-52 md:h-72'
      style={{background:`url(${imgURL})`, backgroundSize:"cover"}}>
      </div>

      <div className='text-white'>
        <h5>{title}</h5>
        <p>{description}</p> 

      </div>
    </div>
  )
}

export default ProjectCard
