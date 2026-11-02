import type {NextConfig} from "next";
const isDevelopment=process.env.NODE_ENV==="development";
const nextConfig:NextConfig={distDir:isDevelopment?".next-dev":".next",images:{formats:["image/avif","image/webp"]},experimental:{cpus:1}};
export default nextConfig;
