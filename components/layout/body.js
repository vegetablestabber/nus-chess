import { archivo } from "@utils/fonts"
import Contents from "./contents"
import Footer from "./footer/footer"

const Body = ({ className = "", children, showContents }) => {
    return (
        // md:rounded lg:rounded-lg xl:rounded-xl
        // shadow-2xl
        // border

        <main
            className={`${className} flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16`}>
            {showContents && <Contents />}

            {children}
        </main>
    )
}

export default Body
