import { useState, useEffect, useRef } from "react";
import { buscarAlunosPorNome } from "../../services/alunoService";

function BuscarIdPorNome({
  form,
  handleChange,
  label = "Nome do aluno",
  nameField = "aluno",
}) {
  const [opcoes, setOpcoes] = useState([]);
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const containerRef = useRef(null);

  const handleNomeChange = async (e) => {
    const nomeDigitado = e.target.value;
    handleChange(`nome${nameField}`, nomeDigitado);

    if (nomeDigitado.length >= 3) {
      setCarregando(true);
      const resultado = await buscarAlunosPorNome(nomeDigitado);
      setCarregando(false);

      if (resultado.success) {
        setOpcoes(resultado.alunos);
        setMostrarOpcoes(true);
      } else {
        setOpcoes([]);
        setMostrarOpcoes(false);
      }
    } else {
      setOpcoes([]);
      setMostrarOpcoes(false);
    }
  };

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickFora = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setMostrarOpcoes(false);
      }
    };
    document.addEventListener("mousedown", handleClickFora);
    return () => document.removeEventListener("mousedown", handleClickFora);
  }, []);

  const handleSelecionar = (aluno) => {
    const nameFieldCapitalized =
      nameField.charAt(0).toUpperCase() + nameField.slice(1);

    handleChange(`id${nameFieldCapitalized}`, aluno.id);
    handleChange(`nome${nameField}`, aluno.nome);
    setMostrarOpcoes(false);
  };

  return (
    <div ref={containerRef} className="relative mb-4">
      <label className="block mb-1 font-medium">{label}</label>

      <input
        type="text"
        value={form[`nome${nameField}`] || ""}
        placeholder="Digite o nome do aluno"
        onChange={handleNomeChange}
        onFocus={() => {
          if (opcoes.length > 0) setMostrarOpcoes(true);
        }}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 text-black border-gray-300"
      />

      {carregando && (
        <div className="absolute bg-white border border-gray-300 w-full mt-1 rounded shadow-sm p-2 text-gray-500">
          Carregando...
        </div>
      )}

      {mostrarOpcoes && opcoes.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded shadow-lg max-h-48 overflow-y-auto">
          {opcoes.map((aluno) => (
            <li
              key={aluno.id}
              onClick={() => handleSelecionar(aluno)}
              className="p-2 hover:bg-yellow-100 cursor-pointer"
            >
              {aluno.nome}
            </li>
          ))}
        </ul>
      )}

      {mostrarOpcoes && !carregando && opcoes.length === 0 && (
        <div className="absolute bg-white border border-gray-300 w-full mt-1 rounded shadow-sm p-2 text-gray-500">
          Nenhum aluno encontrado.
        </div>
      )}
    </div>
  );
}

export default BuscarIdPorNome;
