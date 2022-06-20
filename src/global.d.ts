declare module '@julofinance/color-token';
declare module '@testing-library/react';

declare module '*.svg' {
  const content: string | React.FC<React.SVGAttributes<SVGElement>>;
  export default content;
}