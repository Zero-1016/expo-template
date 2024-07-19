import type { Meta, StoryObj } from '@storybook/react';

import { CustomText } from './CustomText';

const CustomTextMeta: Meta<typeof CustomText> = {
  title: 'CustomText',
  component: CustomText,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    children: 'Hello world',
  },
};

export default CustomTextMeta;

export const Basic: StoryObj<typeof CustomText> = {};

export const AnotherExample: StoryObj<typeof CustomText> = {
  args: {
    children: 'Another example',
  },
};
