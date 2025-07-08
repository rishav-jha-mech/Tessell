import { useTheme } from "styled-components";
import { AppIcons } from "../../../../assets/icons";
import Separator from "../../../../components/separator/separator";
import TextInput from "../../../../components/text-input/text-input";
import { Text } from "../../../../components/text/text";
import FlexView from "../../../../components/flex-view/flex-view";
import { Dropdown } from "../../../../components/dropdown/dropdown";
import { Checkbox } from "../../../../components/checkbox/checkbox";
import TextinputTag from "../../../../components/textinput-tag/textinput-tag";
import useServiceDetailsSection from "./use-service-details-section";
import { forwardRef } from "react";
import type { ServiceDetailsSectionRef } from "./service-details-section.types";
import * as S from "./service-details-section.styled";
import Loader from "../../../../components/loader/loader";

const ServiceDetailsSection = forwardRef<ServiceDetailsSectionRef, unknown>(
  (_, ref) => {
    const { colors } = useTheme();
    const {
      showLoading,
      helpTextTags,
      textInputTagRef,
      serviceName,
      serviceNameMessage,
      serviceDescription,
      softwareReleaseOptions,
      versionOptions,
      selectedSoftwareRelease,
      selectedVersion,
      createAsContainerDb,
      handleSoftwareReleaseChange,
      handleVersionChange,
      handleServiceNameChange,
      handleServiceDescriptionChange,
      handleChangeTagText,
      handleCreateAsContainerDbChange,
    } = useServiceDetailsSection(ref);

    return (
      <S.Wrapper>
        {showLoading && (
          <S.LoadingOverlay>
            <Loader />
          </S.LoadingOverlay>
        )}
        <Text $renderAs="heading/primary">Service Details</Text>
        <Separator height={2} />
        <Text $renderAs="Text-body/primary/primary" $color="subtler">
          Service Name, Service Description, Software Release
        </Text>
        <Separator heightX={2} />
        <TextInput
          $label="Service Name"
          name="serviceName"
          placeholder="Enter service name"
          $trailingItem={
            serviceName.length !== 0 && (
              <AppIcons.Check color={colors.primary} />
            )
          }
          $maxWidth={"360px"}
          $marginBottomX={1.5}
          value={serviceName}
          onChange={handleServiceNameChange}
          $helpText={{
            color: "danger-100",
            message: serviceNameMessage,
          }}
        />
        <TextInput
          $label="Description (Optional)"
          name="serviceDescription"
          placeholder="Enter service description"
          $maxWidth={"83.6%"}
          $multiline={true}
          $marginBottomX={1.5}
          value={serviceDescription}
          onChange={handleServiceDescriptionChange}
        />
        <TextinputTag
          ref={textInputTagRef}
          label="Tags"
          name="tags"
          placeholder="Key                              : Value"
          maxWidth={"300px"}
          marginBottomX={2}
          $helpText={helpTextTags}
          onChange={handleChangeTagText}
        />
        <Text $renderAs="Heading/3">Engine Configuration</Text>
        <Separator height={2} />
        <Text $renderAs="Text-body/primary/primary" $color="subtler">
          Adjustable parameters, performance optimization, &nbsp;fine-tuning
          options
        </Text>
        <Separator heightX={1.5} />
        <FlexView $gapX={1} $marginBottomX={2} $wrap="wrap">
          <FlexView $flex={1}>
            <Dropdown
              $label="Software Release"
              $size="default"
              $options={softwareReleaseOptions}
              $value={selectedSoftwareRelease}
              $placeholder="Oracle 21c"
              onChange={handleSoftwareReleaseChange}
            />
          </FlexView>
          <FlexView $flex={1}>
            <Dropdown
              $label="Version"
              $size="default"
              $options={versionOptions}
              $value={selectedVersion}
              $placeholder="21.0.0.0.0"
              onChange={handleVersionChange}
            />
          </FlexView>
        </FlexView>
        <Checkbox
          name="createAsContainerDb"
          $label="Create as a Container Database"
          $checked={createAsContainerDb}
          onChange={handleCreateAsContainerDbChange}
        />
      </S.Wrapper>
    );
  }
);

export default ServiceDetailsSection;
