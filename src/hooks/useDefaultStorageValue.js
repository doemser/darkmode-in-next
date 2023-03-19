import { useState, useEffect } from "react";

export default function useDefaultStorageValue(key, defaultValue) {
  const [value, setValue] = useState(() => defaultValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    } else {
      setValue(defaultValue);
    }
  }, [key, defaultValue, setValue]);

  return value;
}
