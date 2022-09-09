/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@game-shop-ui/resources",
  "@game-shop-ui/search",
  "@game-shop-ui/session",
  "@game-shop-ui/components",
])
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = nextConfig;

module.exports = withTM()
