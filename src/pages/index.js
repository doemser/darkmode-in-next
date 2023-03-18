import StyledButton from "@/components/StyledButton";

export default function Home({ darkMode, onDarkMode }) {
  return (
    <StyledButton
      type="button"
      onClick={() => {
        onDarkMode(!darkMode);
      }}
    >
      {darkMode ? "DARK" : "LIGHT"}
    </StyledButton>
  );
}
