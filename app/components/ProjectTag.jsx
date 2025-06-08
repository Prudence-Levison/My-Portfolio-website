import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const ButtonStyles = isSelected ? "text-white bg-green-500" : "text-[#ABD7BE] text-slate-600 hover:border-white"
  return (
    <div>
       <button 
       className={`${ButtonStyles} rounded-full border-2 border-green-500 px-6 py-3 text-xl cursor-pointer`}
       onClick={ ()=> onClick(name)}>
        {name}
        </button>
    </div>
  )
}

export default ProjectTag
