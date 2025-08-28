import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center max-w-2xl">
      <h2 className="text-4xl font-bold mb-6 text-[#463f3a]">
        Bem-vindo à Minha Aplicação
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Este é o espaço inicial do sistema. Você pode acessar a página de{" "}
        <span className="font-semibold">Login</span> para entrar ou visitar a
        seção <span className="font-semibold">Sobre</span> para saber mais.
      </p>

      <div className="flex justify-center space-x-4">
        <Link
          to="/login"
          className="bg-[#8a817c] text-white px-6 py-3 rounded-lg shadow hover:bg-[#463f3a] transition-colors"
        >
          Ir para Login
        </Link>
        <Link
          to="/sobre"
          className="bg-[#bcb8b1] text-[#463f3a] px-6 py-3 rounded-lg shadow hover:bg-[#a39e97] transition-colors"
        >
          Sobre
        </Link>
      </div>
    </div>
  );
}
