import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as yup from 'yup';
import {
  FormFrame,
  FormFrameProps,
  argsFormFrame,
  SUCCESS,
  FAIL,
} from './FormFrame';
import { TextField as TF } from '../../Form';

export default {
  title: 'Form/TextField',
  component: FormFrame,
  argTypes: {
    ...argsFormFrame,

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
    FieldComponent: {
      control: false,
      description: 'Form/TextField.tsx',
    },
  },
} as Meta;

const schemas = (name: string, success: boolean): yup.AnyObjectSchema =>
  yup.object({
    [name]: yup
      .string()
      .test(
        success ? SUCCESS : FAIL,
        success ? 'This message should never come up' : 'Error message',
        () => success
      ),
  });

export const TextField: Story<
  FormFrameProps & { validation: string; rows?: number; type?: string }
> = ({ validation, ...args }) => (
  <FormFrame schema={schemas(args.name, validation === SUCCESS)} {...args} />
);

TextField.storyName = 'TextField';
TextField.args = {
  FieldComponent: TF,
};
