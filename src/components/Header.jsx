import logoImg from "../assets/logo.jpg";
import CartButton from "./CartButton.jsx";
import { useRef } from "react";
import CartModal from "./CartModal.jsx";

export default function Header() {
  const cartModalRef = useRef();
  return (
    <div id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>reactfood</h1>
      </div>
      <CartButton onClick={() => cartModalRef.current.openModal()} />
      <CartModal ref={cartModalRef} />
    </div>
  );
}
