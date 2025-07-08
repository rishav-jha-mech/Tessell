import { useTheme } from "styled-components";
import { Button } from "../../components/button/button";
import FlexView from "../../components/flex-view/flex-view";
import HeaderTitle from "../../components/header-title/header-title";
import Header from "../../components/header/header";
import Separator from "../../components/separator/separator";
import { useDrawerContext } from "../../context/drawer-context/use-drawer-context";
import AdditionalSettingsSection from "./comps/additional-settings-section/additional-settings-section";
import ServiceDetailsSection from "./comps/service-details-section/service-details-section";
import StepsSection from "./comps/steps-section/steps-section";
import * as S from "./provisioning.styled";
import { useProvisioning } from "./use-provisioning";
import { ProvisioningProvider } from "./context/provisioning-context";
import { memo } from "react";

const ProvisioningComp: React.FC = () => {
  const { toggleDrawer } = useDrawerContext();
  const {
    spacing: { GAP },
  } = useTheme();

  const { steps, currentStepIndex } = useProvisioning();

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
      <Separator $heightX={1.5} />
      <S.ContentArea>
        <S.CreateServiceSectionWrapper>
          <StepsSection steps={steps} currentStepIndex={currentStepIndex} />
        </S.CreateServiceSectionWrapper>
        <FlexView $flex={1} $gap={GAP} $direction="column">
          <ServiceDetailsSection />
          <AdditionalSettingsSection />
        </FlexView>
      </S.ContentArea>
      <Separator $heightX={2} />
    </S.ContentWrapper>
  );
};

const ProvisioningPage = () => (
  <ProvisioningProvider>
    <ProvisioningComp />
  </ProvisioningProvider>
);

export default memo(ProvisioningPage);
