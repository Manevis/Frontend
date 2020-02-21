const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: '[local]___[hash:base64:5]',
  },

  webpack: config => {
    config.module.rules.forEach(rule => {
      if (rule.test && rule.test.toString().includes('.scss')) {
        rule.rules = rule.use.map(useRule => {
          if (typeof useRule === 'string') {
            return { loader: useRule };
          }

          if (useRule.loader.startsWith('css-loader')) {
            return {
              oneOf: [
                {
                  test: new RegExp('.module.scss$'),
                  loader: useRule.loader,
                  options: useRule.options
                },
                {
                  loader: useRule.loader,
                  options: {},
                },
              ],
            };
          }
          return useRule;
        });
        delete rule.use;
      }
    });
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });
    return config;
  },
});
