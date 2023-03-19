import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function useLocalStorageSSR({ key, defaultValue }) {
  const [storedValue, setStoredValue] = useState(defaultValue);
  const [value, setValue] = useLocalStorageState(key, {
    defaultValue: storedValue,
  });

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setStoredValue(JSON.parse(storedValue));
    }
  }, [key]);

  return [value, setValue];
}
