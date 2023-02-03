import { css } from '@emotion/css';
import { NT30, NT40, NT90 } from '@julofinance/color-token';

export const wrapperCountdown = css`
  display: inline-flex;
  background: ${NT30};
  border: 1px solid ${NT40};
  border-radius: 100px;
  gap: 4px;
  padding: 4px 8px;
`;

export const cStyle = css`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${NT90};
`;

export const clockIcon = css`
  fill: ${NT90};
  height: 14px;
  width: 14px;
`;
