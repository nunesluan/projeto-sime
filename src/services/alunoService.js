export async function buscarAlunosPorNome(nome) {
  if (!nome) {
    return { success: false, message: "O nome é obrigatório." };
  }

  try {
    const response = await fetch(
      `http://localhost:4000/api/aluno/buscar-id?nome=${encodeURIComponent(
        nome
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      return { success: true, alunos: data }; // array de objetos {id, nome}
    } else {
      return {
        success: false,
        message: data.mensagem || "Nenhum aluno encontrado.",
      };
    }
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return { success: false, message: "Erro de conexão com o servidor." };
  }
}
