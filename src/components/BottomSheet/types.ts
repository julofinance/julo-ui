import { ReactNode } from "react";

export type BSheetWrapper = {
  isOpen?: boolean;
}
  
export type BSheetContainer = {
  isOpen?: boolean;
  isDragging: boolean;
  yPos: number;
}

export type BottomSheetProps = {
  onClose: () => void;
  isOpen: boolean;
  showDragBar?: boolean;
  showCloseIcon?: boolean;
  closeOnClickOutside?: boolean;
  children: ReactNode | ReactNode[];
  'data-testid'?: string;
}

export type DragBarProps = {
  onPointerDown: (pageY: number) => void;
  onPointerUp: () => void;
}