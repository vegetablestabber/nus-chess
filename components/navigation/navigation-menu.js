import NavigationMenuLink from "./navigation-menu-link"

const NavigationMenu = ({ links }) => {
    const content = links.map(link => {
        return (
            <NavigationMenuLink key={link.path} href={link.path}>
                {link.text}
            </NavigationMenuLink>
        )
    })

    return <ul className="flex flex-col gap-10 md:flex-row md:items-center">{content}</ul>
}

export default NavigationMenu
