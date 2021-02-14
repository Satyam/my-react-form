import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Checkmark as CM } from '../../Icons';

import './styles.css';

type CheckmarkProps = {
  value: boolean;
};

const titleRexp = /<title>(.*)<\/title>/;

const onClick: React.MouseEventHandler<HTMLImageElement> = (ev) => {
  const m = titleRexp.exec(ev.currentTarget.innerHTML);
  console.log(m.length === 2 ? m[1] : '??');
};

export const Checkmark: Story<CheckmarkProps> = ({ ...args }) => {
  return <CM {...args} />;
};

Checkmark.storyName = 'Checkmark';

export default {
  title: 'Icons/Checkmark',
  component: Checkmark,
  argTypes: {
    value: { control: 'boolean', defaultValue: false },
  },
} as Meta;
