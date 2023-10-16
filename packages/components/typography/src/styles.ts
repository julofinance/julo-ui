import { SystemStyleObject } from '@julo-ui/system';

export const typographySx = ({
  fontWeight,
  bold,
}: {
  fontWeight?: string;
  bold: boolean;
}): SystemStyleObject => ({
  fontWeight: String(fontWeight || (bold ? 700 : 400)),
});
