import Member from "./member"

const Committee = ({ className = "", children, members }) => {
    const membersContent = members.map(member => {
        return (
            <Member
                key={member.name}
                name={member.name}
                position={member.position}
            />
        )
    })

    return (
        <div className={`${className} grid grid-flow-row gap-2`}>
            {children}

            <div className="grid grid-flow-row gap-6">
                <div
                    className="aspect-video rounded bg-gray-300"
                    // alt={`Group shot of ${props.members(m => m.name).join(", ")}`}
                />

                <div className="grid grid-cols-2 gap-10 sm:px-8 md:px-6">
                    {membersContent}
                </div>
            </div>
        </div>
    )
}

export default Committee
