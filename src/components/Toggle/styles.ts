import { css } from "@emotion/css";
import { NT50, SG30, NT30 } from "@julofinance/color-token";
import { Size, TgInputProps, TgSliderTrackProps, TgThumbProps, TgWrapperProps } from "./type";

const sizer = (size: Size) => {
  let trackW = 44;
  let trackH = 24;
  let thumbW = 20;
  let thumbH = 20;

  switch(size){
    case "sm" :
      trackW = 37;
      trackH = 20;
      thumbH = thumbW = 16;
    break;
    case "lg" :
      trackW = 59;
      trackH = 32;
      thumbH = thumbW = 28;
    break;
    default :
      trackW = 44;
      trackH = 24;
      thumbW = thumbH = 20;
  }

  return {
    trackW,
    trackH,
    thumbW,
    thumbH,
    translateX: trackW - thumbW - 4
  }
}


export const tgWrapper = (props: TgWrapperProps) => css`
  cursor: ${props.disabled ? "not-allowed" : "pointer"};
  display: inline-block;
  position: relative;
  line-height: 0;
`;

export const tgInput = (props: TgInputProps) => css`
  border: 0px none;
  padding: 0px;
  width: 0px;
  height: 0px;
  overflow: hidden;
  position: absolute;
  clip: rect(0px, 0px, 0px, 0px);
  white-space: nowrap;
  &:checked + span span {
    transform: translateX(${sizer(props.size).translateX}px);
  }
  &:checked + span {
    background-color: ${props.backgroundColor || SG30};
  }
  &:disabled + span {
    background-color: ${NT30};
  }
`;

export const tgSliderTrack = (props: TgSliderTrackProps) =>  css`
  display: flex;
  align-items: center;
  width: ${sizer(props.size).trackW}px;
  height: ${sizer(props.size).trackH}px;
  border-radius: 100px;
  background-color: ${NT50};
  transition: background-color .2s;
`;

export const tgSliderThumb = (props: TgThumbProps) => css`
  border-radius: 100%;
  width: ${sizer(props.size).thumbW}px;
  height: ${sizer(props.size).thumbH}px;
  background-color: white;
  transition: transform .2s;
  margin-left: 2px;
  margin-right: 2px;
`;