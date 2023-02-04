import { archivo } from "@utils/fonts"
import Link from "next/link"

const NavigationMenuLink = ({ children, href }) => {
    return (
        <li>
            <Link
                href={href}
                className={`
                    ${archivo.variable} font-nav hover:underline
                    text-4xl md:text-xl text-black
                `}>
                {children}
            </Link>
        </li>
    )
}

export default NavigationMenuLink
