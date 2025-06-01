import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
      {/* <h1 className='text-white mb-4 font-extrabold text-4xl sm:text-5xl lg:text-6xl'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> Hello, I'm </span> Prudence 
         </h1> */}
         <h1 className='text-white mb-4 font-extrabold text-4xl sm:text-5xl lg:text-6xl '>
  <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600'>
    Hello, I'm 
  </span>
 <span className='pl-3'>Prudence,</span> 
</h1>
      <p className='text-[#ADB7DE] text-base sm:text-lg mb-6 lg:text-xl'>  a Code Whisperer with a passion for crafting innovative digital solutions that bring ideas to life. With expertise in JavaScript, React, Next.js, and Tailwind CSS, I weave code into beautiful, functional experiences that exceed expectations. Let's collaborate to create something extraordinary – where technology meets creativity and functionality meets beauty..".</p>
       {/* <div>
        <button className='px-6 py-3 w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit rounded-full mr-4  hover:bg-slate-200 text-white'>Hire Me</button>
        <button  className='px-6 py-3  w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border mt-3 border-white'>Download CV</button>
       </div>
        */}
        <div>
  <button className='px-6 py-3 w-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 sm:w-fit rounded-full mr-4 hover:bg-slate-200 text-white'>
    Hire Me
  </button>
  <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 hover:bg-slate-800 text-white border mt-3 border-white'>
    Download CV
  </button>
</div>

         </div>

         <div className='col-span-5 place-self-center mt-4 lg:mt-0 '>
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image  src="/images/profile.png"
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            alt="hero"
            width={300}
            height={300}/>
            </div>
         </div>
         </div>
         </section>
  )
}

export default HeroSection
