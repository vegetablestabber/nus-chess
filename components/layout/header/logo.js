import { Days_One } from "@next/font/google"
import Image from "next/image"
import Link from "next/link"

const daysOne = Days_One({
    weight: "400",
    subsets: ["latin"],
})

const Logo = () => {
    return (
        <Link href="/" className="flex flex-row items-center gap-6">
            <Image
                src="/images/chess-logo.png"
                width={44}
                height={44}
                className="aspect-square w-11 bg-white rounded-full"
            />
            {/* <span
                className={`hidden sm:inline ${daysOne.className} text-white text-4xl md:text-5xl font-bold`}>
                ChESS
            </span> */}
        </Link>
    )
}

export default Logo
