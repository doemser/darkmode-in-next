import { useEffect } from "react";
import useLocalStorageSSR from "@/hooks/useLocalStorageSSR";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorageSSR("dark", false);

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

  return { darkMode, setDarkMode };
}
