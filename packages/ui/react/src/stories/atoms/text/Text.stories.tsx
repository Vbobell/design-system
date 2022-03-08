import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '../../../components/atoms';

export default {
  title: 'Example/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary',
};
