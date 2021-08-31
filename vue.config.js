module.exports = {
  devServer: {
    open: true,
    overlay: false,
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
