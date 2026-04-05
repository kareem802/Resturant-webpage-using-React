import { useState, use, createContext } from "react";
  
const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
  activeModal: "",
});

export function ModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState();

  const openModal = (name) => setActiveModal(name);
  const closeModal = () => setActiveModal("");
  return (
    <ModalContext value={{ activeModal, openModal, closeModal }}>
      {children}
    </ModalContext>
  );
}

export function useModal() {
  const cntxt = use(ModalContext);
  if (!cntxt) throw new Error("useModal must be inside the context provider");
  return cntxt;
}
