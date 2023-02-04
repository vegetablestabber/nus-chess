import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const MenuButton = ({ onClick, isMenuOpen }) => {
    return (
        <button className="md:hidden" onClick={onClick}>
            {/* Hamburger icon */}
            {!isMenuOpen && <Bars3Icon className="aspect-square w-8" />}

            {/* Close icon */}
            {isMenuOpen && <XMarkIcon className="aspect-square w-8" />}
        </button>
    )
}

export default MenuButton
