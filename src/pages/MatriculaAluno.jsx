import { useState } from "react";
import Input from "../components/forms/Input";
import Textarea from "../components/forms/TextArea";
// import { buscarIdPorNome } from "../services/alunoService";
import BuscarIdPorNome from "../components/forms/BuscarIdPorNome";

function Select({ label, value, onChange, options, error }) {
  return (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">Selecione</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default function MatriculaAluno() {
  const [form, setForm] = useState({
    id: "",
    idAluno: "",
    idTurma: "",
    dataMatricula: "",
    turno: "",
    tipoMatricula: "",
    responsavel: "",
    documentos: "",
    observacoes: "",
  });

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dados enviados:", form);
    alert("Matrícula salva com sucesso!");
  }

  return (
    <div className="w-full max-w-4xl bg-[#6b2e2e] text-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Cadastro de Matrícula
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Seção 1 */}
        <h3 className="text-lg font-semibold border-b border-yellow-500 pb-2 mb-4">
          Dados da Matrícula
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BuscarIdPorNome form={form} handleChange={handleChange} />
          <Input
            label="ID da Turma"
            value={form.idTurma}
            placeholder="Ex: 101"
            onChange={(e) => handleChange("idTurma", e.target.value)}
          />
          <Input
            label="Data da Matrícula"
            type="date"
            value={form.dataMatricula}
            onChange={(e) => handleChange("dataMatricula", e.target.value)}
          />
          <Select
            label="Turno"
            value={form.turno}
            onChange={(e) => handleChange("turno", e.target.value)}
            options={[
              { value: "manhã", label: "Manhã" },
              { value: "tarde", label: "Tarde" },
              { value: "noite", label: "Noite" },
            ]}
          />
          <Input
            label="Tipo de Matrícula"
            value={form.tipoMatricula}
            placeholder="Ex: Nova / Rematrícula"
            onChange={(e) => handleChange("tipoMatricula", e.target.value)}
          />
          <Input
            label="Responsável"
            value={form.responsavel}
            onChange={(e) => handleChange("responsavel", e.target.value)}
          />
        </div>

        <Textarea
          label="Documentos Entregues"
          value={form.documentos}
          onChange={(e) => handleChange("documentos", e.target.value)}
        />

        <Textarea
          label="Observações"
          value={form.observacoes}
          onChange={(e) => handleChange("observacoes", e.target.value)}
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#f1d39a] text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-400"
          >
            Salvar Matrícula
          </button>
        </div>
      </form>
    </div>
  );
}
