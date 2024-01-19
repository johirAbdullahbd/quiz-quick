/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["i.postimg.cc", "ipfs.filebase.io"],
  },
};

module.exports = nextConfig;
// next.config.js
// module.exports = {
//   images: {
//     domains: ["i.postimg.cc"],
//   },
// };
