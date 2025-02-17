import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ai23.blob.core.windows.net",
        pathname: "/blob/**",
      }
    ]
  },
  output: 'standalone'
};

export default withVanillaExtract(nextConfig);
