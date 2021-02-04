// Library imports
import React, { useEffect } from 'react';
import { Form } from 'reactstrap';
import { useForm, SubmitHandler } from 'react-hook-form';

// My own library imports
import { SubmitButton } from '../Form';
import { IntlProvider } from '../Intl';

export type FormFrameProps = {
  FieldComponent: React.ElementType;
  id?: string;
  name: string;
  label?: string;
  help?: string;
  // For TextField
  rows?: number;
  type?: string;
  // for Dropdown
  options?: Record<string, string>;
  value?: any;
  /*   validation ?? */
  onSubmit: (value: any) => void;
};

export const FormFrame: React.FC<FormFrameProps> = ({
  FieldComponent,
  name = 'campo1',
  label = 'Etiqueta',
  value,
  onSubmit,
  ...args
}) => {
  const methods = useForm({
    defaultValues: { [name]: value },
  });

  useEffect(() => {
    if (value) methods.reset({ [name]: value });
    // es lint-disable-next-line react-hooks/exhaustive-deps
  }, [name, value]);

  return (
    <IntlProvider locale="es-ES">
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <FieldComponent name={name} label={label} {...args} methods={methods} />
        <SubmitButton methods={methods}>Submit</SubmitButton>
      </Form>
    </IntlProvider>
  );
};

export default FormFrame;
