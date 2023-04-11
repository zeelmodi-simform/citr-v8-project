import { useEffect, useRef, MutableRefObject, ReactElement } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactElement }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal")!;

    elRef.current && modalRoot.appendChild(elRef.current);
    return () => {
      elRef.current && modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
