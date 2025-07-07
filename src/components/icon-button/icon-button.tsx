import React from "react";
import { AppIcons } from "../../assets/icons";
import type { IconButtonProps } from "./icon-button-types";
import * as S from "./icon-button.styled";

export const IconButton: React.FC<IconButtonProps> = ({
  $iconName,
  $variant,
  $size,
  $isDisabled = false,
  $ariaLabel,
  ...rest
}) => {
  const IconComponent = AppIcons[$iconName];
  return (
    <S.IconButtonBase
      $variant={$variant}
      $size={$size}
      aria-label={$ariaLabel}
      disabled={$isDisabled}
      {...rest}
    >
      <S.IconWrapper>
        <IconComponent />
      </S.IconWrapper>
    </S.IconButtonBase>
  );
};
