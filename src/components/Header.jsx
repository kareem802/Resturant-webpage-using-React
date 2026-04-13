import logoImg from "../assets/logo.jpg";
import CartButton from "./Cart/CartButton.jsx";
import { useModal } from "../context/ModalContext.jsx";
import CartModal from "./Cart/CartModal.jsx";
import CheckoutModal from "./Cart/CheckoutModal.jsx";
import SuccessModal from "./Cart/SuccessModal.jsx";

export default function Header() {
  const { openModal } = useModal();
  return (
    <div id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>reactfood</h1>
      </div>
      <CartButton onClick={() => openModal("cart")} />
      <CartModal />
      <CheckoutModal />
      <SuccessModal />
    </div>
  );
}
