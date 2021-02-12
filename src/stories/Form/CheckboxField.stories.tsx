import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as yup from 'yup';
import { FormFrame, FormFrameProps, argsFormFrame } from './FormFrame';
import { CheckboxField as CF } from '../../Form';

export default {
  title: 'Form/CheckboxField',
  component: FormFrame,
  argTypes: {
    ...argsFormFrame,

    value: { control: 'boolean', defaultValue: false },

    fail: { control: 'boolean', defaultValue: false },

    FieldComponent: {
      control: false,
      description: 'Form/CheckboxField.tsx',
    },
  },
} as Meta;

const schemas = (name: string, fail: boolean): yup.AnyObjectSchema =>
  yup.object({
    [name]: yup
      .boolean()
      .test(
        'Checkbox',
        fail ? 'some error message' : 'this should never show',
        () => !fail
      ),
  });

export const CheckboxField: Story<
  FormFrameProps & {
    value: string;
    fail: boolean;
  }
> = ({ fail, ...args }) => {
  return <FormFrame schema={schemas(args.name, fail)} {...args} />;
};

CheckboxField.storyName = 'CheckboxField';
CheckboxField.args = {
  FieldComponent: CF,
};
