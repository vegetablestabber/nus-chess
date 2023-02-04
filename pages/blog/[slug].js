import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

import { getAllPostSlugs, getPostBySlug } from "@utils/ContentfulAPI"
import Body from "@components/layout/body"
import { getFormattedDateText } from "@utils/date"
import { A, H1, H2, H3, P } from "@components/typography"
import Hero from "@components/layout/hero"
import { lora } from "@utils/fonts"
import InlineImage from "@components/ui/inline-image"

const renderOptions = (links) => {
    const assetMap = new Map()

    // loop through the linked assets and add them to a map
    for (const asset of links.assets.block) {
        assetMap.set(asset.sys.id, asset)
    }

    return {
        renderText: (text) => {
            return text.split("\n").reduce((children, textSegment, index) => {
                return [
                    ...children,
                    index > 0 && <br key={index} />,
                    textSegment,
                ]
            }, [])
        },
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
                const asset = assetMap.get(node.data.target.sys.id)

                console.log(asset.contentType)

                switch (asset.contentType) {
                    case "video/mp4":
                        return (
                            <video width="100%" height="100%" controls>
                                <source src={asset.url} type="video/mp4" />
                            </video>
                        )
                    case "image/png":
                    case "image/jpg":
                    case "image/jpeg":
                        return (
                            <InlineImage
                                src={asset.url}
                                height={asset.height}
                                width={asset.width}
                                alt={asset.description}
                            />
                        )
                    default:
                        return "Nothing to see here..."
                }
            },
            [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
            [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
            [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
            [BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
            [INLINES.HYPERLINK]: (node, children) => {
                return (
                    <A
                        className={`${lora.variable} font-serif`}
                        href={node.data.uri}>
                        {children}
                    </A>
                )
            },
        },
    }
}

const Post = ({ data }) => {
    const { title, publishedDate, heroImage, body } = data

    const formattedDateText = getFormattedDateText(new Date(publishedDate))

    const richText = documentToReactComponents(
        body.json,
        renderOptions(body.links)
    )

    return (
        <>
            <Body>
                <Hero
                    title={title}
                    subtitle={formattedDateText}
                    image={heroImage}
                />

                <section>{richText}</section>
            </Body>
        </>
    )
}

export async function getStaticPaths() {
    const blogPostSlugs = await getAllPostSlugs()
    const paths = blogPostSlugs.map((slug) => {
        return { params: { slug } }
    })

    return { paths, fallback: "blocking" }
}

export async function getStaticProps({ params }) {
    const data = await getPostBySlug(params.slug)

    if (!data) {
        return { notFound: true }
    }

    return {
        props: { data },
    }
}

export default Post
