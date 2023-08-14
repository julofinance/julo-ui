// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isObject(value: any): value is Record<string, any> {
  const type = typeof value;
  return (
    value != null &&
    (type === 'object' || type === 'function') &&
    !Array.isArray(value)
  );
}

export default isObject;
