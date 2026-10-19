import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";


import { FaSearch, FaUser } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";


import navItems from '../utils/navItems'
import Search from './Search'


export default function Header({ setSideNavigation }) {
  const [openSearch, setOpenSearch] = useState(false)
  const [showNav, setShowNav] = useState(true)


  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setShowNav(false)
        // Scrolling down
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowNav(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
  }, [])


  return (
    <header className={`bg-bg shadow fixed top-0 left-0 w-full transition-transform duration-300
    ${showNav ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <nav className='flex justify-between items-center p-4'>
        <div className='flex items-center gap-2 select-none'>
          <IoMdMenu onClick={() => setSideNavigation(true)}
            className='text-4xl text-main bg-border/50 hover:bg-border rounded' />
          <h1 className='font-bold text-xl sm:text-2xl text-main'>EduLot</h1>
        </div>

        <div className='flex flex-row-reverse gap-2 items-center'>
          <ul className='flex items-center gap-2 text-xl sm:text-2xl text-subtext hover:text-text'>
            <li
              onClick={() => setOpenSearch(!openSearch)}
              className='md:hidden p-2 text-subtext hover:text-text rounded'>
              {openSearch ? <RxCross2 /> : <FaSearch />}
            </li>
            {navItems.slice(0, 3).map((item, index) => (
              <li
                key={index}
                className={`p-2 text-subtext hover:text-text rounded ${index === 0 && 'hidden md:flex'}`}>{item.icon}</li>
            ))}
            <li className='p-2 text-subtext hover:bg-subtext/50 hover:text-text rounded border border-border'><FaUser /></li>
          </ul>
          <div className='hidden md:flex'>
            <Search />
          </div>
        </div>
      </nav>
      <div className={`${openSearch ? 'flex' : 'hidden'} md:hidden mx-4 mb-4`}>
        <Search />
      </div>
    </header>
  )
}
