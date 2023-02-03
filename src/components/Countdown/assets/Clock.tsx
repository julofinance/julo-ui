import React, { SVGProps } from 'react';

const Clock = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45395 20.5886 7.01215 18.7882 5.2118C16.9879 3.41145 14.5461 2.40002 12 2.40002C9.45395 2.40002 7.01215 3.41145 5.2118 5.2118C3.41145 7.01215 2.40002 9.45395 2.40002 12C2.40002 14.5461 3.41145 16.9879 5.2118 18.7882C7.01215 20.5886 9.45395 21.6 12 21.6ZM13.2 7.20002C13.2 6.88176 13.0736 6.57654 12.8486 6.3515C12.6235 6.12645 12.3183 6.00002 12 6.00002C11.6818 6.00002 11.3765 6.12645 11.1515 6.3515C10.9265 6.57654 10.8 6.88176 10.8 7.20002V12C10.8001 12.3183 10.9266 12.6234 11.1516 12.8484L14.5452 16.2432C14.6567 16.3547 14.7891 16.4432 14.9347 16.5035C15.0804 16.5638 15.2366 16.5949 15.3942 16.5949C15.5519 16.5949 15.708 16.5638 15.8537 16.5035C15.9994 16.4432 16.1317 16.3547 16.2432 16.2432C16.3547 16.1317 16.4432 15.9994 16.5035 15.8537C16.5638 15.708 16.5949 15.5519 16.5949 15.3942C16.5949 15.2366 16.5638 15.0804 16.5035 14.9347C16.4432 14.7891 16.3547 14.6567 16.2432 14.5452L13.2 11.5032V7.20002Z'
        fill='#404040'
      />
    </svg>
  );
};

export default Clock;
