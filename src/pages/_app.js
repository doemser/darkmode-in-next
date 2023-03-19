import GlobalStyle from "@/components/GlobalStyle";
import { useEffect } from "react";
import useDefaultStorageValue from "@/hooks/useDefaultStorageValue";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const defaultValue = useDefaultStorageValue("dark", false);
  const [darkMode, setDarkMode] = useLocalStorageState("dark", {
    defaultValue,
  });

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    function handleDarkMode(event) {
      setDarkMode(event.matches);
    }

    darkModeMediaQuery.addEventListener("change", handleDarkMode);
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkMode);
    };
  }, [setDarkMode]);

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
