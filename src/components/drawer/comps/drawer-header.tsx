import { memo } from "react";
import { useTheme } from "styled-components";
import { AppIcons } from "../../../assets/icons";
import { useDrawerContext } from "../../../context/drawer-context/use-drawer-context";
import FlexView from "../../flex-view/flex-view";
import { IconButton } from "../../icon-button/icon-button";
import Separator from "../../separator/separator";

const DrawerHeader = () => {
  const {
    spacing: { GUTTER },
  } = useTheme();

  const { toggleDrawer } = useDrawerContext();

  return (
    <FlexView height={GUTTER * 2} $alignItems="center">
      <FlexView $flex={1} $justifyContent="start" $alignItems="center">
        <AppIcons.TessellLogo width={20.4} height={20.4} />
        <Separator width={4} />
        <AppIcons.TessellTypoLogo height={20} width={40} />
      </FlexView>
      <FlexView
        height={"auto"}
        width={32}
        $justifyContent="center"
        $alignItems="center"
      >
        <IconButton
          $iconName="Drawer"
          $size="regular"
          $ariaLabel="Drawer Close"
          $variant="intense"
          onClick={toggleDrawer}
        />
      </FlexView>
    </FlexView>
  );
};

export default memo(DrawerHeader);
