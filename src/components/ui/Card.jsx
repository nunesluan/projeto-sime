import { Link } from "react-router-dom";

export default function Card({ to, icon, title }) {
  return (
    <Link
      to={to}
      className="bg-[#f1d39a] w-60 h-48 rounded-2xl shadow-md flex flex-col items-center justify-center gap-4 text-center border border-highlight hover:scale-105 transition-transform"
    >
      <span className="text-6xl">{icon}</span>
      <h2 className="font-bold text-lg text-red-500">{title}</h2>
    </Link>
  );
}
