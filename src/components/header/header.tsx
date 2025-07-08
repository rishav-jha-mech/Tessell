import { useTheme } from "styled-components";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import type { HeaderProps } from "./header-props";
import { Text } from "../text/text";
import Separator from "../separator/separator";
import { IconButton } from "../icon-button/icon-button";
import Avatar from "../avatar/avatar";
import * as S from "./header.styled";
import FlexView from "../flex-view/flex-view";

/**
 * There is a static part to the header, that doesn't change.
 * The left part where we show Breadcrums is dynamic, it changes from page to page.
 * The right part is static, the icons, the avatars remain as is.
 */
const Header: React.FC<HeaderProps> = ({
  breadcrumbs,
  credits,
  userAvatarSrc,
  backgroundColor,
}) => {
  const {
    spacing: { GUTTER },
  } = useTheme();

  return (
    <S.HeaderWrapper background={backgroundColor ?? "opacity-transparent"}>
      <Breadcrumbs items={breadcrumbs} />
      <S.HeaderIconContent $gap={GUTTER / 2}>
        <Text
          $renderAs="Text-body/primary/primary"
          $marginHorizontal={GUTTER / 2}
        >
          Credits: ${credits ?? 0}
        </Text>
        <Separator background="surface-200" height={20} width={1} />
        <FlexView
          height={32}
          width={32}
          $alignItems="center"
          $justifyContent="center"
        >
          <IconButton
            $ariaLabel="Announcement"
            $iconName="Announcement"
            $size="large"
            $variant="intense"
          />
        </FlexView>
        <FlexView
          height={32}
          width={32}
          $alignItems="center"
          $justifyContent="center"
        >
          <IconButton
            $ariaLabel="FAQ"
            $iconName="QuestionMark"
            $size="large"
            $variant="intense"
          />
        </FlexView>
        <FlexView
          height={32}
          width={32}
          $alignItems="center"
          $justifyContent="center"
        >
          <IconButton
            $ariaLabel="Notifications"
            $iconName="Bell"
            $size="large"
            $variant="intense"
          />
        </FlexView>
      </S.HeaderIconContent>
      <Separator widthX={1} />
      <Avatar $size="small" alt="User Avatar" src={userAvatarSrc} />
    </S.HeaderWrapper>
  );
};

export default Header;
