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
  position: relative;
  border-radius: 0.5rem;

  &::after {
    content: '';
    position: absolute;

    user-select: none;
    pointer-events: none;

    border: 1px solid var(--colors-neutrals-40);
    border-radius: inherit;

    width: 100%;
    height: 100%;

    transition: all ease 0.2s;
  }

  &[data-input-readonly='false'] {
    &[data-input-invalid='true']::after {
      border-color: var(--colors-red-30);
    }

    &[data-input-disabled='true'] {
      &::after {
        border-color: var(--colors-neutrals-50);
      }
      background-color: var(--colors-neutrals-30);
      * {
        background-color: transparent;
      }
    }

    &[data-input-focus='true']::after {
      border-color: var(--colors-primary-20);
    }
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
    ...(leftElement && {
      paddingLeft: '3rem',
    }),
    ...(rightElement && {
      paddingRight: '3rem',
    }),
  }),
  ...((leftAddon || (leftElement && isOnlyElement)) && {
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
  }),
  ...((rightAddon || (rightElement && isOnlyElement)) && {
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
  }),
});
