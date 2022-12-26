`import { BottomSheet, BottomSheetHeader, BottomSheetContent } from '@julofinance/react-components';`

- `BottomSheet` : A wrapper component including the overlay.
- `BottomSheetHeader`: Rendered as the title of the bottom sheet. Accept a string or `ReactNode` as children. If a plain string supplied, it will return `<Typography>` component with `heading={3}` and `fontWeight={700}`
- `BottomSheetContent`: Scrollable component. This is where the content the bottom sheet should be placed.