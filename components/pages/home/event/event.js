import Image from "next/image"
import Link from "next/link"

import { archivo } from "@utils/fonts"
import { getFormattedDateText } from "@utils/date"
import { P, Time } from "@components/typography"

const Event = ({ className, data, actionText = "Register" }) => {
    const { name, date, description, url, image } = data
    const formattedDateText = getFormattedDateText(new Date(date))

    const widthClassNames = "w-64 sm:w-72 md:w-80"
    const heightClassNames = "h-64"

    return (
        <div
            className={`${className} flex flex-col ${widthClassNames} border border-black/10 rounded`}>
            <div className={`relative ${heightClassNames} rounded-t`}>
                <div className="absolute z-10 contrast-bg w-full h-full"></div>

                {/* Image */}
                <Image
                    src={image.url}
                    className={`absolute ${heightClassNames} object-cover rounded-t`}
                    width={image.width}
                    height={image.height}
                />

                <div className="absolute z-20 left-0 bottom-0 p-5 flex flex-col gap-1.5">
                    {/* Date */}
                    <Time className="font-light text-white drop-shadow-xl text-xs sm:text-sm md:text-base">
                        {formattedDateText}
                    </Time>

                    {/* Name */}
                    <span className={`${archivo.variable} font-sans font-medium text-white drop-shadow-2xl text-xl sm:text-2xl md:text-[1.75rem]`}>
                        {name}
                    </span>
                </div>
            </div>

            {/* Description */}
            <P className="md:text-lg p-5 md:p-6">{description}</P>

            {/* Action */}
            <button
                className={`${archivo.variable} font-sans text-base sm:text-lg p-2.5 bg-blue-500 text-white font-bold rounded-b`}>
                <Link href={url}>{actionText}</Link>
            </button>
        </div>
    )
}

export default Event
