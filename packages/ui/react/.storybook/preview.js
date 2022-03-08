import '@vbobel/design-system-styles-ui/css/design-system-styles-ui.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    current: 'dark',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
