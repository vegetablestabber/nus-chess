import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import Carousel from "@components/ui/carousel"

const HeroCarousel = () => {
    // Fang Peng's idea: Implement arrows to navigate through the carousel

    const imageURLs = [
        "/images/hero/1.webp",
        "/images/hero/2.webp",
        "/images/hero/3.webp",
        "/images/hero/4.webp",
        "/images/hero/5.webp",
        "/images/hero/6.webp",
    ]

    const content = imageURLs.map((url) => (
        <Image
            key={url}
            src={url}
            width={896}
            height={400}
            className="w-full h-[327px] md:h-[400px] object-cover rounded mr-6 last:mr-0"
        />
    ))

    const options = {
        loop: false,
    }

    const autoplay = Autoplay({
        delay: 3500,
        stopOnInteraction: false,
    })

    return (
        <Carousel className="rounded" options={options} plugins={[ autoplay ]}>
            {content}
        </Carousel>
    )
}

export default HeroCarousel
