const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui-component-library"],
  experimental: { turbopack: true },
};

module.exports = withBundleAnalyzer(nextConfig);
