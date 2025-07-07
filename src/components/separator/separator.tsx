import React from "react";
import type { SeparatorProps } from "./separator-types";
import { SeparatorBase } from "./separator-styled";

const Separator: React.FC<SeparatorProps> = (props) => (
  <SeparatorBase aria-hidden="true" {...props} />
);

export default Separator;
