import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { Container, Form } from "./style";
import { Button } from "../../../components/Button";
import { TextButton } from "../../../components/TextButton";
import { Input } from "../../../components/Input";

export function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function navigateToSignIn() {
    navigate("/");
  }

  function handleSignUp() {
    if (!name || !username || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    if (username.length < 6) {
      return alert("A senha deve conter no mínimo 8 caracteres.");
    }

    if (password.length < 8) {
      return alert("A senha deve conter no mínimo 8 caracteres.");
    }

    api
      .post("/users", { name, username, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <div className="title">
        <h1>Catálogo</h1>
        <h1>de</h1>
        <h1>Produtos</h1>
      </div>
      <Form>
        <label htmlFor="name">Seu nome</label>
        <Input
          id="name"
          type="text"
          placeholder="Maria da Silva"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="username">Seu username</label>
        <Input
          id="username"
          type="text"
          placeholder="mariasilva (no mínimo 6 caracteres)"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          placeholder="exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          type="password"
          placeholder="No mínimo 8 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Criar conta" onClick={handleSignUp} />
        <TextButton title="Já tenho uma conta" onClick={navigateToSignIn} />
      </Form>
    </Container>
  );
}
