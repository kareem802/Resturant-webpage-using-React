import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ ref, children, submitButtonText }) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      openModal() {
        dialogRef.current.showModal();
      },
      closeModal() {
        dialogRef.current.close();
      },
    };
  });
  return createPortal(
    <dialog ref={dialogRef} className="modal">
      {children}
      <div className="modal-actions">
        <button
          className="text-button"
          onClick={() => dialogRef.current.close()}
        >
          Close
        </button>
        <button className="button">{submitButtonText}</button>
      </div>
    </dialog>,
    document.body,
  );
}
