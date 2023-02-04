import { P } from "@components/typography"
import { cabin } from "@utils/fonts"

const TimelineEvent = ({ year, description }) => {
    return (
        <div
            className="bg-blue-500 p-5 md:p-7 rounded grid grid-flow-row gap-3">
            <h2
                className={`${cabin.variable} font-timeline-year font-bold text-white text-3xl md:text-4xl lg:text-5xl`}>
                {year}
            </h2>

            <P className="text-white">{description}</P>
        </div>
    )
}

export default TimelineEvent
