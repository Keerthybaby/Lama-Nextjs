/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   // remotePatterns: [
  //   //   // {
  //   //   //   protocol: "https",
  //   //   //   hostname: "images.pexels.com",
  //   //   // },
  //   //   // {
  //   //   //   protocol: "https",
  //   //   //   hostname: "png.pngtree.com",
  //   //   // },

  //   //   // {
  //   //   //   protocol: "https",
  //   //   //   hostname: "**.natgeofe.com", // Allow any subdomain
  //   //   // },
  //   //   {
  //   //     protocol: "https",
  //   //     hostname: "**", // Allow all remote images
  //   //   },

  //   // ],
  //   // domains: [
  //   //   "images.pexels.com",
  //   //   "i.natgeofe.com",
  //   //   "png.pngtree.com",
  //   //   "www.tourism-of-india.com",
  //   //   "i.etsystatic.com",
  //   //   "dynamic-media-cdn.tripadvisor.com",
  //   // ],
    
  // },
  // images: {
  //   unoptimized: true, // ✅ Disables image optimization globally
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all hostnames
      },
      {
        protocol: 'http',
        hostname: '**', // Allows all hostnames
      },
    ],
  },
};

module.exports = nextConfig;
