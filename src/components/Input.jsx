export default function Input({ label, id, type = "number", value, onChange }) {
  return (
    <>
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target)}
      />
    </p>
    </>
  );
}