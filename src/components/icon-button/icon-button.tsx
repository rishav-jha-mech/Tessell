import React from "react";
import * as S from "./icon-button.styled";
import type { IconButtonProps } from "./icon-button-types";
import { useTheme } from "styled-components";
import { AppIcons } from "../../assets/icons";

export const IconButton: React.FC<IconButtonProps> = ({
  $iconName,
  $variant,
  $size,
  $isDisabled = false,
  $ariaLabel,
  ...rest
}) => {
  const {
    iconButton: { sizes },
  } = useTheme();
  const IconComponent = AppIcons[$iconName];

  const iconSize = sizes[$size].iconSize;
  return (
    <S.IconButtonBase
      $variant={$variant}
      $size={$size}
      aria-label={$ariaLabel}
      disabled={$isDisabled}
      {...rest}
    >
      <S.IconWrapper iconSize={iconSize}>{<IconComponent />}</S.IconWrapper>
    </S.IconButtonBase>
  );
};
