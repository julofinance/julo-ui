import { MouseEvent, ReactNode } from 'react';

export interface CheckboxProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: ReactNode;
  margin?: string;
  name?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  padding?: string;
  size?: string;
  value?: string;
  'data-testid'?: string;
};

