import React, { memo } from "react";
import { tgInput, tgSliderThumb, tgSliderTrack, tgWrapper } from "./styles";
import { ToggleProps } from "./type";

const Toggle = (props: ToggleProps) => {
  const { backgroundColor, size, ...inputProps } = props;

  return (
    <label className={tgWrapper({disabled: props.disabled})}>
      <input
        type="checkbox"
        className={tgInput({backgroundColor, size: size || "md"})}
        {...inputProps}
      />
      <span className={tgSliderTrack({size: size || "md"})}>
        <span className={tgSliderThumb({size: size || "md"})}/>
      </span>
    </label>
  );
};

export default memo(Toggle);