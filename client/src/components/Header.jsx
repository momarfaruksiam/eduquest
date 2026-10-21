import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";


import { FaSearch, FaUser } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";


import navItems from '../functions/navItems'
import Search from './Search'
import { useLocation, useNavigate } from 'react-router-dom';


export default function Header({ openSearch, setOpenSearch, setSideNavigation, openSideNavigation }) {
  const [showNav, setShowNav] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = location.pathname

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
    <header
      className={`fixed top-0 left-0 z-50 bg-bg shadow w-full transition-transform duration-300
    ${showNav ? 'translate-y-0' : '-translate-y-full'}
  `}
    >
      <nav className='flex justify-between items-center p-4'>
        <div className='flex items-center gap-2 select-none'>
          <IoMdMenu onClick={() => setSideNavigation(!openSideNavigation)}
            className='text-4xl text-main bg-border/50 hover:bg-border rounded border border-border' />
          <h1 className='font-bold text-xl sm:text-2xl text-main'>EduLot</h1>
        </div>

        <div className='flex flex-row-reverse gap-2 items-center'>
          <ul className='flex items-center gap-2 text-2xl text-subtext hover:text-text'>
            <li
              onClick={() => setOpenSearch(!openSearch)}
              className='md:hidden p-2 text-subtext hover:text-text rounded'>
              {openSearch ? <RxCross2 /> : <FaSearch />}
            </li>
            {navItems.slice(0, 3).map((item, index) => {
              const activeIcon = isActive === item.link
              return (
                <li
                  key={index}
                  onClick={() => {
                    if (openSearch)
                      setOpenSearch(false)
                    navigate(item.link)
                  }}
                  className={`p-2 
                     ${index === 0 && 'hidden md:flex'}
                     ${index >= 3 && 'hidden md:flex'}
                     ${activeIcon ? 'text-main border-b-2' : 'text-subtext hover:text-text'}`}>
                  {item.icon}
                </li>
              )
            })}
            <li
              onClick={() => { navigate('/sign-in') }}
              className={`p-2 hover:bg-subtext/50 hover:text-text rounded border-2 border-border
              ${isActive === '/sign-in'
                  ? 'text-main border-main' : 'text-subtext'}`}>
              <FaUser />
            </li>
          </ul>
          <div className='hidden md:flex'>
            <Search />
          </div>
        </div>
      </nav>
      <div className={`${openSearch ? 'flex' : 'hidden'} md:hidden mx-4 mb-4`}>
        <Search />
      </div>
    </header >
  )
}
