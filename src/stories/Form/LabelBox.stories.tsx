import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { LabelBox as LB, LabelBoxProps } from '../../Form/LabelBox';

export default {
  title: 'Form/LabelBox',
  component: LB,
  argTypes: {
    label: { control: 'text', defaultValue: 'Etiqueta' },
    children: { control: 'text', defaultValue: 'Contenido' },
    help: { control: 'text' },
  },
} as Meta;

export const LabelBox: Story<LabelBoxProps> = (args) => <LB {...args} />;
LabelBox.storyName = 'LabelBox';
