import { AppIcons } from "../../../../assets/icons";
import Alert from "../../../../components/alert/alert";
import { Checkbox } from "../../../../components/checkbox/checkbox";
import { Dropdown } from "../../../../components/dropdown/dropdown";
import FlexView from "../../../../components/flex-view/flex-view";
import { Radio } from "../../../../components/radio/radio";
import Separator from "../../../../components/separator/separator";
import TextInput from "../../../../components/text-input/text-input";
import { Text } from "../../../../components/text/text";
import TableItem from "./table-item";

const AdditionalSettingsSection = () => {
  return (
    <section>
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
        <Radio $label="No Preferences" $size="regular" />
        <Radio $label="Select Window" $size="regular" />
      </FlexView>
      <FlexView $gapX={1} $marginBottomX={1.5} $wrap="wrap">
        <FlexView $flex={1}>
          <TextInput
            type="date"
            name="startDay"
            $label="Start Day"
            placeholder="Enter start day"
            $trailingItem={<AppIcons.Calendar />}
          />
        </FlexView>
        <FlexView $flex={1}>
          <TextInput
            type="time"
            name="startTime"
            $label="Start Time"
            placeholder="Enter service name"
            $trailingItem={<AppIcons.Clock />}
          />
        </FlexView>
      </FlexView>
      <FlexView $gapX={1} $marginBottomX={1.5}>
        <Dropdown
          $label="Duration"
          $size="default"
          $options={[]}
          $value={""}
          $placeholder="21.0.0.0.0"
          onChange={() => {}}
        />
        <Separator width={"100%"} />
      </FlexView>
      <Checkbox $label="Enable auto minor version update" $checked={true} />
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
          <TextInput name="sla" $label="SLA" placeholder="Enter SLA" />
        </FlexView>
        <FlexView $flex={1}>
          <TextInput
            placeholder="00:00"
            name="snapshotTime"
            $label="Snapshot Time"
            $trailingItem={<AppIcons.Clock />}
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
    </section>
  );
};

export default AdditionalSettingsSection;
