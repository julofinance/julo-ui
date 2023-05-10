import { cx } from "@emotion/css";
import React, { useEffect, useState, PointerEvent } from "react";
import CloseIcon from "./assets/CloseIcon";
import DragBar from "./DragBar";
import { bSheetContainer, bSheetWrapper, closeIconWrapper } from "./styles";
import { BottomSheetProps } from "./types";

const BottomSheet = (props: BottomSheetProps) => {
  const {
    isOpen, 
    onClose, 
    closeOnClickOutside = true,
    showDragBar = true, 
    showCloseIcon,
    children, 
    ...bottomSheetprops
  } = props;

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
    <div 
      className={bSheetWrapper({isOpen})} 
      onClick={handleClick} 
      onPointerMove={onMove}
      {...bottomSheetprops}
    >
      <div className={bSheetContainer({isOpen, isDragging, yPos})} onClick={e => e.stopPropagation()}>
        {
          showDragBar && 
          <DragBar 
            onPointerDown={pageY => onDown(pageY)} 
            onPointerUp={() => setIsDragging(false)}
          />
        }
        {
          showCloseIcon && 
          <div className={cx(closeIconWrapper)} onClick={onClose}>
            <CloseIcon/>
          </div>
        }
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;