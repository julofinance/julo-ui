function split<T extends object, K extends keyof T>(
  object: T,
  keysToSplit: K[],
) {
  const picked: T = {} as T;
  const omitted: T = {} as T;

  for (const [key, value] of Object.entries(object)) {
    if (keysToSplit.some((keyToSplit) => keyToSplit === key)) {
      picked[key as keyof T] = value;
      continue;
    }

    omitted[key as keyof T] = value;
  }

  return [picked, omitted] as [
    {
      [P in K]: T[P];
    },
    Omit<T, K>,
  ];
}

export default split;
