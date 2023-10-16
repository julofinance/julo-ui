function omit<TData extends object>(
  object: TData,
  keysToOmit: (keyof TData)[] | readonly (keyof TData)[],
) {
  const cObject = { ...object };

  for (const key of keysToOmit) {
    delete cObject[key];
  }

  return cObject;
}

export default omit;
