const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const webpack = require('webpack');

module.exports = withCSS(withSass({
  webpack: (config, options) => {
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      }),
    );

    if (options.isServer) {
      const externalsFunc = config.externals[0];

      config.externals[0] = function(context, request, callback) {
        if (/(antd|rc-|css-animation|@ant-design)/.test(request)) {
          return callback();
        }

        return externalsFunc(context, request, callback);
      };
    }
    return config;
  }
}))