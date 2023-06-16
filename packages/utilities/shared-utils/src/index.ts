type Booleanish = boolean | 'true' | 'false';

export const dataAttr = (condition?: boolean) =>
  (condition ? '' : undefined) as Booleanish;

export const ariaAttr = (condition?: boolean) => (condition ? true : undefined);
