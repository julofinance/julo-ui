export function assignAfter<T>(
  target: Record<string, unknown>,
  /**
   * @reason sources can be any kind of value that is passed
   *
   * @dev fransiscus.hermanto@julofinance.com
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...sources: any[]
) {
  if (typeof target === 'undefined' || target === null)
    throw new Error('Cannot convert undefined or null to object');

  const result: Record<string, unknown> = { ...target };
  for (const nextSource of sources) {
    if (!nextSource) continue;
    for (const nextKey in nextSource) {
      if (!Object.prototype.hasOwnProperty.call(nextSource, nextKey)) continue;
      if (nextKey in result) delete result[nextKey];
      result[nextKey] = nextSource[nextKey];
    }
  }
  return result as T;
}
