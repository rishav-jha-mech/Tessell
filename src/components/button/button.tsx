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
  $isSelected = false,
  $isHorizontallyCentered = true,
  ...rest
}) => {
  const { iconButton, buttons } = useTheme();
  const Icon = AppIcons[$icon];
  const { iconSize } = iconButton.sizes[$size];
  const {
    default: { iconMarginRight },
  } = buttons.variants[$type];

  return (
    <S.ButtonBase
      $type={$type}
      $size={$size}
      $isFullWidth={$isFullWidth}
      $iconOnly={$iconOnly}
      $isSelected={$isSelected}
      $isHorizontallyCentered={$isHorizontallyCentered}
      disabled={rest.disabled || $isLoading}
      {...rest}
    >
      {$isLoading ? (
        <S.Loader />
      ) : (
        <>
          <Icon height={iconSize} width={iconSize} />
          {!$iconOnly && <Separator $width={iconMarginRight} />}
          {children}
        </>
      )}
    </S.ButtonBase>
  );
};
