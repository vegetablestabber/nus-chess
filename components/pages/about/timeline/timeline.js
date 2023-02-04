import { Fragment } from "react"
import TimelineEvent from "./timeline-event"

const Timeline = ({ className, events }) => {
    return (
        <div
            className={`${className ?? ""}
            grid grid-flow-row
            gap-3
            justify-items-center`}
        >
            {events.map((event, index) => {
                const isLatestEvent = index + 1 === events.length

                return (
                    <Fragment key={event.year}>
                        <TimelineEvent
                            year={event.year}
                            description={event.description}
                        />

                        {!isLatestEvent && (
                            <div
                                className="
                                    bg-gray-300
                                    w-px h-12
                                    rounded"
                            ></div>
                        )}
                    </Fragment>
                )
            })}
        </div>
    )
}

export default Timeline
