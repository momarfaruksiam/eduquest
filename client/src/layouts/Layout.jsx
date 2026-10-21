import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'


import { RxCross2 } from "react-icons/rx";


import Header from '../components/Header'
import Footer from '../components/Footer'
import SideNavigation from '../components/SideNavigation'


export default function Layout() {
    const [openSideNavigation, setSideNavigation] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)


    return (
        <div
            className='flex flex-col justify-between min-h-dvh'>
            <Header
                openSearch={openSearch}
                setOpenSearch={setOpenSearch}
                openSideNavigation={openSideNavigation}
                setSideNavigation={setSideNavigation} />
            <div
                onClick={() => setSideNavigation(false)}
                className={`fixed top-0 bottom-0 bg-card overflow-hidden z-10 max-h-dvh flex flex-col justify-center
                    transition-max-w duration-150
                 ${openSideNavigation ? 'max-w-60' : 'max-w-0'}`}>
                <div className='p-2 mt-5 mb-5 flex items-center'>
                    <h1 className='font-bold text-xl sm:text-2xl text-main'>EduLot</h1>
                    <RxCross2
                        className='text-2xl ml-auto rounded text-subtext hover:text-bg hover:bg-subtext/40'
                        onClick={() => setSideNavigation(false)} />
                </div>
                <SideNavigation />
            </div>
            <div
                onClick={() => setSideNavigation(false)}
                className={`absolute bg-text opacity-20 top-0 bottom-0 left-0 z-9
                ${openSideNavigation && 'right-0'}`} />
            <div
                onClick={() => {
                    if (openSearch)
                        setOpenSearch(false)
                }}
                className='py-20'>
                <Outlet />
            </div>
            <div
                onClick={() => {
                    if (openSearch)
                        setOpenSearch(false)
                }}>
                <Footer setSideNavigation={setSideNavigation} />
            </div>
        </div>
    )
}
