
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
      <div className='flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 mb-6 md:mb-16 animate-in fade-in duration-1000'>
        <h1 className='text-white mb-4 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600'>Hello, I'm</span>
          <span className='pl-3'>Prudence,</span>
        </h1>
        <h2 className='text-[#ADB7DE] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 animate-pulse duration-5000'>
  A Software Developer & Tech Guru
</h2>
        <p className='text-[#ADB7DE] text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed'>
          a Code Whisperer with a passion for crafting innovative digital solutions that bring ideas to life. With expertise in JavaScript, React, Next.js, and Tailwind CSS, I weave code into beautiful, functional experiences that exceed expectations. Let's collaborate to create something extraordinary – where technology meets creativity and functionality meets beauty, and beyond, into a realm of endless possibilities.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4 mt-3  md:mt-6'>
          <button className='px-6 py-3 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-full hover:-translate-y-1 transition duration-300 text-white'>
    Hire Me
  </button>
  <button className='px-6 py-3 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-full hover:-translate-y-1 transition duration-300 text-white border border-white'>
    Download CV
  </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;