import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        loader: "custom",
        loaderFile: "./image-loader.ts",
    },
    output: "standalone",
};

export default nextConfig;
