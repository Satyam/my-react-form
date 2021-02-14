import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  IconAdd,
  IconDelete,
  IconEdit,
  IconView,
  IconCheck,
  IconNotCheck,
  IconCalendar,
  IconStop,
  IconWarning,
  IconInfo,
} from '../../Icons';

import './styles.css';

type IconProps = {
  isButton?: boolean;
  disabled?: boolean;
  size?: string;
};

const titleRexp = /<title>(.*)<\/title>/;

const onClick: React.MouseEventHandler<HTMLImageElement> = (ev) => {
  const m = titleRexp.exec(ev.currentTarget.innerHTML);
  console.log(m.length === 2 ? m[1] : '??');
};

export const Icons: Story<IconProps> = ({ size, ...args }) => {
  return (
    <div className="icons">
      <IconAdd size={`${size}em`} {...args} onClick={onClick} title="IconAdd" />
      <IconDelete
        size={`${size}em`}
        {...args}
        onClick={onClick}
        title="IconDelete"
      />
      <IconEdit
        size={`${size}em`}
        {...args}
        onClick={onClick}
        title="IconEdit"
      />
      <IconView
        size={`${size}em`}
        {...args}
        onClick={onClick}
        title="IconView"
      />
      <IconCheck
        size={`${size}em`}
        {...args}
        onClick={onClick}
        title="IconCheck"
      />
      <IconNotCheck
        size={`${size}em`}
        {...args}
        onClick={onClick}
        title="IconNotCheck"
      />
      <IconCalendar
        size={`${size}em`}
        {...args}
        onClick={onClick}
        title="IconCalendar"
      />
      <IconStop
        size={`${size}em`}
        {...args}
        onClick={onClick}
        title="IconStop"
      />
      <IconWarning
        size={`${size}em`}
        {...args}
        onClick={onClick}
        title="IconWarning"
      />
      <IconInfo
        size={`${size}em`}
        {...args}
        onClick={onClick}
        title="IconInfo"
      />
    </div>
  );
};

Icons.storyName = 'Icons';

export default {
  title: 'Icons/Icons',
  component: Icons,
  argTypes: {
    isButton: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    size: { control: 'number', defaultValue: 1 },
  },
} as Meta;
