export default function Textarea({
  label,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary text-black ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
