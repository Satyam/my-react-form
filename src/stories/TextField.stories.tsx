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
    value: { control: 'text' },
    error: { control: 'boolean' },
    rows: {
      description: '(only for TextField)',
      control: 'number',
    },
    type: {
      description: '(only for TextField)',
      defaultValue: 'text',
      control: {
        type: 'select',
        options: ['text', 'email', 'password', 'search', 'tel', 'url'],
      },
    },
    options: {
      description: '(only for DropdownField)',
      control: false,
    },
  },
  onSubmit: { control: false, action: 'submit' },
  FieldComponent: { control: false },
} as Meta;

const TextFieldTemplate: Story<FormFrameProps> = (args) => (
  <FormFrame {...args} />
);

export const TextFieldBox = TextFieldTemplate.bind({});

TextFieldBox.args = {
  FieldComponent: TextField,
};
