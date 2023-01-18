export type CountdownProps = {
  date: number; // Epoch miliseconds
  messageError: string; // custom message error
  messageTimesUp: string; // custom message times up
  showError: boolean; // to show messageError
  onComplete: (value: boolean) => void; // sent true value if complete
  onReset: (value: boolean) => void; // sent true value if reset
  'data-testid'?: string; 
};
