import { useModal } from "../../context/ModalContext";
import Modal from "../Modal";
import CartInput from "./CartInput";
import { useActionState } from "react";
import { isValidEmail, isValidText } from "../../util/validation";

function formFn(prev, formData) {
  const fullName = formData.get("full name");
  const email = formData.get("e-mail address");
  const street = formData.get("street");
  const postalCode = formData.get("postal code");
  const city = formData.get("city");

  let errors = [];
  if (!isValidText(fullName)) errors.push("Please enter a valid name");
  if (!isValidEmail(email)) errors.push("Please enter a valid email address");
  if (!isValidText(street)) errors.push("Please enter a valid street");
  if (!isValidText(postalCode)) errors.push("Please enter a valid postal code");
  if (!isValidText(city)) errors.push("Please enter a valid city");

  if (errors.length > 0) return { errors };

  return {
    errors: null,
    enterdValues: { fullName, email, street, postalCode, city },
  };
}

export default function CheckoutModal() {
  const [formState, ActionFn, isPending] = useActionState(formFn, {
    errors: null,
  });
  const { activeModal } = useModal();

  return (
    <Modal isOpen={activeModal === "checkout"} modalTitle="Checkout">
      <form action={ActionFn}>
        <CartInput label="full name" />
        <CartInput label="e-mail address" type="email" />
        <CartInput label="street" />
        <div className="control-row">
          <CartInput label="postal code" />
          <CartInput label="city" />
        </div>
        <div className="modal-actions">
          <button className="text-button">Close</button>
          <button className="button">Submit Order</button>
        </div>
      </form>
    </Modal>
  );
}
