const fs = require('fs');

// [Workaround] This logic means `"../packages/components/*/stories/*.stories.tsx"` but it's much faster.
function getStories({ pkg, dir = 'components' } = {}) {
  const dirName = `packages/${dir}`;
  const scope = pkg ? [pkg] : fs.readdirSync(dirName);

  return scope
    .map((package) => `${dirName}/${package}/stories`)
    .filter((storyDir) => fs.existsSync(storyDir))
    .map((storyDir) => `../${storyDir}/*.stories.tsx`);
}

module.exports = {
  stories: [...getStories(), ...getStories({ dir: 'pluggables' })],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@component-controls/storybook-custom-docs',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin',
  },
};
