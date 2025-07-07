import { useTheme } from "styled-components";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import FlexView from "../flex-view/flex-view";
import type { HeaderProps } from "./header-props";
import { Text } from "../text/text";
import Separator from "../separator/separator";
import { IconButton } from "../icon-button/icon-button";
import Avatar from "../avatar/avatar";
/**
 * There is a static part to the header, that doesn't change.
 * The left part where we show Breadcrums is dynamic, it changes from page to page.
 * The right part is static, the icons, the avatars remain as is.
 */
const Header: React.FC<HeaderProps> = ({
  breadcrumbs,
  credits,
  userAvatarSrc,
}) => {
  const {
    spacing: { GAP, GUTTER },
  } = useTheme();

  return (
    <FlexView
      $direction="row"
      $align="center"
      $justify="space-between"
      $paddingHorizontal={GAP}
      $height={GUTTER * 3}
    >
      <Breadcrumbs items={breadcrumbs} />
      <FlexView $direction="row" $align="center" $gap={GUTTER / 2}>
        <Text
          $renderAs="Text-body/primary/primary"
          $marginHorizontal={GUTTER / 2}
        >
          Credits: ${credits ?? 0}
        </Text>
        <Separator $background="surface-200" $height={20} $width={1} />
        <IconButton
          $ariaLabel="Announcement"
          $iconName="Announcement"
          $size="large"
          $variant="intense"
        />
        <IconButton
          $ariaLabel="FAQ"
          $iconName="QuestionMark"
          $size="large"
          $variant="intense"
        />
        <IconButton
          $ariaLabel="Notifications"
          $iconName="Bell"
          $size="large"
          $variant="intense"
        />
        <Avatar
          $size="small"
          alt="User Avatar"
          src={userAvatarSrc}
        />
      </FlexView>
    </FlexView>
  );
};

export default Header;
