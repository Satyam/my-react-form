import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { LabelBox, LabelBoxProps } from '../Form/LabelBox';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Example/LabelBox',
  component: LabelBox,
  argTypes: {
    label: { control: 'text' },
    children: { control: 'text' },
    help: { control: 'text' },
  },
} as Meta;

const LabelBoxTemplate: Story<LabelBoxProps> = (args) => <LabelBox {...args} />;

export const DemoLabelBox = LabelBoxTemplate.bind({});

DemoLabelBox.args = {
  label: 'Etiqueta',
  children: 'Contenido',
};
