"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
const navLinks=[
  {
    title:"About",
    path:'#about',
  },
  {
    title:"Projects",
    path:'#projects',
  },

  {
    title:"Contact",
    path:'#contact',
  },
]

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] =useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href={'/'} className='text-2xl md:text-5xl  bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent font-semibold'>P&L</Link>
            <div className=' mobile-menu block md:hidden'>
              {!navBarOpen ? (
                  <button onClick={() =>setNavBarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                    <Bars3Icon className='h-5 w-5'/>
                    </button>
                )
                :
                <button onClick={() =>setNavBarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                    <XMarkIcon className='h-5 w-5'/>
                    </button>
              }

            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {/* <li><Link href={'#about'} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</Link></li> */}
              {
                navLinks.map((link, index) =>
                (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                  </li>
                ))
              }  
            </ul>
            </div>
        </div>
        {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar;
