import { TypographyStyleProps } from './types';

type StyleKey = keyof TypographyStyleProps;

const STYLE_KEYS = [
  'bold',
  'color',
  'fontSize',
  'fontWeight',
  'lineHeight',
] as StyleKey[];

export function omitStyleProps(props: Record<string, unknown>) {
  const clone = { ...props };

  delete clone['type'];

  for (const key of STYLE_KEYS) {
    if (key in clone) {
      delete clone[key as string];
    }
  }

  return clone;
}

export function omitHTMLProps(props: Record<string, unknown>) {
  const clone = { ...props };

  for (const key in props) {
    if (!STYLE_KEYS.includes(key as StyleKey)) {
      delete clone[key as string];
    }
  }

  return clone;
}
