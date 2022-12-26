import React, { FC, ReactNode } from "react";
import DragBar from "./DragBar";
import { bSheetContainer, bSheetWrapper } from "./styles";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  showDragBar?: boolean;
  closeOnOverlayClick?: boolean;
  children: ReactNode | ReactNode[];
};

const BottomSheet:FC<Props> = ({ onClose, isOpen, closeOnOverlayClick = true, showDragBar = true, children }) => {
  const handleClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  return (
    <div className={bSheetWrapper({isOpen})} onClick={handleClick}>
      <div className={bSheetContainer({isOpen})} onClick={e => e.stopPropagation()} >
        {showDragBar && <DragBar/>}
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;