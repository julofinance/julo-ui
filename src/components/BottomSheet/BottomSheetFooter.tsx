import React, { ReactNode } from "react";
import { bSheetFooter } from "./styles";

const BottomSheetFooter = ({ children } : {children: ReactNode}) => {
  return (
    <div className={bSheetFooter}>
      {children}   
    </div>
  );
};

export default BottomSheetFooter;