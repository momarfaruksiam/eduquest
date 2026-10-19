import React, { useEffect, useState } from 'react'
import navItems from '../functions/navItems'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Footer() {
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
        <div className={`md:hidden bg-bg shadow-[0_-4px_10px_rgba(0,0,0,0.15)] p-2 md:p-4 fixed bottom-0 left-0 w-full transition-transform duration-300
    ${showNav ? 'translate-y-0' : 'translate-y-full'}`}>
            <ul className='flex justify-evenly items-center gap-2 text-2xl text-subtext hover:text-text'>
                {navItems.slice(0, 8).map((item, index) => {
                    if (index === 1 || index === 2) return null
                    return (
                        <li
                            key={index}
                            onClick={() => navigate(item.link)}
                            className={`p-2
                               ${isActive === item.link
                                    ? 'text-main border-b-2 border-main' : 'text-subtext hover:text-text'}
                                     `}
                        >
                            {item.icon}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
