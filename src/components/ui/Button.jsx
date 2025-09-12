export default function Button({
  type = "button",
  children,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      {...props}
      className={`w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
