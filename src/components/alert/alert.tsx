import { useState } from "react";
import { AppIcons } from "../../assets/icons";
import FlexView from "../flex-view/flex-view";
import { IconButton } from "../icon-button/icon-button";
import { Text } from "../text/text";
import { AlertThemeMapping } from "./alert-constants";
import type { AlertProps } from "./alert-types";
import { useTheme } from "styled-components";

const Alert: React.FC<AlertProps> = ({
  message,
  theme = "info",
  isDismissible = true,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  const { colors } = useTheme();
  const {
    icon,
    iconColor: iconColorKey,
    backgroundColor,
  } = AlertThemeMapping[theme] || {};
  const iconColor = colors[iconColorKey];
  const Icon = icon ? AppIcons[icon] : null;

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <FlexView
      $background={backgroundColor}
      $gap={8}
      $height={"40px"}
      $borderRadius={4}
      $align="center"
      $paddingHorizontal={8}
    >
      {Icon && <Icon color={iconColor} height={20} width={20} />}
      <FlexView $flex={1}>
        <Text $renderAs="bodyPrimary" $userSelect="none">
          {message}
        </Text>
      </FlexView>
      {isDismissible && (
        <IconButton
          $iconName="Close"
          $size="regular"
          $variant="intense"
          $ariaLabel="Close"
          onClick={handleClose}
        />
      )}
    </FlexView>
  );
};

export default Alert;
