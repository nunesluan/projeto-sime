export default function ErrorMessage({ children }) {
  if (!children) return null;
  return <p className="text-red-500 text-sm mb-4">{children}</p>;
}
