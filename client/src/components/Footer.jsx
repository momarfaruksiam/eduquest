import React, { useEffect, useState } from 'react'

export default function Footer() {
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
        <div className={`md:hidden bg-red-400 shadow p-4 fixed bottom-0 left-0 w-full transition-transform duration-300
    ${showNav ? 'translate-y-0' : 'translate-y-full'}`}>Footer</div>
    )
}
