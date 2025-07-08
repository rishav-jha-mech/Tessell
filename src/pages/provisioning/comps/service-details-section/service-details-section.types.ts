export interface ServiceDetailsSectionRef {
  submit: () => Promise<boolean>; // True if resolved, false if any error
  scrollIntoView: () => void;
}
