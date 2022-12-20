import React, { 
  createContext, 
  ReactNode, 
  useContext, 
  useMemo 
} from 'react';

type AccordionItemContextType = {
  itemIndex: number;
};
type AccordionItemProviderProps = {
  children: ReactNode;
  itemIndex: number;
};

const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined);

const AccordionItemProvider = (props: AccordionItemProviderProps) => {
  const { children, itemIndex } = props;

  const value = useMemo(() => ({ itemIndex }), [itemIndex]);

  return <AccordionItemContext.Provider value={value}>{children}</AccordionItemContext.Provider>;
};

const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);

  if (context === undefined) {
    throw new Error('outside the provider');
  }

  return context;
};

export { AccordionItemProvider, useAccordionItemContext };