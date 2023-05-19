const fs = require('fs');
const path = require('path');
const { getLoaders, loaderByName, addBeforeLoader } = require('@craco/craco');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const { matches } = getLoaders(
        webpackConfig,
        loaderByName('babel-loader'),
      );
      addBeforeLoader(webpackConfig, loaderByName('babel-loader'), {
        ...matches[0].loader,
        include: [resolveApp('../../packages')],
      });
      return webpackConfig;
    },
  },
};
