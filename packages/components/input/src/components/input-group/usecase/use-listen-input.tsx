import { RefObject, useEffect } from 'react';

interface UseListenInputOptions {
  groupRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>;
}

const attributes = {
  disabled: 'data-input-disabled',
  invalid: 'data-input-invalid',
  focus: 'data-input-focus',
  readonly: 'data-input-readonly',
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
          const element = record.target as HTMLElement;

          const isInvalid = element.getAttribute('aria-invalid');
          const disabled = element.getAttribute('disabled');
          const readOnly = element.getAttribute('aria-readonly');

          syncGroupAttribute(attributes.invalid, Boolean(isInvalid));
          syncGroupAttribute(attributes.disabled, Boolean(disabled !== null));
          syncGroupAttribute(attributes.readonly, Boolean(readOnly));
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
      syncGroupAttribute(
        attributes.readonly,
        Boolean(input.getAttribute('aria-readonly')),
      );
    }

    () => {
      observer.disconnect();
    };
  }, [groupRef, inputRef]);
}

export default useListenInput;
