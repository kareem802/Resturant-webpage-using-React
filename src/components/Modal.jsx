import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useModal } from "../context/ModalContext.jsx";

export default function Modal({ isOpen, children, modalTitle }) {
  const ModalRef = useRef();
  const { closeModal } = useModal();
  useEffect(() => {
    if (isOpen) {
      ModalRef.current.showModal();
    } else {
      ModalRef.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialogRef = ModalRef.current;
    const handleCancel = () => closeModal(); // sync context when escape is pressed
    dialogRef.addEventListener("cancel", handleCancel);
    return () => dialogRef.removeEventListener("cancel", handleCancel);
  }, [closeModal]);

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
