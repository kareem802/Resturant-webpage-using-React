import Modal from "../Modal.jsx";
import CartItemsControl from "./CartItemsControl.jsx";
import MealText from "./MealText.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { useModal } from "../../context/ModalContext.jsx";
import { useState } from "react";

export default function CartModal() {
  const { selectedOrders, totalPrice } = useCart();
  const { openModal, closeModal, activeModal } = useModal();
  const [submitted, setSubmitted] = useState(false);
  return (
    <Modal isOpen={activeModal === "cart"} modalTitle="Your Cart">
      <ul>
        {selectedOrders.map((order) => {
          return (
            <li className="cart-item" key={order.id}>
              <MealText
                mealName={order.name}
                numberOfTimesOrdered={order.timesOrdered}
                price={order.price}
              />
              <CartItemsControl order={order} />
            </li>
          );
        })}
      </ul>
      <p className="cart-total">${totalPrice}</p>
      {submitted && (
        <p style={{ color: "red" }}>
          Please choose at least 1 order to checkout
        </p>
      )}
      <div className="modal-actions">
        <button
          className="text-button"
          onClick={() => {
            setSubmitted(false);
            closeModal();
          }}
        >
          Close
        </button>
        <button
          className="button"
          onClick={() => {
            if (selectedOrders.length > 0) {
              openModal("checkout");
            } else {
              setSubmitted(true);
            }
          }}
        >
          Go to Checkout
        </button>
      </div>
    </Modal>
  );
}
