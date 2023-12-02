import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { Container, Content } from "./style";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Input } from "../../../components/Input";
import { FiSearch } from "react-icons/fi";
import { Button } from "../../../components/Button";

export function Home() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  function handleAddProduct(id) {
    navigate(`/adicionar`);
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products?category=${search}`);
      setProducts(response.data);
    }
    fetchProducts();
  }, [search]);

  return (
    <Container>
      <Header />
      <main>
        <div className="search-add">
          <Input
            id="input"
            icon={FiSearch}
            placeholder="Busque por categoria"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            id="add"
            title="Adicionar Produto"
            onClick={handleAddProduct}
          />
        </div>
        <Content>
          <Section products={products} />
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
