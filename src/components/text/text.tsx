import React from "react";
import type { TextProps } from "./text-types";
import * as S from "./text.styled";

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  (
    { children, $renderAs, $color, $displayAs = "block", ...restProps },
    ref
  ) => {
    return (
      <S.TextBase
        ref={ref}
        $renderAs={$renderAs}
        $color={$color}
        $displayAs={$displayAs}
        {...restProps}
      >
        {children}
      </S.TextBase>
    );
  }
);

Text.displayName = "Text";
