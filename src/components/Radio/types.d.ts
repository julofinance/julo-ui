import { MouseEvent } from 'react';

export type RadioProps = {
  checked?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  margin?: string;
  padding?: string;
  size?: string;
};
