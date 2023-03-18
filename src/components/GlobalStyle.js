import { css, createGlobalStyle } from "styled-components";

const theme = {
  light: {
    light: "#bdc3c7",
    main: "#ecf0f1",
    dark: "#7f8c8d",
    contrast: "#000000",
  },
  dark: {
    light: "#597da1",
    main: "#34495e",
    dark: "#2c3e50",
    contrast: "#FFFFFF",
  },
};

const GlobalStyle = createGlobalStyle`
:root {
  ${({ darkMode }) => {
    if (darkMode) {
      return css`
        --primary-light: ${theme.dark.light};
        --primary-main: ${theme.dark.main};
        --primary-dark: ${theme.dark.dark};
        --primary-contrast-text: ${theme.dark.contrast};
      `;
    } else {
      return css`
        --primary-light: ${theme.light.light};
        --primary-main: ${theme.light.main};
        --primary-dark: ${theme.light.dark};
        --primary-contrast-text: ${theme.light.contrast};
      `;
    }
  }}
}


`;

export default GlobalStyle;
