import type { Meta, StoryObj } from "@storybook/react-vite";
import Alert from "../../components/alert/alert";
import Separator from "../../components/separator/separator";
import { Text } from "../../components/text/text";
import FlexView from "../../components/flex-view/flex-view";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
};

export default meta;

const AllAlerts = () => {
  return (
    <FlexView $direction="column" $gap={16}>
      <Text $renderAs="headingLg">Alert Dismissable Variants</Text>
      <Alert theme="info" message="This is an info alert" />
      <Alert theme="success" message="This is a success alert" />
      <Alert theme="error" message="This is an error alert" />
      <Alert theme="warning" message="This is a warning alert" />
      <Separator height={10} />
      <Text $renderAs="headingLg">Alert Non-Dismissable Variants</Text>
      <Alert
        theme="info"
        message="This is an info alert"
        isDismissible={false}
      />
      <Alert
        theme="success"
        message="This is a success alert"
        isDismissible={false}
      />
      <Alert
        theme="error"
        message="This is an error alert"
        isDismissible={false}
      />
      <Alert
        theme="warning"
        message="This is a warning alert"
        isDismissible={false}
      />
    </FlexView>
  );
};

export const DefaultStory: StoryObj<typeof Alert> = {
  args: {
    theme: "info",
    isDismissible: true,
    message: "This is an alert message",
  },
};

export const AllAlertsStory: StoryObj<typeof Alert> = {
  render: () => <AllAlerts />,
};
