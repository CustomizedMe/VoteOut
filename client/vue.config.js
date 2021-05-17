module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000/",
        // pathRewrite: { "^/api": "/api" },
        logLevel: "debug",
        changeOrigin: true,
      },
    },
  },
}