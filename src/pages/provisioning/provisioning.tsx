import { useTheme } from "styled-components";
import { Button } from "../../components/button/button";
import FlexView from "../../components/flex-view/flex-view";
import HeaderTitle from "../../components/header-title/header-title";
import Header from "../../components/header/header";
import Separator from "../../components/separator/separator";
import { useDrawerContext } from "../../context/drawer-context/use-drawer-context";
import * as S from "./provisioning.styled";
import StepsSection from "./comps/steps-section/steps-section";
import ServiceDetailsSection from "./comps/service-details-section/service-details-section";
import AdditionalSettingsSection from "./comps/additional-settings-section/additional-settings-section";

const Provisioning = () => {
  const { toggleDrawer } = useDrawerContext();
  const {
    spacing: { GAP, PAGE_PADDING },
  } = useTheme();

  return (
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
        $flex={1}
        $gap={GAP}
        $paddingHorizontal={PAGE_PADDING}
        $alignItems="flex-start"
        $justifyContent="space-between"
      >
        <S.CreateServiceSectionWrapper>
          <StepsSection />
        </S.CreateServiceSectionWrapper>
        <FlexView $flex={1} $gap={GAP} $direction="column">
          <S.ContentContainer>
            <ServiceDetailsSection />
          </S.ContentContainer>
          <S.ContentContainer>
            <AdditionalSettingsSection />
          </S.ContentContainer>
        </FlexView>
      </FlexView>
    </S.ContentWrapper>
  );
};

export default Provisioning;
