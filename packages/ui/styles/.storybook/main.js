const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    '@storybook/addon-viewport',
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  refs: {
    '@vbobel/design-system-react-ui': {
      title: '@vbobel/design-system-react-ui',
      url: 'https://vbobell.github.io/design-system/react',
    },
  },
  docs: {
    autodocs: true,
  },
};
