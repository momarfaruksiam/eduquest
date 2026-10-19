import React from 'react'
import { IoMdMenu } from "react-icons/io";


import navItems from '../utils/navItems'

export default function Header({ setSideNavigation }) {
  return (
    <header>
      <nav className='flex justify-between items-center p-4'>
        <div className='flex items-center gap-2 select-none'>
          <IoMdMenu onClick={() => setSideNavigation(true)}
            className='text-4xl text-main bg-border/50 hover:bg-border rounded' />
          <h1 className='font-bold text-xl sm:text-2xl text-main'>EduLot</h1>
        </div>

        <div>
          <ul className='flex gap-2 text-2xl text-subtext hover:text-text'>
            {navItems.slice(0,5).map((item, index) => (
              <li className='p-2 text-subtext hover:bg-subtext/50 hover:text-text rounded'>{item.icon}</li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
