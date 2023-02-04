import resolveConfig from "tailwindcss/resolveConfig"
import create from "@kodingdotninja/use-tailwind-breakpoint"
import tailwindConfig from "../tailwind.config"
import { useEffect } from "react"

const config = resolveConfig(tailwindConfig)
const { useBreakpoint: useBreakpointOriginal } = create(config.theme.screens)

export const useBreakpoint = (breakpoint) => {
    const isBreakpointOrLarger = useBreakpointOriginal(breakpoint)

    // Workaround for a bug with the use-tailwind-breakpoint library. See:
    // https://github.com/kodingdotninja/use-tailwind-breakpoint/issues/2#issuecomment-1030703188
    useEffect(() => {
        window.dispatchEvent(new Event("resize"))
    }, [])

    return isBreakpointOrLarger
}
