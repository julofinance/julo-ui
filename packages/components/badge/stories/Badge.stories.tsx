import { Story, Meta } from '@storybook/react';

import Badge, { BadgeProps } from '../src';
import { BADGE_STATUS } from '../src/types';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: "`import { Badge } from '@julo-ui/badge';`",
      },
    },
  },
  argTypes: {
    children: {
      table: { disable: true },
      defaultValue: 'Label',
    },
    leftIcon: {
      table: { disable: true },
    },
    rightIcon: {
      table: { disable: true },
    },
    size: {
      control: 'radio',
      options: ['regular', 'small'],
    },
    status: {
      control: 'select',
      options: [...BADGE_STATUS],
    },
  },
} as Meta<typeof Badge>;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const BadgeDefault = () => <Badge>Label</Badge>;

export const BadgeWithIcon = Template.bind({});
BadgeWithIcon.args = {
  leftIcon: (
    <svg
      width='12'
      height='13'
      viewBox='0 0 12 13'
      xmlns='http://www.w3.org/2000/svg'
      fill='#F69539'
    >
      <path d='M9.39412 9.89412C8.49395 10.7943 7.27305 11.3 6.00001 11.3C4.72697 11.3 3.50607 10.7943 2.6059 9.89412C1.70573 8.99395 1.20001 7.77305 1.20001 6.50001C1.20001 5.22697 1.70573 4.00607 2.6059 3.1059C3.50607 2.20573 4.72697 1.70001 6.00001 1.70001C7.27305 1.70001 8.49395 2.20573 9.39412 3.1059C10.2943 4.00607 10.8 5.22697 10.8 6.50001C10.8 7.77305 10.2943 8.99395 9.39412 9.89412ZM6.42428 3.67575C6.31175 3.56323 6.15914 3.50001 6.00001 3.50001C5.84088 3.50001 5.68827 3.56323 5.57575 3.67575C5.46323 3.78827 5.40001 3.94088 5.40001 4.10001V6.50001C5.40005 6.65913 5.46328 6.81172 5.57581 6.92421L7.27261 8.62161C7.32836 8.67736 7.39454 8.72158 7.46737 8.75175C7.54021 8.78192 7.61828 8.79745 7.69711 8.79745C7.77595 8.79745 7.85401 8.78192 7.92685 8.75175C7.99969 8.72158 8.06587 8.67736 8.12161 8.62161C8.17736 8.56587 8.22158 8.49969 8.25175 8.42685C8.28192 8.35401 8.29745 8.27595 8.29745 8.19711C8.29745 8.11828 8.28192 8.04021 8.25175 7.96737C8.22158 7.89454 8.17736 7.82836 8.12161 7.77261L6.60001 6.25161V4.10001C6.60001 3.94088 6.5368 3.78827 6.42428 3.67575Z' />
    </svg>
  ),
  rightIcon: (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='#00ACF0'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.29279 4.29296C4.48031 4.10549 4.73462 4.00017 4.99979 4.00017C5.26495 4.00017 5.51926 4.10549 5.70679 4.29296L9.99979 8.58596L14.2928 4.29296C14.385 4.19745 14.4954 4.12127 14.6174 4.06886C14.7394 4.01645 14.8706 3.98886 15.0034 3.98771C15.1362 3.98655 15.2678 4.01186 15.3907 4.06214C15.5136 4.11242 15.6253 4.18667 15.7192 4.28056C15.8131 4.37446 15.8873 4.48611 15.9376 4.60901C15.9879 4.7319 16.0132 4.86358 16.012 4.99636C16.0109 5.12914 15.9833 5.26036 15.9309 5.38236C15.8785 5.50437 15.8023 5.61471 15.7068 5.70696L11.4138 9.99996L15.7068 14.293C15.8889 14.4816 15.9897 14.7342 15.9875 14.9964C15.9852 15.2586 15.88 15.5094 15.6946 15.6948C15.5092 15.8802 15.2584 15.9854 14.9962 15.9876C14.734 15.9899 14.4814 15.8891 14.2928 15.707L9.99979 11.414L5.70679 15.707C5.51818 15.8891 5.26558 15.9899 5.00339 15.9876C4.74119 15.9854 4.49038 15.8802 4.30497 15.6948C4.11956 15.5094 4.01439 15.2586 4.01211 14.9964C4.00983 14.7342 4.11063 14.4816 4.29279 14.293L8.58579 9.99996L4.29279 5.70696C4.10532 5.51943 4 5.26512 4 4.99996C4 4.73479 4.10532 4.48049 4.29279 4.29296Z'
      />
    </svg>
  ),
};
