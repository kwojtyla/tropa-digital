import "styled-components";

const theme = {
  colors: {
    primary: "#0070f3",
    background: "#f5f5f5",
    text: "#333",
  },
} as const;

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export default theme;
