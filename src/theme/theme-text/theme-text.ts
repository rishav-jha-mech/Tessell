const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
};

export const ThemeText = {
  headingLg: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: fontWeights.semibold,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "-0.2px",
    verticalAlign: "middle",
  },
  headingMd: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: fontWeights.medium,
    fontSize: "15px",
    lineHeight: "22px",
    letterSpacing: "-0.1px",
    verticalAlign: "middle",
  },
  headingSm: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: fontWeights.medium,
    fontSize: "13px",
    lineHeight: "20px",
    letterSpacing: "0px",
    verticalAlign: "middle",
  },
  headingForm: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: fontWeights.medium,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0px",
    verticalAlign: "middle",
  },
  bodyPrimary: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: fontWeights.medium,
    fontSize: "13px",
    lineHeight: "20px",
    letterSpacing: "0px",
    verticalAlign: "middle",
  },
  bodyMdMono: {
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: fontWeights.normal,
    fontSize: "13px",
    lineHeight: "20px",
    letterSpacing: "0px",
    verticalAlign: "middle",
  },
  bodySecondary: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: fontWeights.normal,
    fontSize: "11px",
    lineHeight: "16px",
    letterSpacing: "0px",
    verticalAlign: "middle",
  },
};

export type TextVariant = keyof typeof ThemeText;
