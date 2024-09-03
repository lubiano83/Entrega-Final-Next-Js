/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de las imágenes remotas permitidas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: "",
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
