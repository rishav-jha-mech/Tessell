import React from "react";
import type { ButtonProps } from "./button-types";
import * as S from "./button.styled";

export const Button: React.FC<ButtonProps> = ({
  children,
  $type,
  $size,
  $ifFullWidth = false,
  $iconOnly = false,
  $isLoading = false,
  ...rest
}) => {
  return (
    <S.ButtonBase
      $type={$type}
      $size={$size}
      $ifFullWidth={$ifFullWidth}
      $iconOnly={$iconOnly}
      disabled={rest.disabled || $isLoading}
      {...rest}
    >
      {$isLoading ? <S.Loader /> : children}
    </S.ButtonBase>
  );
};
