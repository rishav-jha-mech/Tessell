import React from "react";
import { AppIcons } from "../../assets/icons";
import type { IconButtonProps } from "./icon-button-types";
import * as S from "./icon-button.styled";

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const { $iconName } = props;
  const IconComponent = AppIcons[$iconName];
  return (
    <S.IconButtonBase aria-label={props.$ariaLabel} {...props}>
      <S.IconWrapper>
        <IconComponent />
      </S.IconWrapper>
    </S.IconButtonBase>
  );
};
