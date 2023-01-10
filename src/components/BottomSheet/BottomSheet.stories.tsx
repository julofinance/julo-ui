import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from "@storybook/client-api";
import { PR50 } from '@julofinance/color-token'
import BottomSheet from './BottomSheet';
import BottomSheetHeader from './BottomSheetHeader';
import BottomSheetContent from './BottomSheetContent';
import Typography from '../Typography';
import docs from './readme.md'
import BottomSheetFooter from './BottomSheetFooter';
import { css } from '@emotion/css';

export default {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    docs: {
      description: {
        component: docs
      }
    }
  }
} as ComponentMeta<typeof BottomSheet>;

export const Default: ComponentStory<typeof BottomSheet> = ({onClose, ...args}) => {
  const [, updateArgs] = useArgs()

  return (
    <>
      <button onClick={() => updateArgs({isOpen: true})}>Open Bottom Sheet</button>
      <BottomSheet {...args} onClose={() => updateArgs({isOpen: false})}>
        <BottomSheetHeader>
          Bottom Sheet Title
        </BottomSheetHeader>
        <BottomSheetContent>
          <Typography fontSize="14px">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </BottomSheetContent>
      </BottomSheet>
    </>
  );
};
Default.args = {
  isOpen: false
};

export const HiddenDragBar: ComponentStory<typeof BottomSheet> = ({onClose, ...args}) => {
  const [, updateArgs] = useArgs()

  return (
    <>
      <button onClick={() => updateArgs({isOpen: true})}>Open Bottom Sheet</button>
      <BottomSheet {...args} onClose={() => updateArgs({isOpen: false})}>
        <BottomSheetHeader>
          Bottom Sheet Title
        </BottomSheetHeader>
        <BottomSheetContent>
          <Typography fontSize="14px">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </BottomSheetContent>
      </BottomSheet>
    </>
  );
};
HiddenDragBar.args = {
  isOpen: true,
  showDragBar: false
};

export const DisableCloseOnClickOutside: ComponentStory<typeof BottomSheet> = ({onClose, ...args}) => {
  const [, updateArgs] = useArgs()

  return (
    <>
      <button onClick={() => updateArgs({isOpen: true})}>Open Bottom Sheet</button>
      <BottomSheet {...args} onClose={() => updateArgs({isOpen: false})}>
        <BottomSheetHeader>
          Bottom Sheet Title
        </BottomSheetHeader>
        <BottomSheetContent>
          <Typography fontSize="14px">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </BottomSheetContent>
      </BottomSheet>
    </>
  );
};
DisableCloseOnClickOutside.args = {
  isOpen: true,
  closeOnClickOutside: false
};

export const WithFooter: ComponentStory<typeof BottomSheet> = ({onClose, ...args}) => {
  const [, updateArgs] = useArgs()

  return (
    <>
      <button onClick={() => updateArgs({isOpen: true})}>Open Bottom Sheet</button>
      <BottomSheet {...args} onClose={() => updateArgs({isOpen: false})}>
        <BottomSheetHeader>
          Bottom Sheet Title
        </BottomSheetHeader>
        <BottomSheetContent>
          <Typography fontSize="14px">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </BottomSheetContent>
        <BottomSheetFooter>
          <button>
            Bottom sheet footer
          </button>
        </BottomSheetFooter>
      </BottomSheet>
    </>
  );
};
WithFooter.args = {
  isOpen: false
}

export const CustomHeader: ComponentStory<typeof BottomSheet> = ({onClose, ...args}) => {
  const [, updateArgs] = useArgs()

  return (
    <>
      <button onClick={() => updateArgs({isOpen: true})}>Open Bottom Sheet</button>
      <BottomSheet {...args} onClose={() => updateArgs({isOpen: false})}>
        <BottomSheetHeader>
          <div 
            className={css`
              display: flex;
              align-items: center;
              padding: 16px;
              justify-content: space-between;
            `} 
          >
            <Typography fontSize="16px" fontWeight={700}>
              Bottom Sheet Title
            </Typography>
            <span 
              className={css`
                color: ${PR50};
                cursor: pointer;
              `} 
              onClick={() => updateArgs({isOpen: false})}
            >
              &#x2715;
            </span>
          </div>
        </BottomSheetHeader>
        <BottomSheetContent>
          <Typography fontSize="14px">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </BottomSheetContent>
        <BottomSheetFooter>
          <button>
            Bottom sheet footer
          </button>
        </BottomSheetFooter>
      </BottomSheet>
    </>
  );
};
CustomHeader.args = {
  isOpen: false,
  showDragBar: false
}