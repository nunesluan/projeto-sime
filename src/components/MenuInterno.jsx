import { Link } from "react-router-dom";

function MenuInterno() {
  const opcoes = [
    { titulo: "MATRÍCULA", icon: "👩‍💻", rota: "/matricula" },
    { titulo: "REMATRÍCULA", icon: "🔄", rota: "/rematricula" },
    { titulo: "ALUNOS", icon: "🎓", rota: "/alunos" },
    { titulo: "ALTERAR INFORMAÇÕES", icon: "✏️", rota: "/alterar" },
    { titulo: "EMITIR DOCUMENTOS", icon: "📂", rota: "/documentos" },
    { titulo: "GERAR RELATÓRIO", icon: "📋", rota: "/relatorio" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-6">
      {opcoes.map((item, index) => (
        <Link
          key={index}
          to={item.rota}
          className="bg-[#f1d39a] w-60 h-48 rounded-2xl shadow-md flex flex-col items-center justify-center gap-4 text-center border border-[#844545] hover:scale-105 transition-transform"
        >
          <span className="text-6xl">{item.icon}</span>
          <h2 className="font-bold text-lg text-red-500">{item.titulo}</h2>
        </Link>
      ))}
    </div>
  );
}

export default MenuInterno;
