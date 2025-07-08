import { useRef } from "react";
import type { ServiceDetailsSectionRef } from "./comps/service-details-section/service-details-section.types";

export const useProvisioning = () => {
  const serviceDetailsSectionRef = useRef<ServiceDetailsSectionRef>(null);

  return {
    serviceDetailsSectionRef,
  };
};
