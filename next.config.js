/** @type {import('next').NextConfig} */
const repo = "outgoings_app"; // <-- your GitHub repo name

const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
};

module.exports = nextConfig;
