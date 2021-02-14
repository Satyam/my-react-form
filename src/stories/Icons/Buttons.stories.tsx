import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonGroup } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ButtonIconAdd,
  ButtonIconDelete,
  ButtonIconEdit,
  ButtonIconView,
  ButtonIconCheck,
  ButtonIconNotCheck,
  ButtonIconCalendar,
  ButtonIconInvoice,
  ButtonIconCobrar,
  ButtonSet,
  MyButtonProps,
} from '../../Icons';

import './styles.css';

const onClick: React.MouseEventHandler<HTMLButtonElement> = (ev) => {
  console.log(ev.currentTarget.title);
};

export const Buttons: Story<MyButtonProps> = ({ label, href, ...args }) => {
  return (
    <Router>
      <h3>Separate buttons</h3>
      <div className="buttons">
        <ButtonIconAdd
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconAdd"
        >
          {label}
        </ButtonIconAdd>

        <ButtonIconDelete
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconDelete"
        >
          {label}
        </ButtonIconDelete>

        <ButtonIconEdit
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconEdit"
        >
          {label}
        </ButtonIconEdit>

        <ButtonIconView
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconView"
        >
          {label}
        </ButtonIconView>

        <ButtonIconCheck
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconCheck"
        >
          {label}
        </ButtonIconCheck>

        <ButtonIconNotCheck
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconNotCheck"
        >
          {label}
        </ButtonIconNotCheck>

        <ButtonIconCalendar
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconCalendar"
        >
          {label}
        </ButtonIconCalendar>

        <ButtonIconInvoice
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconInvoice"
        >
          {label}
        </ButtonIconInvoice>

        <ButtonIconCobrar
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconCobrar"
        >
          {label}
        </ButtonIconCobrar>
      </div>
      <hr />
      <h3>ButtonSet (notice left margin on first)</h3>
      <ButtonSet size={args.size}>
        <ButtonIconAdd
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconAdd"
        >
          {label}
        </ButtonIconAdd>
        <ButtonIconDelete
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconDelete"
        >
          {label}
        </ButtonIconDelete>
        <ButtonIconEdit
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconEdit"
        >
          {label}
        </ButtonIconEdit>
        <ButtonIconView
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconView"
        >
          {label}
        </ButtonIconView>
      </ButtonSet>
      <hr />
      <h3>ButtonGroup</h3>
      <ButtonGroup size={args.size}>
        <ButtonIconAdd
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconAdd"
        >
          {label}
        </ButtonIconAdd>
        <ButtonIconDelete
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconDelete"
        >
          {label}
        </ButtonIconDelete>
        <ButtonIconEdit
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconEdit"
        >
          {label}
        </ButtonIconEdit>
        <ButtonIconView
          href={href ? '#' : undefined}
          {...args}
          onClick={onClick}
          title="ButtonIconView"
        >
          {label}
        </ButtonIconView>
      </ButtonGroup>
    </Router>
  );
};

Buttons.storyName = 'Buttons';

export default {
  title: 'Icons/Buttons',
  component: Buttons,
  argTypes: {
    disabled: { control: 'boolean', defaultValue: false },
    size: { control: { type: 'select', options: ['sm', 'normal', 'lg'] } },
    outline: { control: 'boolean', defaultValue: false },
    block: { control: 'boolean', defaultValue: false },
    label: { control: 'text', defaultValue: 'click here' },
    href: { control: 'boolean', defaultValue: false },
  },
} as Meta;
