// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isRef(ref: any): ref is React.RefObject<any> {
  return typeof ref === 'object' && ref !== null && 'current' in ref;
}

export default isRef;
