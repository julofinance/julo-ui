import { css } from '@emotion/react';
import { SystemStyleObject } from '@julo-ui/system';

export const inputGroupCx = css`
  width: 100%;

  display: flex;
  position: relative;

  isolation: isolate;
`;

export const inputGroupWithTextAreaCx = css`
  .julo-input-element,
  .julo-input-addon {
    height: auto;
  }
`;

export const inputGroupWithElementCx = css`
  border: 1px solid var(--colors-neutrals-40);
  border-radius: 0.5rem;

  &[data-input-disabled='true'] {
    border-color: var(--colors-neutrals-50);
    background-color: var(--colors-neutrals-30);
    * {
      background-color: transparent;
    }
  }

  &[data-input-invalid='true'] {
    border-color: var(--colors-red-30);
  }

  &[data-input-focus='true'] {
    border-color: var(--colors-primary-20);
  }
`;

export const inputGroupWithAddonCx = css`
  .julo-input-element {
    position: absolute;
    width: 3rem;
    height: 100%;
    padding: 0;

    &[data-element-placement='right'] {
      top: 0;
      right: 0;
      padding-left: 0;
    }

    &[data-element-placement='left'] {
      top: 0;
      left: 0;
      padding-right: 0;
    }
  }
`;

export const inputElementSx = ({
  leftAddon,
  rightAddon,
  leftElement,
  rightElement,
  isOnlyElement,
}: {
  leftAddon: boolean;
  rightAddon: boolean;
  leftElement: boolean;
  rightElement: boolean;
  isOnlyElement: boolean;
}): SystemStyleObject => ({
  flex: 1,
  order: 2,
  ...(isOnlyElement && {
    border: 'none',
  }),
  ...(!isOnlyElement && {
    ...(leftAddon && {
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    }),
    ...(rightAddon && {
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
    }),
    ...(leftElement && {
      paddingLeft: '3rem',
    }),
    ...(rightElement && {
      paddingRight: '3rem',
    }),
  }),
});
