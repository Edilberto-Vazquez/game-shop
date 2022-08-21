/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@game-shop/resources",
  "@game-shop/search",
]);
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = nextConfig;

module.exports = withTM();
