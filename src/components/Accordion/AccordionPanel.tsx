import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { useAccordionItemContext } from "./providers/AccordionItemProvider";
import { useAccordionContext } from "./providers/AccordionProvider";
import { acPanel } from "./styles";

type Props = {
  children: ReactNode;
};

const AccordionPanel: FC<Props> = ({ children }) => {
  const { activeItemIndex, multiExpand } = useAccordionContext();
  const { itemIndex } = useAccordionItemContext();
  const [maxHeight, setMaxHeight] = useState('100px');

  const panelRef = useRef<HTMLDivElement>(null);
  const isPanelActive = !multiExpand ? itemIndex === activeItemIndex[0] : activeItemIndex.includes(itemIndex);

  useEffect(() => {
    if (panelRef.current){
      setMaxHeight(panelRef.current.scrollHeight + 'px');
    }
  }, []);

  return (
    <div ref={panelRef} className={acPanel({maxHeight: isPanelActive ? maxHeight : '0px'})}>
      {children}
    </div>
  );
};

export default AccordionPanel;