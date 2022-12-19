import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import AccordionButton from './AccordionButton';
import AccordionPanel from './AccordionPanel';
import Typography from '../Typography';
import docs from './readme.md'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: docs
      },
    },
  },
} as ComponentMeta<typeof Accordion>;

export const Default: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <AccordionItem>
      <AccordionButton>
        <Typography
            bold
            heading={1}
          >
            Item 1 Title
        </Typography>
      </AccordionButton>
      <AccordionPanel>
        <Typography body={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton>
        <Typography
              bold
              heading={1}
            >
              Item 2 Title
        </Typography>
      </AccordionButton>
      <AccordionPanel>
        <Typography body={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton>
        <Typography
              bold
              heading={1}
            >
              Item 3 Title
        </Typography>
      </AccordionButton>
      <AccordionPanel>
        <Typography body={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton>
        <Typography
              bold
              heading={1}
            >
              Item 4 Title
        </Typography>
      </AccordionButton>
      <AccordionPanel>
        <Typography body={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton>
        <Typography
              bold
              heading={1}
            >
              Item 5 Title
        </Typography>
      </AccordionButton>
      <AccordionPanel>
        <Typography body={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export const MultipleExpand: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <AccordionItem>
      <AccordionButton>
        <Typography
            bold
            heading={1}
          >
            Item 1 Title
        </Typography>
      </AccordionButton>
      <AccordionPanel>
        <Typography body={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton>
        <Typography
              bold
              heading={1}
            >
              Item 2 Title
        </Typography>
      </AccordionButton>
      <AccordionPanel>
        <Typography body={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);
MultipleExpand.args = {
  multiExpand: true,
};

export const InitiallyExpanded: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <AccordionItem>
      <AccordionButton>
        <Typography
            bold
            heading={1}
          >
            Item 1 Title
        </Typography>
      </AccordionButton>
      <AccordionPanel>
        <Typography body={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton>
        <Typography
              bold
              heading={1}
            >
              Item 2 Title
        </Typography>
      </AccordionButton>
      <AccordionPanel>
        <Typography body={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);
InitiallyExpanded.args = {
  defaultIndex: [1],
};