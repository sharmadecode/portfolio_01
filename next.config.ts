import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [

    ],
    formats: ["image/avif", "image/webp"],
  },

};

import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
});

export default withMDX({
  ...nextConfig,
  pageExtensions: ["js", "ts", "tsx", "md", "mdx"],
});
