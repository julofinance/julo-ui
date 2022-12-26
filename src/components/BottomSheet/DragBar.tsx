import React from "react";
import { dBar, dBarWrapper } from "./styles";

const DragBar = () => {
  return (
    <div className={dBarWrapper}>
      <div className={dBar}/>
    </div>
  );
};

export default DragBar;