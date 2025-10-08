// src/components/CadastroAluno.jsx
import { useState } from "react";
import Input from "../components/forms/Input";
import Select from "../components/forms/Select";

export default function CadastroAluno() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    rg: "",
    nascimento: "",
    certidao_nascimento: "",
    nis: "",
    bolsa_familia: true,
    alergias: "",
    deficiencia: "",
    sexo: "",
    cor_raca: "",
    nacionalidade: "BRASILEIRO(A)",
    naturalidade: "",
    endereco: "",
    telefone: "",
    nome_social: "",
    nome_afetivo: "",
    filiacao_pai: "",
    filiacao_mae: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (campo) => (e) => {
    setFormData({ ...formData, [campo]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");

    try {
      const response = await fetch("http://localhost:4000/api/aluno/alunos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMensagem(data.mensagem);
        setFormData({}); // limpar
      } else {
        setMensagem(data.erro || "Erro ao cadastrar aluno");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setMensagem("Erro de conexão com o servidor");
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-[#6b2d2d] p-8 rounded-2xl shadow-lg w-full max-w-5xl text-white">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Cadastro de Aluno
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Input
            label="Nome"
            value={formData.nome}
            onChange={handleChange("nome")}
          />
          <Input
            label="CPF"
            value={formData.cpf}
            onChange={handleChange("cpf")}
            placeholder="000.000.000-00"
          />
          <Input label="RG" value={formData.rg} onChange={handleChange("rg")} />
          <Input
            type="date"
            label="Data de Nascimento"
            value={formData.nascimento}
            onChange={handleChange("nascimento")}
          />
          <Input
            label="Endereço"
            value={formData.endereco}
            onChange={handleChange("endereco")}
          />
          <Select
            label="Sexo"
            value={formData.sexo}
            onChange={handleChange("sexo")}
            options={["Masculino", "Feminino", "Outro"]}
          />
          <Input
            label="Telefone"
            value={formData.telefone}
            onChange={handleChange("telefone")}
            placeholder="(99) 99999-9999"
          />
          <Input
            label="Certidão de Nascimento"
            value={formData.certidao_nascimento}
            onChange={handleChange("certidao_nascimento")}
          />
          <Input
            label="NIS"
            value={formData.nis}
            onChange={handleChange("nis")}
          />
          <Select
            label="Bolsa Família"
            value={formData.bolsa_familia ? "Sim" : "Não"} // garante que o valor seja "Sim" ou "Não" no select
            onChange={(e) =>
              setFormData({
                ...formData,
                bolsa_familia: e.target.value === "Sim", // converte para boolean
              })
            }
            options={["Sim", "Não"]}
          />

          <Input
            label="Alergias"
            value={formData.alergias}
            onChange={handleChange("alergias")}
          />
          <Input
            label="Deficiência"
            value={formData.deficiencia}
            onChange={handleChange("deficiencia")}
          />
          <Input
            label="Cor/Raça"
            value={formData.cor_raca}
            onChange={handleChange("cor_raca")}
          />
          <Input
            label="Nacionalidade"
            value={formData.nacionalidade}
            onChange={handleChange("nacionalidade")}
          />
          <Input
            label="Naturalidade"
            value={formData.naturalidade}
            onChange={handleChange("naturalidade")}
          />
          <Input
            label="Nome Social"
            value={formData.nome_social}
            onChange={handleChange("nome_social")}
          />
          <Input
            label="Nome Afetivo"
            value={formData.nome_afetivo}
            onChange={handleChange("nome_afetivo")}
          />
          <Input
            label="Filiação (Pai)"
            value={formData.filiacao_pai}
            onChange={handleChange("filiacao_pai")}
          />
          <Input
            label="Filiação (Mãe)"
            value={formData.filiacao_mae}
            onChange={handleChange("filiacao_mae")}
          />

          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full"
            >
              Salvar Aluno
            </button>
          </div>
        </form>

        {mensagem && (
          <p className="text-center mt-4 font-semibold">{mensagem}</p>
        )}
      </div>
    </div>
  );
}
