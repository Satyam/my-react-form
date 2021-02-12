// Library imports
import React, { useEffect, useState } from 'react';
import { Form, Container, Row, Col } from 'reactstrap';
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  Resolver,
} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// My own library imports
import { SubmitButton } from '../../Form';
import { IntlProvider } from '../../Intl';

export type FormFrameProps = {
  id?: string;
  name: string;
  label?: string;
  help?: string;
  value?: any;
};

export const argsFormFrame = {
  id: { control: 'text' },
  name: { control: 'text', defaultValue: 'campo1' },
  label: { control: 'text', defaultValue: 'Etiqueta' },
  help: { control: 'text' },
  FieldComponent: { table: { disable: true } },
  schema: { table: { disable: true } },
};

const onSubmit: SubmitHandler<any> = (data) => console.log(data);
const onError: SubmitErrorHandler<any> = (err) => console.error(err);

export const FormFrame: React.FC<
  FormFrameProps & {
    FieldComponent: React.ElementType;
    schema?: yup.AnyObjectSchema;
  }
> = ({ FieldComponent, name, value, schema, ...args }) => {
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
    // console.log(resolver, schema);
  }, [schema]);

  // console.log(
  //   JSON.stringify({ ...methods.formState, values: methods.watch() }, null, 2)
  // );
  return (
    <IntlProvider locale="es-ES">
      <Container fluid>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Form onSubmit={methods.handleSubmit(onSubmit, onError)}>
              <FieldComponent name={name} {...args} methods={methods} />
              <SubmitButton methods={methods}>Submit</SubmitButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </IntlProvider>
  );
};

export default FormFrame;
