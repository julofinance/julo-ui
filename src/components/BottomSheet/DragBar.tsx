import React from "react";
import { dBar, dBarWrapper } from "./styles";
import { DragBarProps } from "./types";

const DragBar = (props: DragBarProps) => {
  const {onPointerDown, onPointerUp} = props

  return (
    <div 
      className={dBarWrapper} 
      onPointerDown={e => onPointerDown(e.pageY)}
      onPointerUp={onPointerUp}
    >
      <div className={dBar}/>
    </div>
  );
};

export default DragBar;