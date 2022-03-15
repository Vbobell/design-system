module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  refs: {
    '@vbobel/design-system-styles-ui': {
      title: '@vbobel/design-system-styles-ui',
      url: 'https://vbobell.github.io/design-system',
    },
  },
};
