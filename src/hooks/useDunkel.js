import { useState, useEffect } from "react";
import nookies, { setCookie } from "nookies";

export default function useDunkel({ darkMode, autoMode }) {
  const [darkModeActive, setDarkModeActive] = useState(darkMode);
  const [autoModeActive, setAutoModeActive] = useState(autoMode);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    function listenToDarkMode(event) {
      setDarkModeActive(event.matches);
    }

    if (autoModeActive) {
      listenToDarkMode(darkModeMediaQuery);
    }

    darkModeMediaQuery.addEventListener("change", listenToDarkMode);
    return () => {
      darkModeMediaQuery.removeEventListener("change", listenToDarkMode);
    };
  }, [autoModeActive]);

  function handleCookie(key, bool) {
    setCookie(null, key, JSON.stringify(bool), {
      path: "/",
      sameSite: "lax",
    });
  }

  function setDarkMode(bool) {
    handleCookie("darkMode", bool);
    setDarkModeActive(bool);
    setAutoModeActive(false);
  }

  function setAutoMode(bool) {
    handleCookie("autoMode", bool);
    setAutoModeActive(bool);
  }

  return {
    darkMode: darkModeActive,
    autoMode: autoModeActive,
    setDarkMode,
    setAutoMode,
  };
}

export function getServerSideDunkel(context) {
  const cookies = nookies.get(context);
  const darkModeCookies = {
    darkMode: cookies.darkMode ? JSON.parse(cookies.darkMode) : false,
    autoMode: cookies.autoMode ? JSON.parse(cookies.autoMode) : true,
  };
  return darkModeCookies;
}
