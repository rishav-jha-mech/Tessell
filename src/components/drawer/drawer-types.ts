import type { ButtonProps } from "../button/button-types";
import type { DropdownItemProps } from "../dropdown/dropdown-types";

export type DrawerBtnProps = Pick<
  ButtonProps,
  "$icon" | "$trailingIcon" | "$isSelected" | "onClick"
> & {
  label: string;
};

export interface DrawerProps {
  dropdown?: {
    selected: string | undefined;
    options: DropdownItemProps[];
    handleChange: (value: string | number) => void;
  };
  menuOptions: DrawerBtnProps[];
  footerOptions: DrawerBtnProps[];
}
