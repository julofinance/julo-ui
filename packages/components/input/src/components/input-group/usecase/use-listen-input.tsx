import { RefObject, useEffect } from 'react';

interface UseListenInputOptions {
  groupRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>;
}

const attributes = {
  disabled: 'data-input-disabled',
  invalid: 'data-input-invalid',
  focus: 'data-input-focus',
};

function useListenInput({ groupRef, inputRef }: UseListenInputOptions) {
  useEffect(() => {
    const input = inputRef.current;
    const group = groupRef.current;

    function syncGroupAttribute(attributeName: string, condition: boolean) {
      if (condition) group?.setAttribute(attributeName, String(condition));
      else group?.setAttribute(attributeName, String(condition));
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((record) => {
        if (record.type === 'attributes') {
          const isInvalid = (record.target as HTMLElement).getAttribute(
            'aria-invalid',
          );

          const disabled = (record.target as HTMLElement).getAttribute(
            'disabled',
          );

          syncGroupAttribute(attributes.invalid, Boolean(isInvalid));
          syncGroupAttribute(attributes.disabled, Boolean(disabled !== null));
        }
      });
    });

    function handleFocus() {
      syncGroupAttribute(attributes.focus, true);
    }

    function handleBlur() {
      syncGroupAttribute(attributes.focus, false);
    }

    if (input) {
      observer.observe(input, { attributes: true });
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);

      syncGroupAttribute(
        attributes.disabled,
        Boolean(input.getAttribute('disabled') !== null),
      );

      syncGroupAttribute(
        attributes.invalid,
        Boolean(input.getAttribute('aria-invalid')),
      );
    }

    () => {
      observer.disconnect();
    };
  }, [inputRef]);
}

export default useListenInput;
