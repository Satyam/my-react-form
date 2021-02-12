import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as yup from 'yup';
import { FormFrame, FormFrameProps, argsFormFrame } from './FormFrame';
import { RadioField as RF } from '../../Form';

export default {
  title: 'Form/RadioField',
  component: FormFrame,
  argTypes: {
    ...argsFormFrame,

    options: {
      control: 'object',
      defaultValue: [
        { value: 1, label: 'Uno' },
        {
          value: 2,
          label: 'Dos',
        },
        { value: 3, label: 'Tres', disabled: true },
        { value: 4, label: 'Cuatro' },
      ],
    },
    value: { control: 'number', defaultValue: 2 },

    FieldComponent: {
      control: false,
      description: 'Form/RadioField.tsx',
    },
  },
} as Meta;

const schemas = (name: string): yup.AnyObjectSchema =>
  yup.object({
    [name]: yup.number().oneOf([2, 4]),
  });

export const RadioField: Story<
  FormFrameProps & {
    options: {
      label: string;
      value: any;
      disabled?: boolean;
    }[];
    value: string;
  }
> = ({ ...args }) => {
  return <FormFrame schema={schemas(args.name)} {...args} />;
};

RadioField.storyName = 'RadioField';
RadioField.args = {
  FieldComponent: RF,
};
