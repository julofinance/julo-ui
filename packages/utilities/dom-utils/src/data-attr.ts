import { Booleanish } from './types';

const dataAttr = (condition?: boolean) =>
  (condition ? '' : undefined) as Booleanish;

export default dataAttr;
