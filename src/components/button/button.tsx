import React from "react";
import { useTheme } from "styled-components";
import { AppIcons } from "../../assets/icons";
import Separator from "../separator/separator";
import type { ButtonProps } from "./button-types";
import * as S from "./button.styled";
import FlexView from "../flex-view/flex-view";

export const Button: React.FC<ButtonProps> = ({
  children,
  $icon,
  $type,
  $size,
  $iconSize = $size,
  $isFullWidth = false,
  $iconOnly = false,
  $isLoading = false,
  $isSelected = false,
  $marginBottom = 0,
  $trailingIcon,
  $isHorizontallyCentered = true,
  ...rest
}) => {
  const { iconButton, buttons } = useTheme();
  const LeadingIcon = AppIcons[$icon];
  const TrailingIcon = $trailingIcon ? AppIcons[$trailingIcon] : null;

  const { iconSize } = iconButton.sizes[$iconSize];
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
      $marginBottom={$marginBottom}
      $isHorizontallyCentered={$isHorizontallyCentered}
      disabled={rest.disabled || $isLoading}
      {...rest}
    >
      {$isLoading ? (
        <S.Loader />
      ) : (
        <>
          <LeadingIcon height={iconSize} width={iconSize} />
          {!$iconOnly && <Separator $width={iconMarginRight} />}
          {children}
        </>
      )}
      {TrailingIcon && (
        <FlexView $align="center" $justify="flex-end" $flex={1}>
          <Separator $width={iconMarginRight} />
          <TrailingIcon height={iconSize} width={iconSize} />
        </FlexView>
      )}
    </S.ButtonBase>
  );
};
