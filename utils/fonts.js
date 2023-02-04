import {
    Archivo,
    Cabin,
    Days_One,
    Epilogue,
    Lora,
    Quantico,
} from "@next/font/google"

export const archivo = Archivo({
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-archivo",
})

export const cabin = Cabin({
    weight: "700",
    variable: "--font-cabin",
})

// export const daysOne = Days_One({
//     weight: "400",
//     variable: "--font-days-one",
// })

// export const epilogue = Epilogue({
//     weight: ["400", "700"],
//     variable: "--font-epilogue",
// })

export const lora = Lora({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-lora",
})

export const quantico = Quantico({
    weight: "400",
    style: "italic",
    variable: "--font-quantico",
})
