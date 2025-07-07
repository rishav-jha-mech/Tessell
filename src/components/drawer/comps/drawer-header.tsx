import { memo } from "react";
import { AppIcons } from "../../../assets/icons";
import FlexView from "../../flex-view/flex-view";
import Separator from "../../separator/separator";
import { IconButton } from "../../icon-button/icon-button";

const DrawerHeader = () => {
  return (
    <FlexView $align="center">
      <FlexView $flex={1} $justify="start" $align="center">
        <AppIcons.TessellLogo width={20} />
        <Separator $width={4} />
        <AppIcons.TessellTypoLogo />
      </FlexView>
      <IconButton
        $iconName="Drawer"
        $size="large"
        $ariaLabel="Drawer Close"
        $variant="intense"
        $margin={8}
      />
    </FlexView>
  );
};

export default memo(DrawerHeader);
