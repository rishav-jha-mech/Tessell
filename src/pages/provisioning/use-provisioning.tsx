import { useCallback, useMemo, useRef, useState } from "react";
import { AppIcons } from "../../assets/icons";
import FlexView from "../../components/flex-view/flex-view";
import Separator from "../../components/separator/separator";
import { Text } from "../../components/text/text";
import type { AdditionalSettingsSectionRef } from "./comps/additional-settings-section/additional-settings-section-types";
import type { ServiceDetailsSectionRef } from "./comps/service-details-section/service-details-section.types";
import type { StepperItem } from "../../components/stepper/stepper.types";

export const useProvisioning = () => {
  const serviceDetailsSectionRef = useRef<ServiceDetailsSectionRef>(null);
  const additionalSettingsSectionRef =
    useRef<AdditionalSettingsSectionRef>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleServiceSubmit = useCallback(async () => {
    if (serviceDetailsSectionRef.current) {
      setIsLoading(true);
      const res = await serviceDetailsSectionRef.current.submit();
      if (res) {
        setCurrentStepIndex(1);
        additionalSettingsSectionRef.current?.scrollIntoView();
      }
      setIsLoading(false);
    }
  }, []);

  const handleAdditionalSettingsSubmit = useCallback(async () => {
    if (additionalSettingsSectionRef.current) {
      setIsLoading(true);
      const res = await additionalSettingsSectionRef.current.submit();
      if (res) {
        setCurrentStepIndex(2);
        serviceDetailsSectionRef.current?.scrollIntoView();
      }
      setIsLoading(false);
    }
  }, []);

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
    serviceDetailsSectionRef,
    additionalSettingsSectionRef,
  };
};
