import { useTheme } from "styled-components";
import FlexView from "../flex-view/flex-view";
import { Text } from "../text/text";
import type { HeaderTitleProps } from "./header-title-types";
import { IconButton } from "../icon-button/icon-button";

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  onDismiss,
  trailingItem,
  backgroundColor,
}) => {
  const {
    spacing: { GAP, GUTTER },
  } = useTheme();

  return (
    <FlexView
      $alignItems="center"
      $justifyContent="space-between"
      $paddingHorizontal={GAP}
      height={GUTTER * 3}
      $borderTopWidth={1}
      background={backgroundColor ?? "opacity-transparent"}
    >
      <FlexView $flex={1}>
        <Text $renderAs="heading/primary">{title}</Text>
      </FlexView>
      <FlexView $alignItems="center" $gap={GUTTER / 2}>
        {trailingItem}
        {onDismiss && (
          <IconButton
            $iconName="Close"
            $size="regular"
            $variant="intense"
            $ariaLabel="Close"
            onClick={onDismiss}
          />
        )}
      </FlexView>
    </FlexView>
  );
};

export default HeaderTitle;
