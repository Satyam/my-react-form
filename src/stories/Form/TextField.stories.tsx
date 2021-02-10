import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as yup from 'yup';
import { FormFrame, FormFrameProps, argsFormFrame } from './FormFrame';
import { TextField as TF } from '../../Form';

export default {
  title: 'Form/TextField',
  component: FormFrame,
  argTypes: {
    ...argsFormFrame,

    value: { control: 'text', defaultValue: 'prueba' },

    rows: {
      description: 'If type is "text", it will switch to a <textarea>',
      control: 'number',
    },
    type: {
      description: 'rows will only work with type=text',
      defaultValue: 'text',
      control: {
        type: 'select',
        options: ['text', 'email', 'password', 'search', 'tel', 'url'],
      },
    },
    minLength: {
      control: 'number',
    },
    FieldComponent: {
      control: false,
      description: 'Form/TextField.tsx',
    },
  },
} as Meta;

const schemas = (name: string, minLength: number): yup.AnyObjectSchema =>
  yup.object({
    [name]: yup.string().min(minLength),
  });

export const TextField: Story<
  FormFrameProps & {
    value: string;
    minLength?: number;
    rows?: number;
    type?: string;
  }
> = ({ minLength = 0, ...args }) => {
  return <FormFrame schema={schemas(args.name, minLength)} {...args} />;
};

TextField.storyName = 'TextField';
TextField.args = {
  FieldComponent: TF,
};
