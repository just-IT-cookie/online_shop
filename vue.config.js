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
};
