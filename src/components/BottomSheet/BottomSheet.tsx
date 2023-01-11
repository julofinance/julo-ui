import React, { FC, ReactNode, useEffect, useState, PointerEvent } from "react";
import DragBar from "./DragBar";
import { bSheetContainer, bSheetWrapper } from "./styles";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  showDragBar?: boolean;
  closeOnClickOutside?: boolean;
  children: ReactNode | ReactNode[];
};

const BottomSheet:FC<Props> = ({ onClose, isOpen, closeOnClickOutside = true, showDragBar = true, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [yPos, setYPos] = useState(0);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    setYPos(0);
    setIsDragging(false);
  }, [isOpen])
  
  const handleClick = () => {
    if (closeOnClickOutside) {
      onClose();
    };
  };

  const onDown = (pageY: number) => {
    setLastY(pageY);
    setIsDragging(true);
  }

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if(isDragging){
      // lastY > e.pageY  === scroll up
      // lastY < e.pageY === scroll down
      if(lastY < e.pageY){
        if(yPos >= 200) {
          onClose();
        }
        setYPos(yPos + 25);
      }
      setLastY(e.pageY);
    }
    else{
      setYPos(0);
    }
  }

  return (
    <div className={bSheetWrapper({isOpen})} onClick={handleClick} onPointerMove={onMove}>
      <div className={bSheetContainer({isOpen, isDragging, yPos})} onClick={e => e.stopPropagation()}>
        {
          showDragBar && 
          <DragBar 
            onPointerDown={pageY => onDown(pageY)} 
            onPointerUp={() => setIsDragging(false)}
          />
        }
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;