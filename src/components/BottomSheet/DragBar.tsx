import { cx } from "@emotion/css";
import React from "react";
import { dBar, dBarWrapper } from "./styles";
import { DragBarProps } from "./types";

const DragBar = (props: DragBarProps) => {
  const {onPointerDown, onPointerUp} = props

  return (
    <div 
      className={cx(dBarWrapper, 'b-sheet-dragbar')} 
      onPointerDown={e => onPointerDown(e.pageY)}
      onPointerUp={onPointerUp}
    >
      <div className={dBar}/>
    </div>
  );
};

export default DragBar;