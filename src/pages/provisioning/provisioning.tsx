import { Button } from "../../components/button/button";
import FlexView from "../../components/flex-view/flex-view";
import HeaderTitle from "../../components/header-title/header-title";
import Header from "../../components/header/header";
import { useDrawerContext } from "../../context/drawer-context/use-drawer-context";
import * as S from "./provisioning.styled";

const Provisioning = () => {
  const { toggleDrawer } = useDrawerContext();

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
      </S.ContentWrapper>
    </FlexView>
  );
};

export default Provisioning;
