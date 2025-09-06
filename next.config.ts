import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Redirect /apply to /admissions/apply
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "/admissions/apply",
        permanent: true, // use false if you want it temporary
      },
    ]
  },
};

export default nextConfig;
