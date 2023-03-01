/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoicmV6YWFuNiIsImEiOiJjbGVvY3BpMDQwMTNzM3JxdTQ4d3JidXAxIn0.SkbdspkAciXWFNdq0SUGyA",
  },
};

module.exports = nextConfig;
