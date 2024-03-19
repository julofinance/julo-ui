import { SystemStyleObject } from '@julo-ui/system';

import { AlertStatus } from '../../types';

export const alertDescription: Record<AlertStatus, SystemStyleObject> = {
  info: {
    color: 'var(--colors-blue-40)',
  },
  negative: {
    color: 'var(--colors-red-40)',
  },
  positive: {
    color: 'var(--colors-green-40)',
  },
  warning: {
    color: 'var(--colors-orange-40)',
  },
  neutrals: {
    color: 'var(--colors-neutrals-90)',
  },
};
