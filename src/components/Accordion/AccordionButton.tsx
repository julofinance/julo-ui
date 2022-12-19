import React, { FC, ReactNode, useEffect, useState } from "react";
import { useAccordionItemContext } from "./providers/AccordionItemProvider";
import { useAccordionContext } from "./providers/AccordionProvider";
import ChevronDown from "./assets/ChevronDown"
import { acButton, acButtonChevron } from "./styles";

type Props = {
  children: ReactNode | ReactNode[];
};

const AccordionButton: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeItemIndex, multiExpand, setActiveItemIndex } = useAccordionContext();
  const { itemIndex } = useAccordionItemContext();

  const handleAccrodionButtonClick = () => {
    if (multiExpand){
      setActiveItemIndex(
        isOpen ? activeItemIndex.filter(idx => idx !== itemIndex) : activeItemIndex.concat(itemIndex)
      )
    }
    else{
      setActiveItemIndex(isOpen ? [-1] : [itemIndex]);
    }

    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (multiExpand){
      if (!activeItemIndex.includes(itemIndex)){
        setIsOpen(false)
      }
    }
    else{
      if (activeItemIndex[0] !== itemIndex){
        setIsOpen(false);
      }
    }

    setIsOpen(activeItemIndex.includes(itemIndex))
  }, [activeItemIndex, multiExpand, itemIndex]);

  return (
    <button className={acButton} onClick={handleAccrodionButtonClick}>
      {children}
      <div className={acButtonChevron({isOpen})}>
        <ChevronDown/>
      </div>
    </button>
  );
};

export default AccordionButton;