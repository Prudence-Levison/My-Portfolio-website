"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA =[
  {
    title: "Skills",
    id: "Skills",
    content :(
      <ul className='list-disc pl-2'>
        <li>Nodejs</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Nextjs</li>
        <li>TailwindCSS</li>
      </ul>
    )
  },
   {
    title: "Education",
    id: "Education",
    content :(
      <ul className='list-disc pl-2'>
        <li>FemCode</li>
        <li>Federal University of Technology, Owerri</li>
        <li>Babcock University</li>
      </ul>
    )
  },

  {
    title: "Certification",
    id: "Certification",
    content :(
      <ul className='list-disc pl-2'>
        <li>FemCode</li>
        <li>Federal University of Technology, Owerri</li>
        <li>Babcock University</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleToChange = (id) =>  {
    startTransition(() => {
      setTab(id);
    });
  }
  return (
    <section className='text-white' id="about">
     <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16 sm:py-16'>
      <Image src='/images/about-image.png' width={500} height={500} alt='About Us'/>
      <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
        <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
        <p className='text-base lg:text-lg'>"Meet Prudence Levison, a front-end wizard weaving magic with JavaScript, React, Next.js, and Tailwind CSS.
           With a keen eye for design and a passion for performance, I craft web experiences that are both visually stunning and lightning-fast. Dive into my portfolio to discover innovative solutions, clever code, and a dash of creativity."
</p>

<div className='flex flex-row justify-start mt-8'>
  <TabButton 
  selectTab={() => handleToChange ("Skills")} active={tab === "Skills"} >
     Skills 
     </TabButton>
   <TabButton 
  selectTab={() => handleToChange ("Education")} active={tab === "Education"} >
     Education
     </TabButton>
  <TabButton 
  selectTab={() => handleToChange ("Certification")} active={tab === "Certification"} >
     Certification
     </TabButton>
</div>
<div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>

     </div>
    </section>
      
    
  )
}

export default AboutSection
