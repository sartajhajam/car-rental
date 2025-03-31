"use client";

import React from 'react'
import Link from "next/link";
import { links } from '@/constants/appdata';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className='bg-white shadow-lg h-16 flex justify-between items-center px-[10%]'>
      <Link href="/" className="text-blue-400 font-bold text-2xl">
        Kashmir Cabs 
      </Link>
      <div className="flex gap-5">
        {links?.map((link) => (
          <div key={link.link}> 
            <Link 
              className={`${
                pathname === link.link ? "text-blue-200" : "text-gray-400"
              }`} 
              href={link.link} 
              exact={link.exact}
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
