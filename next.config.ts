/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dgalywyr863hv.cloudfront.net',
        pathname: '/pictures/athletes/**'
      }
    ]
  }
}

module.exports = nextConfig
