import Body from "@components/layout/body"
import PostPreviews from "@components/post/post-previews"
import { H1, P } from "@components/typography"
import { getRecentPostPreviews } from "@utils/ContentfulAPI"

const AllPostsPage = ({ postPreviews }) => {
    return (
        <Body>
            <section>
                <H1>Blog</H1>

                <P>Check out articles written by our Publicity committee.</P>
            </section>

            <PostPreviews posts={postPreviews} />
        </Body>
    )
}

export async function getStaticProps() {
    const postPreviews = await getRecentPostPreviews()

    return {
        props: { postPreviews }
    }
}

export default AllPostsPage