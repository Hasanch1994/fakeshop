/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["picsum.photos", "api.escuelajs.co", "placeimg.com"],
  },
};

module.exports = nextConfig;
