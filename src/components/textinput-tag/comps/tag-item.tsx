import React from "react";
import FlexView from "../../flex-view/flex-view";
import styled, { useTheme } from "styled-components";
import { AppIcons } from "../../../assets/icons";
import { Text } from "../../text/text";

interface TagItemProps {
  label: string;
  onDismiss: () => void;
}

const TagItem: React.FC<TagItemProps> = ({ label, onDismiss }) => {
  const {
    spacing: { GUTTER },
    colors,
  } = useTheme();
  return (
    <FlexView
      $alignItems="center"
      $justifyContent="space-between"
      $paddingVertical={GUTTER / 8}
      $paddingHorizontal={GUTTER / 4}
      $gapX={0.25}
      $borderRadius={4}
      background="surface-100"
    >
      <Text $renderAs="Text-body/secondary/secondary" $userSelect="none">
        {label}
      </Text>
      <CloseBtn onClick={onDismiss}>
        <AppIcons.Close height={10.5} width={10.5} color={colors.subtler} />
      </CloseBtn>
    </FlexView>
  );
};

export default TagItem;

const CloseBtn = styled.span`
  cursor: pointer;
`;
