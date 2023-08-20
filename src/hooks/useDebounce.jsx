import { useEffect, useState } from "react";

function useDebounce(value, setCurrentPage) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setCurrentPage(1);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value, setCurrentPage]);

  return [debouncedValue, setDebouncedValue];
}

export default useDebounce;
