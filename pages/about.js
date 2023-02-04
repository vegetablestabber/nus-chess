import Body from "@components/layout/body"
import Timeline from "@components/pages/about/timeline/timeline"
import Committee from "@components/committee/committee"
import Subcommittees from "@components/committee/subcommittees"
import { A, H1, H2, P } from "@components/typography"

const AboutPage = () => {
    const events = [
        {
            year: 1992,
            description:
                "The Chemical and Environmental Engineering Students’ Society (ChESS) was formed to serve the Chemical and Environmental Engineering student bodies.",
        },
        {
            year: 2004,
            description:
                "The two engineering fields formed their respective departments, and ChESS has served the Chemical Engineering student body ever since.\nNow, ChESS stands for the Chemical Engineering Students’ Society.",
        },
    ]

    const execCommMembers = [
        {
            name: "Name",
            position: "President",
            photo_url: "#",
        },
        {
            name: "Name",
            position: "Vice-President (Internal)",
            photo_url: "#",
        },
        {
            name: "Name",
            position: "Vice-President (External)",
            photo_url: "#",
        },
        {
            name: "Name",
            position: "Secretary",
            photo_url: "#",
        },
    ]

    const subcommitteeData = [
        {
            name: "Publicity",
            members: [
                {
                    name: "Name",
                    position: "Project Director",
                    photo_url: "#",
                },
                {
                    name: "Name",
                    position: "Vice Project Director",
                    photo_url: "#",
                },
                {
                    name: "Name",
                    position: "Vice Project Director",
                    photo_url: "#",
                },
            ],
        },
        {
            name: "Welfare",
            members: [
                {
                    name: "Name",
                    position: "Project Director",
                    photo_url: "#",
                },
                {
                    name: "Name",
                    position: "Vice Project Director",
                    photo_url: "#",
                },
                {
                    name: "Name",
                    position: "Vice Project Director",
                    photo_url: "#",
                },
            ],
        },
    ]

    return (
        <Body>
            <section>
                <H1>About Us</H1>

                <P>
                    The NUS Chemical Engineering Students’ Society (ChESS) is a
                    Registered Society within NUS made up of passionate Chemical
                    Engineering undergraduates.
                </P>

                <P>
                    The society aims to be the bridge between our current
                    undergraduates and the Department of Chemical & Biomolecular
                    Engineering, as well as to the relevant industries.
                </P>

                <P>
                    Through collaboration with industries, the community and
                    through organizing of events, ChESS also aims to enhance the
                    vibrancy of student life in NUS and provide its members with
                    a holistic university experience.
                </P>

                <P>
                    Read more about our committees <A href="/committees">here</A>.
                </P>
            </section>

            <section>
                <H1>History</H1>

                <Timeline
                    events={events}
                    className="max-w-sm md:max-w-md justify-self-center"
                />
            </section>

            <section>
                <H1>People</H1>

                <H2>Executive Committee</H2>

                <Committee
                    members={execCommMembers}
                    className="w-full sm:max-w-xl justify-self-center"
                />

                <H2>Sub-committees</H2>

                <Subcommittees subcomms={subcommitteeData} />
            </section>
        </Body>
    )
}

export default AboutPage
