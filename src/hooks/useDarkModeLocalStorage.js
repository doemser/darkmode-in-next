import { useDarkMode } from "next-dark-mode";
import useLocalStorageState from "use-local-storage-state";

export default function useDarkModeLocalStorage() {
  const [decision, setDecision] = useLocalStorageState("darkMode", {
    defaultValue: null,
  });
  const { darkModeActive } = useDarkMode();

  return decision === null
    ? { darkMode: darkModeActive, setDarkMode: setDecision }
    : { darkMode: decision, setDarkMode: setDecision };
}
