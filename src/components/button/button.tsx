import React from "react";
import type { ButtonProps } from "./button-types";
import * as S from "./button.styled";
import { AppIcons } from "../../assets/icons";
import Separator from "../separator/separator";
import { useTheme } from "styled-components";

export const Button: React.FC<ButtonProps> = ({
  children,
  $icon,
  $type,
  $size,
  $isFullWidth = false,
  $iconOnly = false,
  $isLoading = false,
  ...rest
}) => {
  const { iconButton } = useTheme();
  const Icon = AppIcons[$icon];
  const { iconSize } = iconButton.sizes[$size];

  return (
    <S.ButtonBase
      $type={$type}
      $size={$size}
      $isFullWidth={$isFullWidth}
      $iconOnly={$iconOnly}
      disabled={rest.disabled || $isLoading}
      {...rest}
    >
      {$isLoading ? (
        <S.Loader />
      ) : (
        <>
          <Icon height={iconSize} width={iconSize} />
          {!$iconOnly && <Separator $width={8} />}
          {children}
        </>
      )}
    </S.ButtonBase>
  );
};
