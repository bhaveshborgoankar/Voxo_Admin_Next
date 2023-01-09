/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: 'http://localhost:3000',
    IS_PROD: 'http://localhost:4000'
  },
}

module.exports = nextConfig
