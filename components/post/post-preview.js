import { Time } from "@components/typography"
import { getFormattedDateText } from "@utils/date"
import { archivo, quantico } from "@utils/fonts"
import Image from "next/image"
import Link from "next/link"

const PostPreview = ({ className = "", data }) => {
    const { title, date, category = "", url, heroImage } = data
    const formattedDateText = getFormattedDateText(new Date(date))

    const heightClassNames = "h-64"

    return (
        <Link
            href={url}
            className={`${className} flex flex-col border border-black/10 rounded`}>

            {/* Cover image */}
            <Image
                src={heroImage.url}
                className={`${heightClassNames} object-cover rounded-t`}
                width={heroImage.width}
                height={heroImage.height}
            />

            {/* Date, Category, Title */}
            <div className="p-5 flex flex-col gap-2">
                {/* Date, Category */}
                <div className="flex flex-row justify-between">
                    {/* Date */}
                    <Time className="text-xs sm:text-sm md:text-base">{formattedDateText}</Time>

                    {/* Category */}
                    {/* <span className="px-2 py-1 rounded-full text-xs bg-gray-300 lowercase">
                        {category}
                    </span> */}
                </div>

                {/* Title */}
                <span className={`${archivo.variable} font-sans font-medium text-xl sm:text-2xl md:text-[1.75rem]`}>{title}</span>
            </div>

        </Link>
    )
}

export default PostPreview
