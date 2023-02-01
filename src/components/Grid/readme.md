`import { Grid, GridItem } from '@julofinance/react-components';`

- `Grid` : A wrapper component that wraps `GridItem` as children
- `GridItem` : A single grid item that can be use to contain another component, can be use multiple times inside `Grid` wrapper

`Breakpoints` 
Breakpoints are used individually inside `GridItem`
example: `<GridItem breakpoints={{md:3}}></GridItem>`

| breakpoint code | min-width |
|:---------------:|:---------:|
|xs|320|
|sm|499|
|md|768|
|lg|992|
|xl|1200|

`EqualHeight`
Makes each `GridItem` component to be the same height
default `value = 0` means `height=auto`

`Gutter`
Gutter is used if you want to give spacing between `GridItem`

example: `gutter=5` will make `GridItem1` and `GridItem2` 5 pixel in-between