import { createPage } from './Page';

export default {
  title: 'Example/Page',
};

const Template = () => {
  return createPage();
};

export const Page = Template.bind({});
Page.args = {};
