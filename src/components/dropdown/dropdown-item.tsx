import React from "react";
import * as S from "./dropdown.styled";
import type { DropdownItemProps } from "./dropdown-types";
import FlexView from "../flex-view/flex-view";
import { Text } from "../text/text";

export const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  $isSelected = false,
  $leadingItem,
  $trailingItem,
  onClick,
}) => {
  return (
    <S.DropdownItemBase
      $align="center"
      $justify="space-between"
      $isSelected={$isSelected}
      onClick={onClick}
    >
      <FlexView $align="center" $justify="start" $flex="1">
        {$leadingItem && <S.LeadingItem>{$leadingItem}</S.LeadingItem>}
        <Text $renderAs="bodyPrimary" $color="inherit">
          {label}
        </Text>
      </FlexView>
      {$trailingItem && <S.TrailingItem>{$trailingItem}</S.TrailingItem>}
    </S.DropdownItemBase>
  );
};
