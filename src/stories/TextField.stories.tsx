import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FormFrame, FormFrameProps } from './FormFrame';
import { TextField } from '../Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Example/TextField',
  component: FormFrame,
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    label: { control: 'text' },
    help: { control: 'text' },
    rows: { control: 'number' },
    type: { control: 'text' },
    value: { control: 'text' },
    onSubmit: { action: 'submit' },
  },
} as Meta;

const TextFieldTemplate: Story<FormFrameProps> = (args) => (
  <FormFrame {...args} />
);

export const TextFieldBox = TextFieldTemplate.bind({});

TextFieldBox.args = {
  FieldComponent: TextField,
};
