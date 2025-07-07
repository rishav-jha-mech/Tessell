import { memo } from "react";
import { AppIcons } from "../../../assets/icons";
import FlexView from "../../flex-view/flex-view";
import Separator from "../../separator/separator";
import { IconButton } from "../../icon-button/icon-button";
import { useTheme } from "styled-components";

const DrawerHeader = () => {
  const {
    spacing: { GUTTER },
  } = useTheme();

  return (
    <FlexView $height={GUTTER * 2} $align="center">
      <FlexView $flex={1} $justify="start" $align="center">
        <AppIcons.TessellLogo width={20.4} height={20.4} />
        <Separator $width={4} />
        <AppIcons.TessellTypoLogo height={20} width={40} />
      </FlexView>
      <FlexView $height={"auto"} $width={32} $justify="center" $align="center">
        <IconButton
          $iconName="Drawer"
          $size="regular"
          $ariaLabel="Drawer Close"
          $variant="intense"
        />
      </FlexView>
    </FlexView>
  );
};

export default memo(DrawerHeader);
