module.exports = {
  publicPath: "/Online_Shop/",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
      },
    },
  },
  pwa: {
    themeColor: "#ff4000",
    iconPaths: {
      favicon32: "/favicon.svg",
      favicon16: "/favicon.svg",
      appleTouchIcon: "/favicon.svg",
      maskIcon: "/favicon.svg",
      msTileImage: "/favicon.svg",
    },
  },
};
