import { Children, ReactNode, cloneElement, isValidElement } from 'react';

import { JuloHTMLElement, JuloReactElement } from '@julo-ui/system';

interface UseHandleChildrenOptions {
  children: ReactNode;
}

function useHandleChildren({ children }: UseHandleChildrenOptions) {
  const arrChildren = Children.toArray(children);

  const clone = arrChildren.map((child) => {
    if (isValidElement(child)) {
      const arrSectionChildren = Children.toArray(
        child.props.children as ReactNode,
      );

      const sectionChildren = arrSectionChildren.filter((sectionCheck) =>
        isValidElement(sectionCheck),
      ) as JuloReactElement<JuloHTMLElement>[];

      const isChildren =
        child.props.hasOwnProperty('children') && sectionChildren.length;

      if (isChildren) {
        const sectionElement = sectionChildren.map(
          (section: JuloReactElement<JuloHTMLElement>, index: number) => {
            if (section.type.id === 'alert-description') {
              return {
                ...cloneElement(section, {
                  sx: {
                    marginTop: '0.25rem',
                  },
                }),
                key: index,
              };
            }
            return section;
          },
        );

        return cloneElement(child, {}, sectionElement);
      }

      return child;
    }

    return child;
  });

  return clone;
}

export default useHandleChildren;
