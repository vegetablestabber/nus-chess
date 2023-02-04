import { H1 } from "@components/typography"
import Dots from "@components/ui/dots"
import { quantico } from "@utils/fonts"
import Image from "next/image"
import { use, useEffect, useRef } from "react"

const Hero = ({ image, title, subtitle }) => {
    const ref = useRef(null)
    
    useEffect(() => {
        console.log(ref.current.style)
    }, [])

    return (
        <>
            <div className="p-5 relative w-full h-[327px] md:h-[400px] flex items-center justify-center">
                <div className="z-10 absolute w-full h-full bg-black/60 rounded"></div>

                {image && (
                    <Image
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        className="absolute w-full h-full object-cover rounded"
                    />
                )}

                <div className="z-20 text-center flex flex-col gap-2 text-white">
                    <span
                        className={` ${quantico.variable} font-hero-subtitle drop-shadow-xl`} ref={ref}>
                        {subtitle}
                    </span>
                    <H1 className="text-4xl drop-shadow-xl">{title}</H1>
                </div>
            </div>

            <Dots />
        </>
    )
}

export default Hero
