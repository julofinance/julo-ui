declare module '@julofinance/color-token';

declare module '*.svg' {
  const content: string | React.FC<React.SVGAttributes<SVGElement>>;
  export default content;
}