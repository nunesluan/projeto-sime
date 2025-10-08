// src/components/Select.jsx
export default function Select({
  label,
  value,
  onChange,
  options = [],
  error,
}) {
  return (
    <div className="mb-4 flex flex-col">
      {label && <label className="mb-1 font-medium">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 text-black ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">Selecione</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
