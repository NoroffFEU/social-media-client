const path = require("path");

export default {
  base: "/workflow-social-ca/",
  root: path.resolve(__dirname, "./"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    host: true,
  },

  build: {
    outdir: "./dist",
  },
};
