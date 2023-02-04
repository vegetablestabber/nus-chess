import PostPreview from "./post-preview"

const PostPreviews = ({ posts }) => {
    const content = posts.map(post => {
        return <PostPreview key={post.title} data={post} />
    })

    return <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-3 lg:gap-6">{content}</section>
}

export default PostPreviews