import { useEffect, useState } from "react";

const useDebounce = <T,>(
  value: T,
  delay: number,
  cb: (value?: T) => Promise<void>
) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(async () => {
      setDebouncedValue(value);
      await cb(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, cb]);

  return debouncedValue;
};
export default useDebounce;
