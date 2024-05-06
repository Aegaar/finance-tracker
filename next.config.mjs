/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },

  //   headers: async () => {
  //     return [
  //       {
  //         source: "/api/income",
  //         headers: [
  //           {
  //             key: "Access-Control-Allow-Origin",
  //             value: process.env.NEXT_PUBLIC_APP_URL,
  //           },
  //         ],
  //       },
  //     ];
  //   },
};

export default nextConfig;
