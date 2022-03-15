module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  refs: {
    '@vbobel/design-system-styles-ui': {
      title: '@vbobel/design-system-styles-ui',
      url: 'https://vbobell.github.io/design-system/styles',
    },
  },
};
