const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = withFonts(withCSS(withSass({
  enableSvg: true,
  distDir: 'build',
  env: {
    environment: process.env.NODE_ENV
  },
  webpack: (config, options) => {
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      }),
    );

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

    if (options.isServer) {
      const externalsFunc = config.externals[0];

      config.externals[0] = function (context, request, callback) {
        if (/(antd|rc-|css-animation|@ant-design)/.test(request)) {
          return callback();
        }

        return externalsFunc(context, request, callback);
      };
    }
    return config;
  }
})))