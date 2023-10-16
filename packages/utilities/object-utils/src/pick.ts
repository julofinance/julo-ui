function pick<TData extends object>(
  object: TData,
  keysToPick:
    | (keyof TData)[]
    | readonly (keyof TData)[]
    | string[]
    | readonly string[],
) {
  const newObject: TData = {} as TData;

  for (const key of keysToPick) {
    newObject[key as keyof TData] = object[key as keyof TData];
  }

  /**
   * @dev fransiscus.hermanto@julofinance.com
   * @reason [eslint-disable-next-line @typescript-eslint/no-explicit-any] value of object can be any type
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return newObject as Record<typeof keysToPick[number], any>;
}

export default pick;
