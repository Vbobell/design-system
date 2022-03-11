import { createText } from './Text';

export default {
  title: 'Example/Text',
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = ({ text, ...args }) => {
  return createText({ text, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Text',
};
