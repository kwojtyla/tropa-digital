import "styled-components";

const theme = {
  colors: {
    primary: "#CC6237",
    background: "#ffffff",
    text: { primary: "#657593" },
  },
} as const;

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export default theme;
