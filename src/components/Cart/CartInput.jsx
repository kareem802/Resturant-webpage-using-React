export default function CartInput({ label, ...props }) {
  return (
    <div className="control">
      <label style={{ textTransform: "capitalize" }} htmlFor={label}>
        {label}
      </label>
      <input name={label} {...props} id={label} />
    </div>
  );
}
