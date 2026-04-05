import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useModal } from "../context/ModalContext.jsx";

export default function Modal({ isOpen, children, modalTitle }) {
  const ModalRef = useRef();
  useEffect(() => {
    if (isOpen) {
      ModalRef.current.showModal();
    } else {
      ModalRef.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog ref={ModalRef} className="modal">
      <div className="cart">
        <h2>{modalTitle}</h2>
        {children}
      </div>
    </dialog>,
    document.body,
  );
}
