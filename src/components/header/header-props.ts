import type { ColorKeys } from "../../theme/theme-colors/theme-colors";
import type { BreadcrumbItem } from "../breadcrumbs/breadcrumbs-types";

export interface HeaderProps {
  breadcrumbs: BreadcrumbItem[];
  credits: number;
  userAvatarSrc: string;
  backgroundColor?: ColorKeys;
}
