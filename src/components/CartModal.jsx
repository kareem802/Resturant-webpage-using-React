import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function CartModal({ ref }) {
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
  return (
    <>
      {createPortal(
        <dialog ref={dialogRef} className="modal">
          <div className="cart">
            <h2>Your Cart</h2>
            <ul>
              <li className="cart-item">
                <p>first item</p>
                <button>test</button>
              </li>
              <li className="cart-item">
                <p>second item</p>
                <button>test</button>
              </li>
            </ul>
            <div className="modal-actions">
              <button
                className="text-button"
                onClick={() => dialogRef.current.close()}
              >
                Close
              </button>
              <button className="button">Go to Checkout</button>
            </div>
          </div>
        </dialog>,
        document.body,
      )}
    </>
  );
}
