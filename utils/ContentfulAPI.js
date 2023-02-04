export async function callContentful(query) {
    const fetchURL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`

    const fetchOptions = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    }

    try {
        const response = await fetch(fetchURL, fetchOptions)
        const json = await response.json()

        return json
    } catch (error) {
        throw new Error("Could not fetch data from Contentful!")
    }
}

export async function getEvents() {
    const query = `
    query {
        eventCollection {
            items {
                name
                date
                description
                url
                image {
                    url
                    width
                    height
                }
            }
        }
    }      
    `

    const { data } = await callContentful(query)
    const events = data.eventCollection.items.map((item) => item)

    return events
}

export async function getPaginatedPostPreviews(page, queryLimit = 10) {
    const skipMultiplier = page === 1 ? 0 : page - 1
    const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0

    const query = `
    query {
        blogPostCollection (limit: ${queryLimit}, skip: ${skip}, order: publishedDate_DESC) {
            items {
                title
                slug
                publishedDate
                heroImage {
                    url
                    width
                    height
                }
            }
        }
    }`

    const { data } = await callContentful(query)
    const postPreviews = data.blogPostCollection.items.map((item) => {
        return {
            title: item.title,
            date: item.publishedDate,
            url: `/blog/${item.slug}`,
            heroImage: item.heroImage,
        }
    })

    return postPreviews
}

export async function getRecentPostPreviews(queryLimit = 5) {
    const postPreviews = await getPaginatedPostPreviews(1, queryLimit)
    return postPreviews
}

export async function getPaginatedSlugs(page, queryLimit = 100) {
    const skipMultiplier = page === 1 ? 0 : page - 1
    const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0

    const query = `
    query {
        blogPostCollection(limit: ${queryLimit}, skip: ${skip}, order: publishedDate_DESC) {
            total
            items {
                slug
            }
        }
    }`

    const response = await callContentful(query)

    const { total } = response.data.blogPostCollection
    const slugs = response.data.blogPostCollection.items
        ? response.data.blogPostCollection.items.map((item) => item.slug)
        : []

    return { slugs, total }
}

export async function getAllPostSlugs() {
    let page = 1
    let shouldQueryMoreSlugs = true
    const slugs = []

    while (shouldQueryMoreSlugs) {
        const response = await getPaginatedSlugs(page)

        if (response.slugs.length > 0) {
            slugs.push(...response.slugs)
        }

        shouldQueryMoreSlugs = slugs.length < response.total
        page++
    }

    return slugs
}

export async function getPostBySlug(slug) {
    const query = `
    query {
        blogPostCollection (limit: 1, where: { slug: "${slug}" }) {
            items {
                title
                publishedDate
                heroImage {
                    url
                    width
                    height
                }
                body {
                    json
                    links {
                        assets {
                            block {
                                sys {
                                    id
                                }
                                url
                                title
                                width
                                height
                                description
                                contentType
                            }
                        }
                    }
                }
            }
        }
    }`

    const { data } = await callContentful(query)
    return data.blogPostCollection.items[0]
}
