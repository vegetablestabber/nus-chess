import Link from "next/link"

const { archivo, lora, quantico } = require("@utils/fonts")

export const H1 = (props) => (
    <h1
        {...props}
        className={`${archivo.variable} font-sans font-bold text-2xl sm:text-3xl md:text-4xl`}></h1>
)

export const H2 = (props) => (
    <h2
        {...props}
        className={`${archivo.variable} font-sans text-xl md:text-2xl`}></h2>
)

export const H3 = (props) => (
    <h3
        {...props}
        className={`${archivo.variable} font-sans font-bold uppercase text-lg md:text-xl`}></h3>
)

export const P = (props) => (
    <p
        {...props}
        className={`${props.className ?? ""} ${
            lora.variable
        } font-serif text-base sm:text-lg md:text-xl md:leading-8 text-justify`}></p>
)

export const A = (props) => (
    <Link
        {...props}
        className={`${props.className ?? ""} ${
            archivo.variable
        } font-sans text-base sm:text-lg md:text-xl leading-none font-semibold text-blue-500 hover:text-blue-700`}></Link>
)

export const Time = (props) => (
    <time
        {...props}
        className={`${props.className ?? ""} ${
            quantico.variable
        } font-datetime italic`}></time>
)
