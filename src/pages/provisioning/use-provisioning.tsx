import { useCallback, useMemo, useState } from "react";
import { useTheme } from "styled-components";
import Swal from "sweetalert2";
import { AppIcons } from "../../assets/icons";
import FlexView from "../../components/flex-view/flex-view";
import Separator from "../../components/separator/separator";
import type { StepperItem } from "../../components/stepper/stepper.types";
import { Text } from "../../components/text/text";
import { useProvisioningPageContext } from "./hooks/use-provisioning-context";

export const useProvisioning = () => {
  const { serviceSection, additionalSection } = useProvisioningPageContext();
  const { colors } = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleServiceSubmit = useCallback(async () => {
    setIsLoading(true);
    const res = await serviceSection.handleSubmit();
    if (res) {
      setCurrentStepIndex(1);
      serviceSection.scrollIntoView();
    }
    setIsLoading(false);
  }, [serviceSection]);

  const handleAdditionalSettingsSubmit = useCallback(async () => {
    setIsLoading(true);
    const res = await additionalSection.handleSubmit();
    if (res) {
      setCurrentStepIndex(2);
      additionalSection.scrollIntoView();
      Swal.fire({
        title: "Service Created",
        text: "Your Oracle Database Service has been created successfully.",
        icon: "success",
        confirmButtonText: "OK",
        color: colors["primary"],
        confirmButtonColor: colors["primary-200"],
        background: colors["surface-100"],
        backdrop: colors["opacity-modal"],
      });
    }
    setIsLoading(false);
  }, [additionalSection, colors]);

  const steps = useMemo(
    () =>
      [
        {
          label: "Service Details",
          button: {
            icon: "Add",
            label: "Create Service",
            isLoading,
            onClick: handleServiceSubmit,
          },
          children: (
            <FlexView
              $direction="row"
              $alignItems="center"
              $wrap="wrap"
              $gap={6}
            >
              <FlexView $gap={6}>
                <Text
                  $renderAs="Text-body/secondary/secondary"
                  $color="subtler"
                >
                  Oracle_service
                </Text>
                <AppIcons.OracleLogo />
              </FlexView>
              <Separator height={10} width={1} background="surface-300" />
              <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
                oracle_para_profile
              </Text>
            </FlexView>
          ),
        },
        {
          label: "Additional Setting",
          button: {
            icon: "Check",
            label: "Update Settings",
            isLoading,
            onClick: handleAdditionalSettingsSubmit,
          },
          children: (
            <FlexView
              $direction="row"
              $alignItems="center"
              $wrap="wrap"
              $gap={6}
            >
              <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
                No Preference
              </Text>
              <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
                Enabled minor version update
              </Text>
              <Separator height={10} width={0.5} background="surface-300" />
              <FlexView $gap={6}>
                <Text
                  $renderAs="Text-body/secondary/secondary"
                  $color="subtler"
                >
                  7-day PITR
                </Text>
                <Text
                  $renderAs="Text-body/secondary/secondary"
                  $color="subtler"
                >
                  01:00 snapshot time
                </Text>
              </FlexView>
              <Separator height={10} width={0.5} background="surface-300" />
            </FlexView>
          ),
        },
      ] as StepperItem[],
    [handleAdditionalSettingsSubmit, handleServiceSubmit, isLoading]
  );

  return {
    steps,
    currentStepIndex,
  };
};
