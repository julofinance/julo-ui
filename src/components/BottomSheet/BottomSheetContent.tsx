import React, { FC, ReactNode } from "react";
import { bSheetContent } from "./styles";

type Props = {
  children: ReactNode | ReactNode[]
}

const BottomSheetContent: FC<Props> = ({ children }) => {
  return (
    <div className={bSheetContent}>
      {children}      
    </div>
  );
};

export default BottomSheetContent;