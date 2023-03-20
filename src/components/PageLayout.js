import { ThemeProvider } from "styled-components";

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

export default function PageLayout({ children, darkMode }) {
  const currentTheme = darkMode ? theme.dark : theme.light;
  return (
    <ThemeProvider theme={currentTheme}>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </ThemeProvider>
  );
}
