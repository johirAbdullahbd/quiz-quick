/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["i.postimg.cc", "ipfs.filebase.io"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude fs module on the client side
      config.externals.push("fs");
    }

    return config;
  },
};

module.exports = nextConfig;
// next.config.js
// module.exports = {
//   images: {
//     domains: ["i.postimg.cc"],
//   },
// };
// "@react-pdf-viewer/core": "^3.12.0",
//     "@react-pdf/renderer": "^3.1.15",
