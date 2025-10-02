/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui-component-library"],
  experimental: {
    turbopack: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
