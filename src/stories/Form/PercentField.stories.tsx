import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as yup from 'yup';
import { FormFrame, FormFrameProps, argsFormFrame } from './FormFrame';
import { PercentField as PF } from '../../Form';

export default {
  title: 'Form/PercentField',
  component: FormFrame,
  argTypes: {
    ...argsFormFrame,

    value: { control: 'number', defaultValue: 0.1 },

    min: {
      control: 'number',
      defaultValue: 0.2,
    },
    max: {
      control: 'number',
      defaultValue: 0.8,
    },
    FieldComponent: {
      control: false,
      description: 'Form/PercentField.tsx',
    },
  },
} as Meta;

const schemas = (name: string, min: number, max: number): yup.AnyObjectSchema =>
  yup.object({
    [name]: yup
      .number()
      .min(
        min,
        (opt) => `El porcentaje debe ser igual o mayor que ${opt.min * 100}%`
      )
      .max(
        max,
        (opt) => `El porcentaje debe ser menor o igual que ${opt.max * 100}%`
      ),
  });

export const PercentField: Story<
  FormFrameProps & { value: number; min: number; max: number }
> = ({ min, max, ...args }) => (
  <FormFrame schema={schemas(args.name, min, max)} {...args} />
);

PercentField.storyName = 'PercentField';
PercentField.args = {
  FieldComponent: PF,
};
