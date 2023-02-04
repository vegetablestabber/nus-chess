import Carousel from "../../ui/carousel"
import PostPreview from "../../post/post-preview"

const RecentPostPreviews = ({ items }) => {
    const content = items.map(item => {
        return <PostPreview key={item.title} className="w-64 sm:w-72 md:w-80 mr-6 last:mr-0" data={item} />
    })

    return <Carousel>{content}</Carousel>
}

export default RecentPostPreviews
