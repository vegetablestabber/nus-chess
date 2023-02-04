import { A } from "@components/typography"

const Contents = () => {
    return (
        <>
            <section className="justify-items-start">
                <h1>Contents</h1>

                <ol className="list-inside list-decimal">
                    <li><A href="#">Item 1</A></li>
                    <li><A href="#">Item 2</A></li>
                    <li><A href="#">Item 3</A>
                        <ol className="
                            ml-4 
                            list-inside list-[lower-latin]
                        ">
                            <li><A href="#">Item 1</A></li>
                            <li><A href="#">Item 2</A></li>
                        </ol>
                    </li>
                </ol>
            </section>

            <hr />
        </>
    )
}

export default Contents