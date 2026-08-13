// When deploying to GitHub Pages the site is served from
// https://<user>.github.io/Royce-DTAC/, so it needs a basePath. Locally and on
// hosts that serve from the root (e.g. Vercel) we leave basePath empty. The
// Pages workflow sets PAGES=true.
const isPages = process.env.PAGES === "true";
const repo = "Royce-DTAC";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site into ./out — no server required.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isPages ? `/${repo}` : undefined,
  assetPrefix: isPages ? `/${repo}/` : undefined,
};

export default nextConfig;
