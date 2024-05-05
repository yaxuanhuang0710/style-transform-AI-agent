/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

//new way of setting http
const nextConfig = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "default-src 'self' http://3.80.75.241:8000",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;