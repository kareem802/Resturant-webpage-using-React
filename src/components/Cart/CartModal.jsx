import Modal from "../Modal.jsx";
import CartItemsControl from "./CartItemsControl.jsx";
import MealText from "./MealText.jsx";

export default function CartModal({ ref }) {
  const dummyData = { name: "Seafood Pallea", price: 19.99, timesOrdered: 2 };
  return (
    <Modal ref={ref} submitButtonText="Go to Checkout">
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          <li className="cart-item">
            <MealText
              mealName={dummyData.name}
              numberOfTimesOrdered={dummyData.timesOrdered}
              price={dummyData.price}
            />
            <CartItemsControl timesOrdered={dummyData.timesOrdered} />
          </li>
        </ul>
        <p className="cart-total">$99.99</p>
      </div>
    </Modal>
  );
}
