import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { AuthProvider } from "./hooks/auth";
import GlobalStyles from "./styles/global";
import { AppRoutes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
