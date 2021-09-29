module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/life-timer/' : '/',
  outputDir: './docs',

  devServer: {
    open: true,
    overlay: false,
  },

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: {
            loader: 'worker-loader',
          },
        },
      ],
    },
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/abstract/variables.scss";
          @import "@/assets/scss/abstract/mixins.scss";
        `,
      },
    },
  },
};
