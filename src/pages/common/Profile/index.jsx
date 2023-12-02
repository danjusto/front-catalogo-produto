import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../../services/api";
import { Container, Form } from "./style";
import { Input } from "../../../components/Input";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { TextButton } from "../../../components/TextButton";
import { Button } from "../../../components/Button";
import { CareLeft } from "../../../components/Icons/CareLeft";

export function Profile() {
  const [user, setUser] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function backToHome() {
    navigate(-1);
  }

  async function handleUpdate() {
    let newName;
    let newEmail;

    !name ? (newName = user.name) : (newName = name);
    !email ? (newEmail = user.email) : (newEmail = email);

    await api
      .put(`/users`, {
        name: newName,
        email: newEmail,
      })
      .then(() => {
        alert("Cadastro atualizado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível atualizar o perfil");
        }
      });
  }

  function getUserFromHeader(headerUser) {
    setUser(headerUser);
  }

  return (
    <Container>
      <Header userHeader={getUserFromHeader} />
      <main>
        <TextButton icon={CareLeft} title="voltar" onClick={backToHome} />
        <Form>
          <label htmlFor="name">Seu nome</label>
          <Input
            id="name"
            type="text"
            defaultValue={user?.name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="username">Seu username</label>
          <Input
            id="username"
            type="text"
            disabled={true}
            defaultValue={user?.username}
          />
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            defaultValue={user?.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            disabled={true}
            defaultValue="********"
          />
          <Button title="Atualizar cadastro" onClick={handleUpdate} />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
