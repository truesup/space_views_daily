import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'apod.nasa.gov',
            },
            {
                protocol: 'https',
                hostname: '**.nasa.gov',
            },
        ],
    },
}

export default nextConfig
