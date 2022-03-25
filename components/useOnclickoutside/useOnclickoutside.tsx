import { RefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  cb: (event?: Event) => void
) => {
  useEffect(() => {
    const listener = (e: Event) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }
      cb(e);
    };
    document.addEventListener("mousedown", listener, { passive: true });

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, cb]);
};
