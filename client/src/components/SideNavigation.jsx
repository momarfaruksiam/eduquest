
import React from 'react'

import { Link, useLocation } from 'react-router-dom'


import navItems from '../utils/navItems'

export default function SideNavigation() {
    const location = useLocation()


    return (
        <ul className='overflow-y-auto'>
            {navItems.map((item) => {
                const isActive = location.pathname === item.link

                return (
                    <li key={item.link}>
                        <Link
                            to={item.link}
                            title={item.title}
                            className={`flex items-center gap-4 font-semibold text-lg text-subtext py-4 px-6 hover:bg-subtext/10
                                ${isActive ? 'bg-border' : ''}
                                ${item.link === '/sign-in' || item.link === '/sign-out' ? 'mt-20 border-t-2 border-border flex-row-reverse justify-center' : ''}
                            `}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className="overflow-hidden transition-all duration-300">
                                {item.title}
                            </span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
