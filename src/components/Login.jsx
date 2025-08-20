import { useState } from "react";

export default function Login() {
  return (
    <div className="flex flex-col w-screen h-screen bg-[#ccccaa] font-sans">
      {/* Header */}
      <header className="bg-[#4a2e2e] text-white p-4 flex justify-between items-center">
        <div className="bg-gray-200 px-3 py-1 font-bold text-black">LOGO</div>
        <nav className="space-x-4">
          <a href="#" className="font-semibold">
            Início
          </a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </header>

      {/* Conteúdo central */}
      <main className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl mb-6 text-[#4a2e2e] font-medium">
            SIME - SISTEMA DE MATRÍCULA ESCOLAR
          </h1>

          <div className="bg-[#4a2e2e] text-white p-6 rounded-lg shadow-lg w-80">
            <label className="block text-left mb-2 text-sm">
              Login/Usuário:
            </label>
            <input
              type="text"
              className="w-full p-2 mb-4 rounded bg-white text-black"
            />

            <label className="block text-left mb-2 text-sm">Senha:</label>
            <input
              type="password"
              className="w-full p-2 mb-4 rounded bg-white text-black"
            />

            <button className="w-full bg-[#f8cfa0] text-[#4a2e2e] font-semibold py-2 rounded hover:bg-[#f5b97a] transition">
              Entrar
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#4a2e2e] text-white text-center p-4">
        © 2025 - Todos os direitos reservados
      </footer>
    </div>
  );
}
