import Carousel from "@components/ui/carousel"
import Event from "./event"

const Events = ({ items }) => {
    const content = items.map(item => {
        return <Event key={item.name} className="mr-6 last:mr-0" data={item} />
    })

    return <Carousel>{content}</Carousel>
}

export default Events
