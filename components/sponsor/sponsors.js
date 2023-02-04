const Sponsors = ({ title, items }) => {
    return (
        <>
            <h2>{title}</h2>

            <ul
                className="
                grid grid-flow-row
                gap-5
            "
            >
                {items.map((sponsor, index) => {
                    return (
                        <li key={index} className="w-full">
                            <div
                                // src={sponsor.logo_url}
                                className="
                                    mx-6
                                    h-16
                                    bg-blue-200
                                    rounded
                                "
                                // alt={`${sponsor.name} logo`}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Sponsors
