import React from "react";
import type { BreadcrumbsProps } from "./breadcrumbs-types";
import { Text } from "../text/text";
import FlexView from "../flex-view/flex-view";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <FlexView $flex={1} $direction="row" $align="center">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Text $renderAs="bodyXs" $color="subtlest">
            {item.label}
          </Text>

          {index < items.length - 1 && (
            <Text
              $renderAs="bodyXs"
              $marginHorizontal={"6px"}
              $color="subtlest"
            >
              /
            </Text>
          )}
        </React.Fragment>
      ))}
    </FlexView>
  );
};

export default Breadcrumbs;
