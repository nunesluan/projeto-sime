import { Link } from "react-router-dom";

export default function ButtonLink({ to, children, second = false }) {
  const secondFalse =
    "bg-neutral text-white px-6 py-3 rounded-lg shadow hover:bg-dark transition-colors";
  const secondTrue =
    "bg-light text-dark px-6 py-3 rounded-lg shadow hover:bg-grayish transition-colors";
  return (
    <Link to={to} className={second ? secondTrue : secondFalse}>
      {children}
    </Link>
  );
}
