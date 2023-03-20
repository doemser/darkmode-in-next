import PageLayout from "@/components/PageLayout";
import StyledButton from "@/components/StyledButton";
import useDunkel, { getServerSideDunkel } from "@/hooks/useDunkel";

export async function getServerSideProps(context) {
  return { props: { darkModeCookies: getServerSideDunkel(context) } };
}

export default function Home({ darkModeCookies }) {
  const { darkMode, autoMode, setDarkMode, setAutoMode } =
    useDunkel(darkModeCookies);

  return (
    <PageLayout darkMode={darkMode}>
      <StyledButton
        type="button"
        disabled={autoMode}
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? "DARK" : "LIGHT"}
      </StyledButton>
      <hr />
      <label htmlFor="input">auto:</label>
      <input
        type="checkbox"
        id="input"
        checked={autoMode}
        onChange={() => {
          setAutoMode(!autoMode);
        }}
      />
    </PageLayout>
  );
}
