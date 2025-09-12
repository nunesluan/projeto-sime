import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#c2c4a1]">
      {/* Header */}
      <header className="bg-[#4c2e2e] text-white flex justify-between items-center px-6 py-3">
        <div className="bg-gray-300 text-black px-4 py-2 font-bold">LOGO</div>
        <nav className="flex gap-6">
          <Link to="/" className="hover:underline">
            Início
          </Link>
          <Link to="/sobre" className="hover:underline">
            Sobre
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </nav>
      </header>

      {/* Conteúdo dinâmico */}
      <main className="flex-1 flex justify-center items-center p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#4c2e2e] text-center text-white py-2 text-sm">
        © 2025 Desenvolvido por Kairox
      </footer>
    </div>
  );
}
