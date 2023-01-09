import React, { FC, ReactNode } from "react";
import { bSheetFooter } from "./styles";

type Props = {
  children: ReactNode
};

const BottomSheetFooter: FC<Props> = ({ children }) => {
  return (
    <div className={bSheetFooter}>
      {children}   
    </div>
  );
};

export default BottomSheetFooter;