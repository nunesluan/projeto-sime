import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../routes/routes";
import CardWhite from "../components/ui/CardWhite";
import Input from "../components/forms/Input";
import Button from "../components/ui/Button";
import ErrorMessage from "../components/ui/ErrorMessage";
import TitleSecond from "../components/ui/TitleSecond";
import { login } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login: loginContext } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(email, senha);

    setLoading(false);

    if (result.success) {
      // salva token + email no contexto
      loginContext({
        token: result.user.token,
        email: email,
        cargo: result.user.cargo, // se o back devolver
      });

      navigate(routes.MENU_INTERNO);
    } else {
      setError(result.message);
    }
  };

  return (
    <CardWhite>
      <TitleSecond>Login</TitleSecond>
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu usuário"
        />
        <Input
          label="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />
        <ErrorMessage>{error}</ErrorMessage>
        <Button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </CardWhite>
  );
};

export default Login;
