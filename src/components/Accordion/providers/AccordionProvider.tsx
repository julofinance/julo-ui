import React, { 
  createContext, 
  Dispatch, 
  ReactNode, 
  SetStateAction, 
  useContext, 
  useEffect, 
  useMemo, 
  useState 
} from 'react';

type AccordionContextType = {
  activeItemIndex: number[];
  multiExpand: boolean;
  setActiveItemIndex: Dispatch<SetStateAction<number[]>>;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

const AccordionProvider = ({ 
  children, 
  multiExpand, 
  defaultIndex 
} : {
  children: ReactNode, 
  multiExpand: boolean, 
  defaultIndex: number[]
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState([-1]);

  useEffect(() => {
    if (defaultIndex.length){
      setActiveItemIndex(defaultIndex)
    }
  }, [defaultIndex])

  const value = useMemo(() => (
    { activeItemIndex, multiExpand, setActiveItemIndex }
  ), [activeItemIndex, multiExpand]);

  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
};

const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (context === undefined) {
    throw new Error('outside the provider');
  }

  return context;
};

export { AccordionProvider, useAccordionContext };