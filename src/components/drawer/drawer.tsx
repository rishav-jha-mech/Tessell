import { useTheme } from "styled-components";
import { Button } from "../button/button";
import FlexView from "../flex-view/flex-view";
import Separator from "../separator/separator";
import { Text } from "../text/text";
import DrawerHeader from "./comps/drawer-header";
import * as S from "./drawer.styled";
import { Dropdown } from "../dropdown/dropdown";
import type { DrawerProps } from "./drawer-types";
import type { ButtonProps } from "../button/button-types";
import { useMemo } from "react";
import { IconButton } from "../icon-button/icon-button";

const Drawer: React.FC<DrawerProps> = ({
  dropdown,
  menuOptions,
  footerOptions,
  isOpen,
  toggleDrawer,
}) => {
  const {
    spacing: { GUTTER },
  } = useTheme();

  const menuBtns = useMemo(
    () =>
      menuOptions.map(
        ({ $icon, label, $isSelected, onClick }) =>
          ({
            $icon,
            $isSelected,
            $size: "regular",
            $type: "tertiary",
            $isHorizontallyCentered: false,
            children: (
              <Text $renderAs="Text-body/primary/primary" $color="inherit">
                {label}
              </Text>
            ),
            onClick: onClick,
            $marginBottom: 8,
          } as ButtonProps)
      ),
    [menuOptions]
  );

  const footerBtns = useMemo(
    () =>
      footerOptions.map(
        ({ $icon, label, $isSelected, onClick }) =>
          ({
            $icon,
            $isSelected,
            $size: "regular",
            $type: "tertiary",
            $isHorizontallyCentered: false,
            children: (
              <Text $renderAs="Text-body/primary/primary" $color="inherit">
                {label}
              </Text>
            ),
            onClick: onClick,
            $marginBottom: 6,
          } as ButtonProps)
      ),
    [footerOptions]
  );

  return (
    <S.DrawerWrapper $isOpen={isOpen}>
      <FlexView $direction="column" $flex={1}>
        <DrawerHeader />
        <Separator height={11} />
        <Button
          $icon="Switcher"
          $size="small"
          $iconSize="medium"
          $type="tertiary"
          $isHorizontallyCentered={false}
        >
          <Text $renderAs="heading/form titles" $color="primary">
            Apps
          </Text>
        </Button>
        <Separator height={GUTTER / 2} />
        <Dropdown
          $options={dropdown.options}
          $placeholder="Select an option"
          $value={dropdown.selected}
          onChange={dropdown.handleChange}
        />
        <Separator height={GUTTER / 2} />
        {menuBtns.map((btnOptions, index) => (
          <Button key={index} {...btnOptions} />
        ))}
        <FlexView $flex={1} />
        {footerBtns.map((btnOptions, index) => (
          <Button key={index} {...btnOptions} />
        ))}
        <Separator height={12} />
      </FlexView>
      <S.CloseDrawerBtnWrapper $isOpen={isOpen}>
        <IconButton
          $iconName="ChevronLeft"
          $borderless={false}
          $ariaLabel="Close Menu"
          $size="regular"
          $iconColor="text-100"
          $variant="intense"
          $rounded={true}
          onClick={toggleDrawer}
        />
      </S.CloseDrawerBtnWrapper>
    </S.DrawerWrapper>
  );
};

export default Drawer;
