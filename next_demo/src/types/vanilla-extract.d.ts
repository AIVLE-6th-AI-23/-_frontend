declare module '@vanilla-extract/next-plugin' {
    import { NextConfig } from 'next';
    export function createVanillaExtractPlugin(): (nextConfig: NextConfig) => NextConfig;
  }  