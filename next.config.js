// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
const { env } = require("./server/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
