import { useTheme } from "styled-components";
import { Button } from "../../components/button/button";
import FlexView from "../../components/flex-view/flex-view";
import HeaderTitle from "../../components/header-title/header-title";
import Header from "../../components/header/header";
import Separator from "../../components/separator/separator";
import { useDrawerContext } from "../../context/drawer-context/use-drawer-context";
import * as S from "./provisioning.styled";
import CreateServiceSection from "./comps/create-service-section/create-service-section";

const Provisioning = () => {
  const { toggleDrawer } = useDrawerContext();
  const {
    spacing: { GUTTER, GAP, PAGE_PADDING },
  } = useTheme();

  return (
    <FlexView>
      <S.ContentWrapper>
        <Header
          credits={777}
          userAvatarSrc={
            "https://i.pinimg.com/236x/8c/52/14/8c5214d30329d77c9564ab31fd9d0579.jpg"
          }
          breadcrumbs={[
            { label: "Provisioning" },
            { label: "Relational Databases" },
            { label: "Oracle Server" },
          ]}
          backgroundColor="inverse"
        />
        <HeaderTitle
          title="Create New Oracle Database Service"
          backgroundColor="inverse"
          trailingItem={
            <Button
              $icon="Code"
              $size="small"
              $isSelected={true}
              $type="tertiary"
              $isHorizontallyCentered={true}
              onClick={() => {}}
            >
              Code
            </Button>
          }
          onDismiss={toggleDrawer}
        />
        <Separator heightX={1.5} />
        <FlexView
          $paddingHorizontal={PAGE_PADDING}
          $alignItems="flex-start"
          $justifyContent="space-between"
        >
          <S.CreateServiceSectionWrapper>
            <CreateServiceSection />
          </S.CreateServiceSectionWrapper>
        </FlexView>
      </S.ContentWrapper>
    </FlexView>
  );
};

export default Provisioning;
