import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* 상위 디렉터리의 lockfile 때문에 워크스페이스 루트가 잘못 잡히는 것을 방지 */
  turbopack: { root: __dirname },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
