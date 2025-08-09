export function InputBox({ label, placeholder, onChange, type = 'text' }) {
  return (
    <>
      <div className="mx-5">
        <div className="mb-1.5 text-md font-medium text-gray-200 text-left field-label">{label}</div>
        <input
          type={type}
          onChange={onChange}
          className="mb-3 glass-input text-sm rounded-xl w-full p-3 transition-colors hover-glow"
          placeholder={placeholder}
          required
        />
      </div>
    </>
  )
}