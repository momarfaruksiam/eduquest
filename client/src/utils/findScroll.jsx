let lastScrollY = 0

export function handleScroll(setShowNav) {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY) {
        setShowNav(true)
    } else if (currentScrollY < lastScrollY) {
        setShowNav(false)
    }

    lastScrollY = currentScrollY
}