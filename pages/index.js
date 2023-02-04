import Body from "@components/layout/body"
import HeroCarousel from "@components/pages/home/hero-carousel"
import { A, H1, P } from "@components/typography"
import InlineImage from "@components/ui/inline-image"
import Events from "@components/pages/home/event/events"
import RecentPostPreviews from "@components/pages/home/recent-post-previews"
import { getEvents, getRecentPostPreviews } from "@utils/ContentfulAPI"

const HomePage = ({ className, events, recentPostPreviews }) => {
    return (
        <Body {...className}>
            <HeroCarousel />

            <section>
                <H1>Who are we?</H1>

                <InlineImage
                    src="/images/old-comm.png"
                    width={500}
                    height={300}
                />

                <P>
                    The NUS Chemical Engineering Students’ Society (ChESS) is a
                    Registered Society within NUS made up of passionate Chemical
                    Engineering undergraduates.
                </P>

                <P>
                    The society aims to be the bridge between our current
                    undergraduates and the Department of Chemical & Biomolecular
                    Engineering, as well as to the relevant industries.
                </P>

                <A href="/about">Read more</A>
            </section>

            <section>
                <H1>Featured events</H1>

                <Events items={events} />
            </section>

            <section>
                <div className="flex justify-between items-center">
                    <H1>Recently posted</H1>
                    <A href="/blog">View more</A>
                </div>

                <RecentPostPreviews items={recentPostPreviews} />
            </section>
        </Body>
    )
}

export async function getStaticProps() {
    const events = await getEvents()
    const recentPostPreviews = await getRecentPostPreviews()

    return {
        props: { events, recentPostPreviews },
    }
}

export default HomePage
