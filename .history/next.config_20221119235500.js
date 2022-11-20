/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "https://links.papareact.com/2io",
      "https://links.papareact.com/snf",
      "https://links.papareact.com/6ff",
      "links.papareact.com",
      "jsonkeeper.com",
    ],
  },
}
