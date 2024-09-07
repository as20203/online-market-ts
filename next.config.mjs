/** @type {import('next').NextConfig} */
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./build", // Changes the build output directory to `./dist`.,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
