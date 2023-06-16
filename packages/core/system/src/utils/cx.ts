export type ArrayClassNamesArg = Array<ClassNamesArg>;
export type ClassNamesArg =
  | undefined
  | null
  | string
  | boolean
  | { [className: string]: boolean | null | undefined }
  | ArrayClassNamesArg;

export function isValidClassName(className: string) {
  if (/^[0-9]/.test(className)) return false;

  if (/^-\d/.test(className)) return false;

  return true;
}

export function cx(...classNames: Array<ClassNamesArg>) {
  const result: string[] = [];

  for (const className of classNames) {
    if (!className) continue;

    switch (typeof className) {
      case 'object':
        let classStr = '';
        if (Array.isArray(className)) {
          result.push(
            className
              .map((v) => {
                return cx(v);
              })
              .join(' '),
          );

          continue;
        }

        Object.keys(className).forEach((key) => {
          if (className[key]) classStr += key + ' ';
        });

        result.push(classStr.trim());
        continue;

      case 'string':
        result.push(className);
        continue;

      default:
        continue;
    }
  }

  return result.join(' ');
}
