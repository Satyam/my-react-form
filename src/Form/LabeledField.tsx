import React, { DOMAttributes } from 'react';
import { LabelBox, LabelBoxProps } from './LabelBox';

import classNames from 'classnames/bind';
import { Checkmark } from '../Icons';
import './styles.css';

export type LabeledTextProps = LabelBoxProps & {
  pre?: boolean;
  className?: string;
} & DOMAttributes<HTMLDivElement>;

export const LabeledText: React.FC<LabeledTextProps> = ({
  label,
  help,
  children,
  pre,
  className,
  ...rest
}) => (
  <LabelBox label={label} help={help}>
    <div
      className={classNames(
        'form-control',
        'satyam-readonly',
        { 'satyam-labeled-pre': pre },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  </LabelBox>
);

export type LabeledCheckboxProps = LabelBoxProps & {
  checked?: boolean;
  className?: string;
} & DOMAttributes<HTMLDivElement>;

export const LabeledCheckbox: React.FC<LabeledCheckboxProps> = ({
  label,
  help,
  checked,
  className,
  ...rest
}) => (
  <LabelBox label={label} help={help}>
    <div
      style={{ backgroundColor: 'var(--light)' }}
      className={classNames('form-control', 'border-0', className)}
      {...rest}
    >
      <Checkmark value={checked} />
    </div>
  </LabelBox>
);
