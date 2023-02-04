/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        fontLoaders: [
            { loader: "@next/font/google", options: { subsets: ["latin"] } },
        ],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                pathname: `/${process.env.CONTENTFUL_SPACE_ID}/**`,
            },
        ],
    },
}

module.exports = nextConfig
