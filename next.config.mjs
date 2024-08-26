/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.s3.amazonaws.com", 'images.unsplash.com'],
  },
  typescript:{
    ignoreBuildErrors: true,
  }

};

export default nextConfig;
