import { css } from '@emotion/react';

import { SystemStyleObject } from '@julo-ui/system';

import { BadgeSize, BadgeStatus } from './types';

export const badgeCx = ({ withIcon }: { withIcon?: boolean }) => css`
  display: inline-flex;
  align-items: center;

  padding: 0.25rem ${withIcon ? '0.5rem' : '1.0625rem'};

  .julo-badge__left-icon {
    margin-right: 0.25rem;
  }

  .julo-badge__right-icon {
    margin-left: 0.25rem;
  }

  .julo-badge__left-icon,
  .julo-badge__right-icon {
    display: flex;
  }

  .julo-badge__left-icon svg,
  .julo-badge__right-icon svg {
    width: 0.875rem;
    height: 0.875rem;
  }

  .julo-badge__content {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }

  border-radius: 6.25rem;
  border-width: 1px;
  border-style: solid;
`;

export const badgeSizeSx: Record<BadgeSize, SystemStyleObject> = {
  small: {
    paddingTop: '0',
    paddingBottom: '0',
    '.julo-badge__left-icon svg,\n    .julo-badge__right-icon svg': {
      width: '0.75rem',
      height: '0.75rem',
    },
  },
  regular: {},
};

export const badgeStatusSx: Record<BadgeStatus, SystemStyleObject> = {
  warning: {
    borderColor: 'var(--colors-orange-20)',
    backgroundColor: 'var(--colors-orange-10)',
    color: 'var(--colors-orange-30)',
    '.julo-badge__left-icon svg, .julo-badge__right-icon svg': {
      fill: 'var(--colors-orange-30)',
    },
  },
  error: {
    borderColor: 'var(--colors-red-20)',
    backgroundColor: 'var(--colors-red-10)',
    color: 'var(--colors-red-30)',
    '.julo-badge__left-icon svg, .julo-badge__right-icon svg': {
      fill: 'var(--colors-red-30)',
    },
  },
  neutral: {
    borderColor: 'var(--colors-neutrals-40)',
    backgroundColor: 'var(--colors-neutrals-30)',
    color: 'var(--colors-neutrals-90)',
    '.julo-badge__left-icon svg, .julo-badge__right-icon svg': {
      fill: 'var(--colors-neutrals-90)',
    },
  },
  success: {
    borderColor: 'var(--colors-green-20)',
    backgroundColor: 'var(--colors-green-10)',
    color: 'var(--colors-green-30)',
    '.julo-badge__left-icon svg, .julo-badge__right-icon svg': {
      fill: 'var(--colors-green-30)',
    },
  },
  info: {
    borderColor: 'var(--colors-blue-20)',
    backgroundColor: 'var(--colors-blue-10)',
    color: 'var(--colors-blue-30)',
    '.julo-badge__left-icon svg, .julo-badge__right-icon svg': {
      fill: 'var(--colors-blue-30)',
    },
  },
};
