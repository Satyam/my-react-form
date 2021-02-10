import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as yup from 'yup';
import { FormFrame, FormFrameProps, argsFormFrame } from './FormFrame';
import { DateField as DF } from '../../Form';

export default {
  title: 'Form/DateField',
  component: FormFrame,
  argTypes: {
    ...argsFormFrame,

    value: { control: 'date', defaultValue: Date.now() },

    minDate: {
      control: 'date',
      defaultValue: new Date(Date.now() - 1000 * 3600 * 24 * 10),
    },

    maxDate: {
      control: 'date',
      defaultValue: new Date(Date.now() + 1000 * 3600 * 24 * 10),
    },
    FieldComponent: {
      control: false,
      description: 'Form/DateField.tsx',
    },
  },
} as Meta;

const schemas = (
  name: string,
  minDate: Date,
  maxDate: Date
): yup.AnyObjectSchema =>
  yup.object({
    [name]: yup
      .date()
      .min(
        minDate,
        (opt) =>
          `La fecha debe ser igual o mayor que ${
            opt.min instanceof Date ? opt.min.toLocaleDateString() : opt.min
          }`
      )
      .max(
        maxDate,
        (opt) =>
          `La fecha debe ser menor o igual que ${
            opt.max instanceof Date ? opt.max.toLocaleDateString() : opt.max
          }`
      ),
  });

export const DateField: Story<
  FormFrameProps & { value: Date; minDate: Date; maxDate: Date }
> = ({ minDate, maxDate, ...args }) => (
  <FormFrame schema={schemas(args.name, minDate, maxDate)} {...args} />
);

DateField.storyName = 'DateField';
DateField.args = {
  FieldComponent: DF,
};
