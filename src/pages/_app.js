import GlobalStyle from "@/components/GlobalStyle";
import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useLocalStorageState("dark", {
    defaultValue: false,
  });

  useEffect(() => {
    // Due to missing Browser API while server-side rendering
    // window is accessed in a useEffect
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
