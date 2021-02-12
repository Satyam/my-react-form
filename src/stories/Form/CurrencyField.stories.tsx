import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as yup from 'yup';
import { FormFrame, FormFrameProps, argsFormFrame } from './FormFrame';
import { CurrencyField as CF } from '../../Form';

export default {
  title: 'Form/CurrencyField',
  component: FormFrame,
  argTypes: {
    ...argsFormFrame,

    value: { control: 'number', defaultValue: 1 },

    min: {
      control: 'number',
      defaultValue: 1,
    },
    max: {
      control: 'number',
      defaultValue: 10000,
    },
    FieldComponent: {
      control: false,
      description: 'Form/CurrencyField.tsx',
    },
  },
} as Meta;

const schemas = (name: string, min: number, max: number): yup.AnyObjectSchema =>
  yup.object({
    [name]: yup.number().min(min).max(max),
  });

export const CurrencyField: Story<
  FormFrameProps & { value: number; min: number; max: number }
> = ({ min, max, ...args }) => (
  <FormFrame schema={schemas(args.name, min, max)} {...args} />
);

CurrencyField.storyName = 'CurrencyField';
CurrencyField.args = {
  FieldComponent: CF,
};
