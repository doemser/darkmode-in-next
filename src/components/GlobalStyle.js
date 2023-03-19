import { css, createGlobalStyle } from "styled-components";

const theme = {
  light: {
    primary: {
      light: "#bdc3c7",
      main: "#ecf0f1",
      dark: "#7f8c8d",
      contrast: "#000000",
    },
  },
  dark: {
    primary: {
      light: "#597da1",
      main: "#34495e",
      dark: "#2c3e50",
      contrast: "#FFFFFF",
    },
  },
};

const GlobalStyle = createGlobalStyle`
:root {
  ${({ darkMode }) => {
    const currentTheme = darkMode ? theme.dark : theme.light;

    return css`
      --primary-light: ${currentTheme.primary.light};
      --primary-main: ${currentTheme.primary.main};
      --primary-dark: ${currentTheme.primary.dark};
      --primary-contrast-text: ${currentTheme.primary.contrast};
    `;
  }}
}
`;

export default GlobalStyle;
