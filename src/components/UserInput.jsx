export default function UserInput({ label, id, type = "number", value, onChange, required }) {
  return (
    <>
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target)}
        required={required ? true : false}
      />
    </p>
    </>
  );
}