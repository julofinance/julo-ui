import { SystemStyleObject } from '@julo-ui/system';

import { AlertStatus } from '../../types';

export const alertTitle: Record<AlertStatus, SystemStyleObject> = {
  info: {
    color: 'var(--colors-blue-50)',
  },
  negative: {
    color: 'var(--colors-red-50)',
  },
  positive: {
    color: 'var(--colors-green-50)',
  },
  warning: {
    color: 'var(--colors-orange-50)',
  },
  neutrals: {
    color: 'var(--colors-neutrals-100)',
  },
};
