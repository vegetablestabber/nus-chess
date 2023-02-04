import * as NextImage from "next/image"

const InlineImage = props => {
    return (
        <NextImage {...props} className="rounded w-full md:w-4/5 lg:w-3/4 mx-auto" />
    )
}

export default InlineImage