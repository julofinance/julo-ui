`import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@julofinance/react-components';`

- `Accordion` : A wrapper component that wraps `AccordionItem` as children and assigns an index to them.
- `AccordionItem` : A single accordion item / section. Consist of `AccordionButton` and `AccordionPanel`.
- `AccordionButton`: Rendered as the title of the accordion item. Also a clickable component that toggles the expand / collapse state of the accordion item.
- `AccordionPanel`: Collapsible component. This is where the content / description of the item should be placed.