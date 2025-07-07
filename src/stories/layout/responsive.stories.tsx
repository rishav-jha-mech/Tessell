import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "styled-components";
import { respondTo } from "../../utils/respond-to";
import Separator from "../../components/separator/separator";
import FlexView from "../../components/flex-view/flex-view";
import { Text } from "../../components/text/text";
import { useCurrentBreakpoint } from "../../hooks/use-current-breakpoints";

const SizedBox = styled(Separator)`
  height: 600px;
  width: 600px;

  transition: background-color 0.3s ease-in-out;

  ${respondTo.mobile`
    height: 300px;
    width: 300px;
    background-color: ${(props) => props.theme.colors["opacity-danger"]}; 
    `}

  ${respondTo.tablet`
    height: 400px;
    width: 400px;
    background-color: ${(props) => props.theme.colors["opacity-warning"]}; 
    `}
    
  ${respondTo.desktop`
    height: 500px;
    width: 500px;
    background-color: ${(props) => props.theme.colors["opacity-success"]};
    `}
    
  ${respondTo.widescreen`
    height: 600px;
    width: 600px;
    background-color: ${(props) => props.theme.colors["opacity-primary"]};
    `}
`;

const ResponsiveExample: React.FC = () => {
  const breakpoint = useCurrentBreakpoint();

  return (
    <FlexView $align="center" $justify="center" $direction="column" $gap={20}>
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
