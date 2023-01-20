import React, { ReactNode } from "react";
import { bSheetContent } from "./styles";


const BottomSheetContent = ({ children } : {children: ReactNode | ReactNode[]}) => {
  return (
    <div className={bSheetContent}>
      {children}      
    </div>
  );
};

export default BottomSheetContent;