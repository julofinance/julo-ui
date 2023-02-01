import { ChangeEvent } from "react";

export type Size = "sm" | "md" | "lg";

export interface TgWrapperProps  {
  disabled?: boolean;
}
  
export interface TgInputProps  {
  backgroundColor?: string;
  size: Size;
}
  
export interface TgSliderTrackProps  {
  size: Size;
}
  
export interface TgThumbProps  {
  size: Size;
}

export interface ToggleProps  {
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