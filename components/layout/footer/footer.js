import Dots from "@components/ui/dots"
import SocialButton from "./social-button"

const Footer = () => {
    const links = [
        "https://www.instagram.com/nuschemenginss",
        "https://www.linkedin.com/company/nus-chemical-engineering-student-s-society-chess/",
        "mailto:e0959110@u.nus.edu"
    ]

    const content = links.map(link => <SocialButton key={link} url={link} />)

    return (<>
        {/* <hr className="w-4/5 m:w-3/4 lg:w-2/3 mx-auto" /> */}

        {/* <Dots /> */}

        <footer className="flex justify-center gap-5">
            {content}
        </footer>
    </>)
}

export default Footer
