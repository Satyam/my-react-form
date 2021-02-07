import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as yup from 'yup';
import { FormFrame, FormFrameProps } from './FormFrame';
import { TextField as TF } from '../../Form';

export default {
  title: 'Form/TextField',
  component: FormFrame,
  argTypes: {
    validation: {
      defaultValue: 'Success',
      control: {
        type: 'select',
        options: ['Success', 'Fail'],
      },
    },
    id: { control: 'text' },
    name: { control: 'text' },
    label: { control: 'text' },
    help: { control: 'text' },
    value: { control: 'text' },
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
    onSubmit: { control: false, action: 'submit' },
    FieldComponent: {
      control: false,
      description: 'Form/TextField.tsx',
    },
  },
} as Meta;

const schemas = {
  Success: yup
    .string()
    .test('Success', 'This message should never come up', () => true),
  Fail: yup.string().test('Fail', 'Error message', () => false),
};

export const TextField: Story<FormFrameProps & { validation: string }> = ({
  validation,
  ...args
}) => <FormFrame schema={schemas[validation]} {...args} />;

TextField.storyName = 'TextField';
TextField.args = {
  FieldComponent: TF,
};
