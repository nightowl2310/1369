import React from 'react'
import Logo from '../assets/Logo.png';
import IconButtonWhite from './iconButtonWhite';

function Navbar() {
  return (
    <div>
      <nav className=" p-4 flex items-center justify-between px-8 py-3 rounder-lg fixed top-0 left-0 right-0 z-10">
      <div className=" min-w-[50vw] mx-auto px-6 py-3 rounded-full flex items-center justify-between gap-5 bg-zinc-900 bg-opacity-50 backdrop-blur-md shadow-lg border-slate-200 border-2 border-opacity-50">
        <div className="flex items-center gap-16">
          <img src={Logo} alt="Logo" className="h-12 w-12 mr-2" />
          
          </div>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold"></div>
          <ul className="flex space-x-4 min-w-[35vw">
            <li><a href="#" className="text-gray-300 hover:text-amber-100">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-amber-100">Pricing</a></li>
            <li><a href="#" className="text-gray-300 hover:text-amber-100">features</a></li>
            <li><a href="#" className="text-gray-300 hover:text-amber-100">Affiliates</a></li>

          </ul>
          
          <IconButtonWhite label='login'  />
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
