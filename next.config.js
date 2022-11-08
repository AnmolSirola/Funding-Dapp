/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    reactStrictMode: false,
    swcMinify: true,
    exportPathMap: async function () {
        return {
            '/': {page: '/'},
            '/SignUp': {page: '/SignUp'},
            '/Login': {page: '/Login'}
        }
    }

}

// next.config.js
module.exports = {
    compiler: {
        styledComponents: true
    },
    experimental: {
        forceSwcTransforms: true
    }
}

module.exports = nextConfig
