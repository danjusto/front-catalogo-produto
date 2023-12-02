import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/common/Home";
import { Edit } from "../pages/common/Edit";
import { Product } from "../pages/common/Product";
import { New } from "../pages/common/New";
import { Profile } from "../pages/common/Profile";

export function CommonRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adicionar" element={<New />} />
      <Route path="/alterar/:id" element={<Edit />} />
      <Route path="/produto/:id" element={<Product />} />
      <Route path="/perfil" element={<Profile />} />
    </Routes>
  );
}
