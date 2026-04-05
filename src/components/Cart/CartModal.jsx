import Modal from "../Modal.jsx";
import CartItemsControl from "./CartItemsControl.jsx";
import MealText from "./MealText.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { useModal } from "../../context/ModalContext.jsx";

export default function CartModal() {
  const { selectedOrders, totalPrice } = useCart();
  const { openModal, closeModal, activeModal } = useModal();
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
      <div className="modal-actions">
        <button className="text-button" onClick={closeModal}>
          Close
        </button>
        <button
          className="button"
          onClick={() => {
            openModal("checkout");
          }}
        >
          Go to Checkout
        </button>
      </div>
    </Modal>
  );
}
