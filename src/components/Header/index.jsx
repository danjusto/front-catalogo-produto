import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Container } from "./style";
import { Button } from "../Button";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Header({ userHeader }) {
  const [user, setUser] = useState();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function navigateToProfile() {
    navigate("/perfil");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get(`/users`);
      setUser(response.data);
    }
    fetchUser();
  }, []);

  useEffect(() => {
    async function sendUser() {
      userHeader(user);
    }
    sendUser();
  }, [user]);

  return (
    <Container>
      <h1>catálogo de produtos</h1>
      <div>
        <Button
          id="button-profile"
          icon={FiUser}
          title={user?.username}
          onClick={navigateToProfile}
        />
        <Button id="logout" icon={FiLogOut} onClick={handleSignOut} />
      </div>
    </Container>
  );
}
