import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from './Grid';
import GridItem from './GridItem';
import Typography from '../Typography';
import docs from './readme.md';

export default {
    title: 'Components/Grid',
    component: Grid,
    parameters: {
      docs: {
        description: {
          component: docs,
        },
      },
    },
  } as ComponentMeta<typeof Grid>;

  export const Default: ComponentStory<typeof Grid> = (args) => (
    <Grid {...args}>
        <GridItem>
            <Typography>
                Item 1
            </Typography>
        </GridItem>
        <GridItem>
            <Typography>
                Item 2
            </Typography>
        </GridItem>
        <GridItem>
            <Typography>
                Item 3
            </Typography>
        </GridItem>
        <GridItem>
            <Typography>
                Item 4
            </Typography>
        </GridItem>
        <GridItem>
            <Typography>
                Item 5
            </Typography>
        </GridItem>
        <GridItem>
            <Typography>
                Item 6
            </Typography>
        </GridItem>
    </Grid>
  );

  export const GridWithBreakpoint: ComponentStory<typeof Grid> = (args) => (
    <Grid {...args}>
        <GridItem breakpoints={{xs:1}}>
            <Typography>
                Item 1
            </Typography>
        </GridItem>
        <GridItem breakpoints={{sm:2}}>
            <Typography>
                Item 2
            </Typography>
        </GridItem>
        <GridItem breakpoints={{md:3}}>
            <Typography>
                Item 3
            </Typography>
        </GridItem>
        <GridItem breakpoints={{md:4}}>
            <Typography>
                Item 4
            </Typography>
        </GridItem>
        <GridItem breakpoints={{md:5}}>
            <Typography>
                Item 5
            </Typography>
        </GridItem>
        <GridItem breakpoints={{md:6}}>
            <Typography>
                Item 6
            </Typography>
        </GridItem>
    </Grid>
  );

  export const GridWithGutter = Default.bind({});
  GridWithGutter.args = {
    gutter: 10
  };

  export const GridAlignAndJustify = Default.bind({});
  GridAlignAndJustify.args = {
    align: 'center',
    justify: 'center',
  };

  export const GridItemWithEqualHeight = Default.bind({});
  GridItemWithEqualHeight.args = {
    align:'center',
    justify:'center',
    gutter:30,
    equalHeight: 75,
  };