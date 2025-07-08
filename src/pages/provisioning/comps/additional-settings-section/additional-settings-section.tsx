import { forwardRef } from "react";
import Alert from "../../../../components/alert/alert";
import { Checkbox } from "../../../../components/checkbox/checkbox";
import { Dropdown } from "../../../../components/dropdown/dropdown";
import FlexView from "../../../../components/flex-view/flex-view";
import { Radio } from "../../../../components/radio/radio";
import Separator from "../../../../components/separator/separator";
import TextInput from "../../../../components/text-input/text-input";
import { Text } from "../../../../components/text/text";
import TableItem from "./table-item";
import type { AdditionalSettingsSectionRef } from "./additional-settings-section-types";
import useAdditionalSettingsSection from "./use-additional-settings-section";
import * as S from "../../provisioning.styled";
import Loader from "../../../../components/loader/loader";
import { AppIcons } from "../../../../assets/icons";

const AdditionalSettingsSection = forwardRef<
  AdditionalSettingsSectionRef,
  unknown
>((_, ref) => {
  const {
    containerRef,
    startDayOptions,
    showLoading,
    windowPreference,
    startDay,
    startTime,
    selectedDuration,
    autoMinorUpdate,
    sla,
    snapshotTime,
    durationOptions,
    startDayMessage,
    startTimeMessage,
    durationMessage,
    slaMessage,
    snapshotTimeMessage,
    handleWindowPreferenceChange,
    handleStartDayChange,
    handleStartTimeChange,
    handleDurationChange,
    handleAutoMinorUpdateChange,
    handleSlaChange,
    handleSnapshotTimeChange,
  } = useAdditionalSettingsSection(ref);

  return (
    <S.ContentContainer ref={containerRef}>
      {showLoading && (
        <S.LoadingOverlay>
          <Loader />
        </S.LoadingOverlay>
      )}
      <Text $renderAs="heading/primary">Additional settings</Text>
      <Separator height={2} />
      <Text $renderAs="Text-body/primary/primary" $color="subtler">
        Maintenance Window, Availability machine
      </Text>
      <Separator heightX={2} />
      <Text $renderAs="heading/secondary">Maintenance Window</Text>
      <Separator height={2} />
      <Text $renderAs="Text-body/secondary/secondary" $color="subtlest">
        Describing what maintenance window is
      </Text>
      <Separator heightX={2} />
      <Text $renderAs="heading/form titles">Window Preference</Text>
      <Separator heightX={0.5} />
      <FlexView $gapX={1} $marginBottomX={1.5}>
        <Radio
          $label="No Preferences"
          $size="regular"
          $checked={windowPreference === "none"}
          onChange={() => handleWindowPreferenceChange("none")}
        />
        <Radio
          $label="Select Window"
          $size="regular"
          $checked={windowPreference === "select"}
          onChange={() => handleWindowPreferenceChange("select")}
        />
      </FlexView>

      {windowPreference === "select" && (
        <>
          <FlexView $gapX={1} $marginBottomX={1.5} $wrap="wrap">
            <FlexView $flex={1}>
              <Dropdown
                $label="Start Day"
                $size="default"
                $options={startDayOptions}
                $value={startDay}
                $placeholder="Select Day"
                onChange={handleStartDayChange}
                $trailingItem={<AppIcons.Calendar />}
                $helpText={
                  startDayMessage
                    ? { message: startDayMessage, color: "danger-100" }
                    : undefined
                }
              />
            </FlexView>
            <FlexView $flex={1}>
              <TextInput
                type="time"
                name="startTime"
                $label="Start Time"
                placeholder="Enter start time"
                value={startTime}
                onChange={handleStartTimeChange}
                $helpText={
                  startTimeMessage
                    ? { message: startTimeMessage, color: "danger-100" }
                    : undefined
                }
              />
            </FlexView>
          </FlexView>

          <FlexView $gapX={1} $marginBottomX={1.5}>
            <FlexView $flex={1}>
              <Dropdown
                $label="Duration"
                $size="default"
                $options={durationOptions}
                $value={selectedDuration}
                $placeholder="Select duration"
                onChange={handleDurationChange}
                $helpText={
                  durationMessage
                    ? { message: durationMessage, color: "danger-100" }
                    : undefined
                }
              />
            </FlexView>
          </FlexView>
        </>
      )}

      <Checkbox
        $label="Enable auto minor version update"
        $checked={autoMinorUpdate}
        onChange={handleAutoMinorUpdateChange}
      />
      <Separator heightX={2} />
      <Text $renderAs="heading/secondary">
        Availability Machine Preferences
      </Text>
      <Separator heightX={0.25} />
      <Text $renderAs="Text-body/secondary/secondary" $color="subtlest">
        Here you can define your data protection SLA and schedule. Once the
        database has been created, you can further define the data availability
        and access policies from the Availability Machine app.
      </Text>
      <Separator heightX={2} />
      <FlexView $gapX={1} $marginBottomX={2} $wrap="wrap">
        <FlexView $flex={1}>
          <TextInput
            name="sla"
            $label="SLA"
            placeholder="Enter SLA"
            value={sla}
            onChange={handleSlaChange}
            $helpText={
              slaMessage
                ? { message: slaMessage, color: "danger-100" }
                : undefined
            }
          />
        </FlexView>
        <FlexView $flex={1}>
          <TextInput
            placeholder="00:00"
            name="snapshotTime"
            $label="Snapshot Time"
            value={snapshotTime}
            onChange={handleSnapshotTimeChange}
            $helpText={
              snapshotTimeMessage
                ? { message: snapshotTimeMessage, color: "danger-100" }
                : undefined
            }
          />
        </FlexView>
      </FlexView>
      <TableItem />
      <Separator heightX={2} />
      <Alert
        theme="info"
        message="Projecting an estimate total count of 71 snapshots with the above configuration."
        isDismissible={true}
      />
    </S.ContentContainer>
  );
});

export default AdditionalSettingsSection;
