module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  refs: {
    '@vbobel/design-system-styles-ui': {
      title: '@vbobel/design-system-styles-ui',
      url: 'https://vbobell.github.io/design-system/styles',
    },
  },
  docs: {
    autodocs: true,
  },
};
