import React from 'react'

const ProjectCard = ({ imgURL, title, description }) => {
  return (
    <div>
      <div
        className='h-52 md:h-72 rounded-t-xl'
        style={{
          backgroundImage: `url(${imgURL})`,
          backgroundSize: "cover",
          
        }}
      >
      </div>
      <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard