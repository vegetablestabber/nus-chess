import React from "react"
import useEmblaCarousel from "embla-carousel-react"

const defaultOptions = {
    align: "start",
    containScroll: "trimSnaps",
}

useEmblaCarousel.globalOptions = defaultOptions

const Carousel = ({ className = "", options = {}, plugins = [], children }) => {
    const [emblaRef] = useEmblaCarousel(options, plugins)

    const content = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            className: `${child.props.className} min-w-0 shrink-0 grow-0`,
        })
    })

    return (
        <div className={`${className} overflow-hidden`} ref={emblaRef}>
            <div className="flex">{content}</div>
        </div>
    )
}

export default Carousel
