import GlobalStyle from "@/components/GlobalStyle";
import useDarkMode from "@/hooks/useDarkMode";

export default function App({ Component, pageProps }) {
  const { darkMode, setDarkMode } = useDarkMode();

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
