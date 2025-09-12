// src/services/authService.js

export async function login(email, senha) {
  try {
    const response = await fetch("http://localhost:4000/api/usuario/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    if (response.ok) {
      // retorna a resposta do backend
      return { success: true, user: data };
    } else {
      return { success: false, message: data.mensagem || "Erro no login" };
    }
  } catch (error) {
    return { success: false, message: "Erro de conexão com o servidor" };
  }
}
