import { useModal } from "../../context/ModalContext";
import Modal from "../Modal";
import CartInput from "./CartInput";
import { useActionState, useEffect } from "react";
import { isValidEmail, isValidText } from "../../util/validation";
import { useCart } from "../../context/CartContext";
import { fetchOrders } from "../../util/fetchFunctions";

export default function CheckoutModal() {
  const { activeModal, closeModal, openModal } = useModal();
  const { totalPrice, selectedOrders } = useCart();
  const [formState, ActionFn, isPending] = useActionState(formFn, {
    errors: null,
  });

  useEffect(() => {
    if (formState.success) {
      closeModal();
      openModal("success");
    }
  }, [formState.success]);

  async function formFn(prev, formData) {
    const fullName = formData.get("full name");
    const email = formData.get("e-mail address");
    const street = formData.get("street");
    const postalCode = formData.get("postal code");
    const city = formData.get("city");

    let errors = [];
    if (!isValidText(fullName)) errors.push("Please enter a valid name");
    if (!isValidEmail(email)) errors.push("Please enter a valid email address");
    if (!isValidText(street)) errors.push("Please enter a valid street");
    if (!isValidText(postalCode))
      errors.push("Please enter a valid postal code");
    if (!isValidText(city)) errors.push("Please enter a valid city");

    if (errors.length > 0)
      return {
        errors,
        enteredValues: { fullName, email, street, postalCode, city },
        success: false,
      };

    try {
      const response = await fetchOrders(selectedOrders, {
        name: fullName,
        email,
        street,
        postalCode,
        city,
      });
      return { errors: null, success: true };
    } catch (e) {
      return { errors: ["Something went wrong, please try again."] };
    }
  }

  return (
    <Modal isOpen={activeModal === "checkout"} modalTitle="Checkout">
      <p>Total Amount: ${totalPrice}</p>
      <form action={ActionFn}>
        <CartInput
          label="full name"
          defaultValue={formState.enteredValues?.fullName || ""}
          required
        />
        <CartInput
          label="e-mail address"
          type="email"
          defaultValue={formState.enteredValues?.email || ""}
          required
        />
        <CartInput
          label="street"
          defaultValue={formState.enteredValues?.street || ""}
          required
        />
        <div className="control-row">
          <CartInput
            label="postal code"
            defaultValue={formState.enteredValues?.postalCode || ""}
            required
          />
          <CartInput
            label="city"
            defaultValue={formState.enteredValues?.city || ""}
            required
          />
        </div>
        <div className="modal-actions">
          <button className="text-button" type="button" onClick={closeModal}>
            Close
          </button>
          <button className="button" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit Order"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
