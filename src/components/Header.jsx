"use client";

import React, { useState } from 'react'
import Link from "next/link";
import { links } from '@/constants/appdata';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-white shadow-lg h-16 flex justify-between items-center md:px-[10%] relative'>
      <Link href="/" className="text-blue-400 font-bold text-2xl">
        Kashmir Cabs 
      </Link>
      
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2"
        aria-label="Toggle menu"
      >
        <div className='flex flex-col gap-1'>
          <div className={`w-5 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
      </button>

      {/* Navigation Links */}
      <div className={`flex gap-5 flex-col md:flex-row absolute md:static top-16 left-0 right-0 bg-white w-full md:w-auto text-center p-4 md:p-0 shadow-lg md:shadow-none transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none md:opacity-100 md:translate-y-0'}`}>
        {links?.map((link) => (
          <div key={link.link} className="py-2 md:py-0"> 
            <Link 
              className={`${
                pathname === link.link ? "text-blue-400" : "text-gray-600 hover:text-blue-400"
              } transition-colors duration-200`} 
              href={link.link} 
              exact={link.exact}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{link.text}</span>
            </Link>
          </div>
        ))}      
      </div>
    </div>
  );
};

export default Header
