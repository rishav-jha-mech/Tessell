import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "styled-components";
import Separator from "../../components/separator/separator";
import FlexView from "../../components/flex-view/flex-view";
import { Text } from "../../components/text/text";
import { useCurrentBreakpoint } from "../../hooks/use-current-breakpoints";
import { MediaQuery } from "../../theme/constants/media-query";

const SizedBox = styled(Separator)`
  height: 600px;
  width: 600px;

  transition: background-color 0.3s ease-in-out;

  ${MediaQuery.minWidthMobileOnly} {
    height: 300px;
    width: 300px;
    background-color: ${(props) => props.theme.colors["opacity-danger"]};
  }

  ${MediaQuery.minWidthTablet} {
    height: 400px;
    width: 400px;
    background-color: ${(props) => props.theme.colors["opacity-warning"]};
  }

  ${MediaQuery.minWidthDesktop} {
    height: 500px;
    width: 500px;
    background-color: ${(props) => props.theme.colors["opacity-success"]};
  }

  ${MediaQuery.minWidthWidescreen} {
    height: 600px;
    width: 600px;
    background-color: ${(props) => props.theme.colors["opacity-primary"]};
  }
`;

const ResponsiveExample: React.FC = () => {
  const breakpoint = useCurrentBreakpoint();

  return (
    <FlexView
      $alignItems="center"
      $justifyContent="center"
      $direction="column"
      $gap={20}
    >
      <Text $renderAs="headingLg">Responsive Example</Text>
      <SizedBox />
      <Text $renderAs="headingLg">Current Breakpoint: {breakpoint}</Text>
      <Text $renderAs="headingLg">Resize screen to see the changes</Text>
    </FlexView>
  );
};

const meta: Meta<typeof ResponsiveExample> = {
  title: "Layout/ResponsiveExample",
  component: ResponsiveExample,
  args: {},
};

export default meta;

type Story = StoryObj<typeof ResponsiveExample>;

export const Default: Story = {};
