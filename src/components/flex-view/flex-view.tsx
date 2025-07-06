import React from "react";
import type { FlexViewProps } from "./flex-view-types";
import { FlexContainer } from "./flex-view.styled";

const FlexView: React.FC<FlexViewProps> = ({ children, ...restProps }) => {
  return <FlexContainer {...restProps}>{children}</FlexContainer>;
};

export default FlexView;
