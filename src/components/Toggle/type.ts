import { ChangeEvent } from "react";

export type Size = "sm" | "md" | "lg";

export type TgWrapperProps = {
  disabled?: boolean;
}
  
export type TgInputProps = {
  backgroundColor?: string;
  size: Size;
}
  
export type TgSliderTrackProps = {
  size: Size;
}
  
export type TgThumbProps = {
  size: Size;
}

export type ToggleProps = {
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string | number;
  backgroundColor?: string;
  size?: Size;
  'data-testid'?: string;
}