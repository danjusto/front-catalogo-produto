import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { Container, Form } from "./style";
import { Button } from "../../../components/Button";
import { TextButton } from "../../../components/TextButton";
import { Input } from "../../../components/Input";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuth();

  function navigateToRegister() {
    navigate("/cadastro");
  }

  function handleSignIn() {
    signIn({ username, password });
  }

  return (
    <Container>
      <div className="title">
        <h1>Catálogo</h1>
        <h1>de</h1>
        <h1>Produtos</h1>
      </div>
      <Form>
        <label htmlFor="login">Username</label>
        <Input
          id="login"
          type="text"
          placeholder="Seu username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          type="password"
          placeholder="Sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} />
        <TextButton title="Criar uma conta" onClick={navigateToRegister} />
      </Form>
    </Container>
  );
}
