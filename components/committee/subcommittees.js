import { H3 } from "@components/typography"
import Committee from "./committee"

const Subcommittees = ({ subcomms }) => {
    const content = subcomms.map((subcomm) => {
        return (
            <Committee key={subcomm.name} members={subcomm.members}>
                <H3>{subcomm.name}</H3>
            </Committee>
        )
    })

    return (
        <div className="grid grid-flow-row md:grid-cols-2 gap-y-6 md:gap-x-8">
            {content}
        </div>
    )
}

export default Subcommittees
