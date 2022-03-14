module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/html',
  refs: {
    '@vbobel/design-system-react-ui': {
      title: '@vbobel/design-system-react-ui',
      url: 'https://vbobell.github.io/design-system/react',
    },
    '@vbobel/design-system-styles-ui': {
      title: '@vbobel/design-system-styles-ui',
      url: 'https://vbobell.github.io/design-system/styles',
    },
  },
};
