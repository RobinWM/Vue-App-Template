module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  }
  // devServer: {
  //   port: 8080,
  //   host: "127.0.0.1",
  //   open: true,
  //   proxy: {
  //     "/api": {
  //       target: "localhost:5000",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": "/"
  //       }
  //     }
  //   }
  // }
};
