import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hatefilterai.blob.core.windows.net",
        pathname: "/blob1/**",
      }
    ]
  },
  reactStrictMode: true
};

export default withVanillaExtract(nextConfig);
