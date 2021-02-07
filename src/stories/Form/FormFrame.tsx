// Library imports
import React, { useEffect, useState } from 'react';
import { Form } from 'reactstrap';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// My own library imports
import { SubmitButton } from '../../Form';
import { IntlProvider } from '../../Intl';

import Page from '../Page';
export type FormFrameProps = {
  FieldComponent: React.ElementType;
  id?: string;
  name: string;
  label?: string;
  help?: string;
  value?: any;
  schema?: yup.AnyObjectSchema;

  // to allow for value to be displayed
  onSubmit: SubmitHandler<Record<string, any>>;

  // For TextField
  rows?: number;
  type?: string;

  // for Dropdown
  options?: Record<string, string>;
};

export const FormFrame: React.FC<FormFrameProps> = ({
  FieldComponent,
  name = 'campo1',
  label = 'Etiqueta',
  value,
  schema,
  onSubmit,
  ...args
}) => {
  const [resolver, setResolver] = useState<Resolver | undefined>();

  const methods = useForm({
    defaultValues: { [name]: value },
    resolver: (...args) => resolver(...args),
  });

  useEffect(() => {
    if (value) methods.reset({ [name]: value });
    // es lint-disable-next-line react-hooks/exhaustive-deps
  }, [name, value]);

  useEffect(() => {
    if (schema) setResolver(() => yupResolver(schema));
    else setResolver(undefined);
    console.log(resolver, schema);
  }, [schema]);

  return (
    <IntlProvider locale="es-ES">
      <Page>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <FieldComponent
            name={name}
            label={label}
            {...args}
            methods={methods}
          />
          <SubmitButton methods={methods}>Submit</SubmitButton>
        </Form>
      </Page>
    </IntlProvider>
  );
};

export default FormFrame;
