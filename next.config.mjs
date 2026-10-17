/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Every page is written as <path>/index.html, which GitHub Pages serves at
  // /<path>/ without a <path>.html beside a <path>/ folder of navigation data.
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // No image server on a static host; the screenshots are already small PNGs.
    unoptimized: true
  }
}

export default nextConfig
