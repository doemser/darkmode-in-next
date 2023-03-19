import StyledButton from "@/components/StyledButton";
import useLocalStorageState from "use-local-storage-state";

export default function Home() {
  const [darkMode, setDarkMode] = useLocalStorageState("dark");
  return (
    <StyledButton
      type="button"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      {darkMode ? "DARK" : "LIGHT"}
    </StyledButton>
  );
}
