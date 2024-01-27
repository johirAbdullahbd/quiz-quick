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
  webpack: (config, { isServer }) => {
    // If client-side, don't polyfill `fs`
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
