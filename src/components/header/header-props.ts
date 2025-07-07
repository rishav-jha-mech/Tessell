import type { BreadcrumbItem } from "../breadcrumbs/breadcrumbs-types";

export interface HeaderProps {
  breadcrumbs: BreadcrumbItem[];
  credits: number;
  userAvatarSrc: string;
}
