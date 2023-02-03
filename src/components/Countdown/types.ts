export interface CountdownProps {
  date: number; // Epoch miliseconds
  onComplete: (value: boolean) => void; // sent true value if complete
  onReset?: (value: boolean) => void; // sent true value if reset
  'data-testid'?: string;
}
