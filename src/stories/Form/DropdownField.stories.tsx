import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as yup from 'yup';
import { FormFrame, FormFrameProps, argsFormFrame } from './FormFrame';
import { DropdownField as DF } from '../../Form';

export default {
  title: 'Form/DropdownField',
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
      ],
    },
    value: { control: 'number', defaultValue: 2 },
  },
} as Meta;

const schemas = (name: string): yup.AnyObjectSchema =>
  yup.object({
    [name]: yup.number().oneOf([2]),
  });

export const DropdownField: Story<
  FormFrameProps & {
    options: {
      label: string;
      value: any;
      disabled?: boolean;
    }[];
    value: string;
  }
> = ({ ...args }) => {
  return (
    <FormFrame FieldComponent={DF} schema={schemas(args.name)} {...args} />
  );
};

DropdownField.storyName = 'DropdownField';
