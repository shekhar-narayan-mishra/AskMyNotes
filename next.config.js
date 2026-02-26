import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  output: "standalone",
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default config;
