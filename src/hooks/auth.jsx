import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ username, password }) {
    try {
      const response = await api.post("/users/login", { username, password });
      const { token } = response.data;
      localStorage.setItem("@catalogo:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@catalogo:token");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@catalogo:token");

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        token: data.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
