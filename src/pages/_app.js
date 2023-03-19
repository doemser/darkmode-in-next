import GlobalStyle from "@/components/GlobalStyle";
import withDarkMode from "next-dark-mode";
import useDarkModeLocalStorage from "@/hooks/useDarkModeLocalStorage";

function App({ Component, pageProps }) {
  const { darkMode, setDarkMode } = useDarkModeLocalStorage();

  return (
    <>
      <GlobalStyle darkMode={darkMode} />

      <Component
        {...pageProps}
        darkMode={darkMode}
        onDarkMode={() => setDarkMode(!darkMode)}
      />
    </>
  );
}

export default withDarkMode(App);
