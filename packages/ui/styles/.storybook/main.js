const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    '@storybook/addon-viewport',
  ],
  framework: '@storybook/html',
  core: {
    builder: 'webpack5',
  },
  refs: {
    '@vbobel/design-system-react-ui': {
      title: '@vbobel/design-system-react-ui',
      url: 'https://vbobell.github.io/design-system/react',
    },
  },
};
