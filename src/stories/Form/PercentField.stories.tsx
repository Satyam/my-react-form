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
import { PercentField as PF } from '../../Form';

export default {
  title: 'Form/PercentField',
  component: FormFrame,
  argTypes: {
    ...argsFormFrame,

    FieldComponent: {
      control: false,
      description: 'Form/PercentField.tsx',
    },
  },
} as Meta;

const schemas = (name: string, success: boolean): yup.AnyObjectSchema =>
  yup.object({
    [name]: yup
      .number()
      .test(
        success ? SUCCESS : FAIL,
        success ? 'This message should never come up' : 'Error message',
        () => success
      ),
  });

export const PercentField: Story<FormFrameProps & { validation: string }> = ({
  validation,
  ...args
}) => (
  <FormFrame schema={schemas(args.name, validation === SUCCESS)} {...args} />
);

PercentField.storyName = 'PercentField';
PercentField.args = {
  FieldComponent: PF,
};
