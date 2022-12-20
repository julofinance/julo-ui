import React, { FC, ReactNode, Children, cloneElement, isValidElement, ReactElement } from "react";
import { AccordionProvider } from "./providers/AccordionProvider";

type Props = {
  children: ReactNode | ReactNode[];
  multiExpand?: boolean;
  defaultIndex?: number[];
};

const Accordion: FC<Props> = ({ children, multiExpand, defaultIndex }) => {
  return (
    <AccordionProvider multiExpand={multiExpand || false} defaultIndex={defaultIndex || []}>
      <div className="accordion">
        {
          Children.map(children, (child, index) => {
            if (isValidElement(child)) {
              return cloneElement(child as ReactElement<any>, { itemIndex: index });
            }
          })
        }
      </div>
    </AccordionProvider>
  );
};

export default Accordion;