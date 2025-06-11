import "styled-components";

const theme = {
  colors: {
    primary: "#CC6237",
    background: "#ffffff",
    text: { primary: "#657593" },
  },
  font: {
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
} as const;

type Theme = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}

export default theme;
