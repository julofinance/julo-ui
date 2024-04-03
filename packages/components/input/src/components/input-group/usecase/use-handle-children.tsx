import {
  Children,
  ReactNode,
  RefObject,
  cloneElement,
  isValidElement,
} from 'react';

import { mergeRefs } from '@julo-ui/dom-utils';
import { JuloHTMLElement, JuloReactElement } from '@julo-ui/system';

import {
  inputElementSx,
  inputGroupWithAddonCx,
  inputGroupWithElementCx,
  inputGroupWithTextAreaCx,
} from '../styles';
import { SerializedStyles } from '@emotion/react';

interface UseHandleChildrenOptions {
  children: ReactNode;
  inputRef: RefObject<HTMLInputElement>;
}

function useHandleChildren({ children, inputRef }: UseHandleChildrenOptions) {
  const arrChildren = Children.toArray(children);

  const validChildren = arrChildren.filter((child) =>
    isValidElement(child),
  ) as JuloReactElement<JuloHTMLElement>[];

  const {
    isTextArea,
    isAddonExist,
    leftAddon,
    rightAddon,
    leftElement,
    rightElement,
    isElementExist,
  } = validChildren.reduce<Record<string, boolean>>(
    (prevValue, child) => {
      return {
        ...prevValue,
        ...(child.type.id === 'textarea' && { isTextArea: true }),
        ...((child.type.id === 'input-left-addon' ||
          child.type.id === 'input-right-addon') && {
          isAddonExist: true,
        }),
        ...((child.type.id === 'input-left-element' ||
          child.type.id === 'input-right-element') && {
          isElementExist: true,
        }),
        ...(child.type.id === 'input-left-addon' && { leftAddon: true }),
        ...(child.type.id === 'input-right-addon' && { rightAddon: true }),
        ...(child.type.id === 'input-left-element' && { leftElement: true }),
        ...(child.type.id === 'input-right-element' && {
          rightElement: true,
        }),
      };
    },
    {
      isTextArea: false,
      isAddonExist: false,
      leftAddon: false,
      rightAddon: false,
      leftElement: false,
      rightElement: false,
      isElementExist: false,
    },
  );

  const clones = validChildren.map((child) => {
    if (child.type.id === 'input' || child.type.id === 'textarea') {
      const isTextArea = child.type.id === 'textarea';
      return cloneElement(child, {
        ref: mergeRefs<HTMLElement>(inputRef, child.ref),
        sx: inputElementSx({
          leftAddon,
          rightAddon,
          leftElement,
          rightElement,
          isOnlyElement: !isAddonExist && isElementExist,
        }),
        ...(isTextArea && { isResizeable: false }),
      });
    }

    return child;
  });

  const extendedInputGroupCx = [
    isTextArea && inputGroupWithTextAreaCx,
    isAddonExist
      ? inputGroupWithAddonCx
      : isElementExist
      ? inputGroupWithElementCx
      : null,
  ].filter(Boolean) as Array<SerializedStyles>;

  return { clones, extendedInputGroupCx };
}

export default useHandleChildren;
