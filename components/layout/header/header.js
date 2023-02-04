import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useBreakpoint } from "hooks/tailwind"

import NavigationMenu from "@components/navigation/navigation-menu"
import Logo from "./logo"
import MenuButton from "./menu-button"

const links = [
    { text: "Home", path: "/" },
    { text: "Blog", path: "/blog" },
    // { text: "Committees", path: "/committees" },
    // { text: "Sponsors", path: "/sponsors" },
    { text: "About", path: "/about" },
]

const Header = () => {
    // Menu visibility state
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Open the menu for screens >= md and close it otherwise
    // And close the menu when the current URL changes
    const isScreenMd = useBreakpoint("md")
    const router = useRouter()

    useEffect(() => {
        setIsMenuOpen(isScreenMd)

        const handleRouteChange = () => setIsMenuOpen(isScreenMd)
        router.events.on("routeChangeStart", handleRouteChange)

        return () => router.events.off("routeChangeStart", handleRouteChange)
    }, [isScreenMd])

    // Function to prevent body overflow
    const preventBodyOverflow = (bool) =>
        (document.body.className = bool ? "overflow-hidden" : "")

    // Prevent body overflow for screens < md when the menu is open
    useEffect(() => {
        preventBodyOverflow(isMenuOpen && !isScreenMd)
    }, [isMenuOpen])

    return (
        <header
            className={`z-50 fixed top-0 md:h-auto w-screen backdrop-blur-xl ${
                isMenuOpen
                    ? `h-screen bg-white/80`
                    : "bg-white"
            }`}>
            {/* Navigation bar */}
            <nav className="px-6 py-4 sm:px-10 sm:py-6 lg:px-16 max-w-5xl mx-auto flex flex-col gap-10 md:gap-6 lg:flex-row lg:justify-between">
                {/* Title bar */}
                <div className="flex flex-row justify-between">
                    {/* Logo */}
                    <Logo />

                    {/* Menu button */}
                    <MenuButton
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        isMenuOpen={isMenuOpen}
                    />
                </div>

                {/* Navigation menu */}
                {isMenuOpen && <NavigationMenu links={links} />}
            </nav>
        </header>
    )
}

export default Header
