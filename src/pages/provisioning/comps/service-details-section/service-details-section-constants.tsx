import type { DropdownItemProps } from "../../../../components/dropdown/dropdown-types";

export const SOFTWARE_RELEASE_OPTIONS: DropdownItemProps[] = [
  { label: "Oracle 21c", value: "oracle-21c", $isSelected: true },
  { label: "Oracle Database 21c", value: "oracle-database-21c" },
  { label: "Oracle 21c XE (Express Edition)", value: "oracle-21c-xe" },
  { label: "Oracle Cloud 21c", value: "oracle-cloud-21c" },
  { label: "Oracle Multitenant 21c", value: "oracle-multitenant-21c" },
  { label: "Oracle Autonomous Database 21c", value: "oracle-autonomous-21c" },
  { label: "Oracle Database Release 21.3", value: "oracle-database-21.3" },
  { label: "Oracle Enterprise Edition 21c", value: "oracle-enterprise-21c" },
  { label: "Oracle Standard Edition 2 21c", value: "oracle-standard-21c" },
];

export const VERSION_OPTIONS: DropdownItemProps[] = [
  { label: "23.0.0.0.0", value: "23.0.0.0.0", $isSelected: true },
  { label: "21.0.0.0.0", value: "21.0.0.0.0" },
  { label: "19.0.0.0.0", value: "19.0.0.0.0" },
  { label: "18.0.0.0.0", value: "18.0.0.0.0" },
  { label: "12.2.0.1.0", value: "12.2.0.1.0" },
  { label: "12.1.0.2.0", value: "12.1.0.2.0" },
  { label: "11.2.0.4.0", value: "11.2.0.4.0" },
  { label: "11.1.0.7.0", value: "11.1.0.7.0" },
  { label: "10.2.0.5.0", value: "10.2.0.5.0" },
  { label: "10.1.0.5.0", value: "10.1.0.5.0" },
  { label: "9.2.0.8.0", value: "9.2.0.8.0" },
  { label: "9.0.1.5.0", value: "9.0.1.5.0" },
  { label: "8.1.7.4.0", value: "8.1.7.4.0" },
  { label: "8.0.6.3.0", value: "8.0.6.3.0" },
  { label: "7.3.4.5.0", value: "7.3.4.5.0" },
];
