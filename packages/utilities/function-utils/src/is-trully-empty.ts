// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTrullyEmpty(value: any): value is undefined | null {
  return value === undefined || value === null;
}

export default isTrullyEmpty;
