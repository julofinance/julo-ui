import React, { FC, ReactNode } from "react";
import { AccordionItemProvider } from "./providers/AccordionItemProvider";

type Props = {
  children: ReactNode | ReactNode[];
  itemIndex?: number;
};

const AccordionItem: FC<Props> = ({ children, itemIndex }) => {
  return (
    <AccordionItemProvider itemIndex={itemIndex || 0}>
      {children}
    </AccordionItemProvider>
  );
};

export default AccordionItem;