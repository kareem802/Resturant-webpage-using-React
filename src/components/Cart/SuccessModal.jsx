import { useModal } from "../../context/ModalContext";
import Modal from "../Modal";

export default function SuccessModal() {
  const { activeModal, closeModal } = useModal();
  return (
    <Modal modalTitle="Success!" isOpen={activeModal === "success"}>
      <p>Your order has been submitted succefully</p>
      <p>
        We will get back to you with more details via email withing the next few
        minutes
      </p>
      <div className="modal-actions">
        <button className="button" onClick={closeModal}>
          Okay
        </button>
      </div>
    </Modal>
  );
}
