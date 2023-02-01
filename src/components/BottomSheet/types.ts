import { ReactNode } from "react";

export interface BSheetWrapper  {
  isOpen?: boolean;
}
  
export interface BSheetContainer  {
  isOpen?: boolean;
  isDragging: boolean;
  yPos: number;
}

export interface BottomSheetProps  {
  onClose: () => void;
  isOpen: boolean;
  showDragBar?: boolean;
  showCloseIcon?: boolean;
  closeOnClickOutside?: boolean;
  children: ReactNode | ReactNode[];
  'data-testid'?: string;
}

export interface DragBarProps  {
  onPointerDown: (pageY: number) => void;
  onPointerUp: () => void;
}