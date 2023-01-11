import React from "react";
import { dBar, dBarWrapper } from "./styles";

type Props = {
  onPointerDown: (pageY: number) => void
  onPointerUp: () => void
}

const DragBar = (props: Props) => {
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