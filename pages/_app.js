import Header from "@components/layout/header/header"
import Footer from "@components/layout/footer/footer"

import "../styles/globals.scss"
import "../styles/index.scss"
import "../styles/carousel.scss"

export default function App({ Component, pageProps }) {
    return (
        <>
            <Header />

            <div className="p-6 pb-16 sm:p-10 lg:p-16 max-w-5xl mx-auto mt-[76px] md:mt-[144px] lg:mt-[92px] flex flex-col gap-20">
                <Component {...pageProps} />

                <Footer />
            </div>
        </>
    )
}
