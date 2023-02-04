import { H1, P } from "@components/typography"
import ImageCarousel from "../ui/carousel/image-carousel"

const CommitteeInfo = ({ name, images, text }) => {
    return (
        <section>
            <H1>{name}</H1>

            <ImageCarousel
                className="justify-self-center w-full sm:w-5/6 md:w-4/5"
                images={images}
            />

            <P>{text}</P>
        </section>
    )
}

export default CommitteeInfo