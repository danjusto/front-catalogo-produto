import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { Container, Form } from "./style";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { TextButton } from "../../../components/TextButton";
import { Input } from "../../../components/Input";
import { SelectInput } from "../../../components/SelectInput";
import { CareLeft } from "../../../components/Icons/CareLeft";
import { TextArea } from "../../../components/TextArea";
import { Button } from "../../../components/Button";

export function New() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();
  let id;

  function backToHome() {
    navigate(-1);
  }

  async function handleNewProduct() {
    if (!title) {
      return alert("Digite o nome do produto.");
    }
    if (!category) {
      return alert("Selecione a categoria do produto.");
    }
    if (!brand) {
      return alert("Digite a marca do produto.");
    }
    if (!price) {
      return alert("Digite o valor do produto.");
    }

    await api
      .post("/products", {
        title,
        description,
        category,
        price,
        brand,
        stock,
        image: imageUrl,
      })
      .then(() => {
        alert("Produto cadastrado com sucesso!");
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
      <Header />
      <main>
        <TextButton icon={CareLeft} title="voltar" onClick={backToHome} />
        <h1>Novo produto</h1>
        <Form>
          <div className="desktop-wrap1">
            <div className="name-wrap">
              <label htmlFor="name">Nome</label>
              <Input
                id="name"
                placeholder="Ex.: Salada Ceasar"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="category-wrap">
              <label htmlFor="category">Categoria</label>
              <SelectInput
                id="category"
                option1="smartphones"
                option2="laptops"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="stock-wrap">
              <label htmlFor="stock">Quantidade no estoque</label>
              <Input
                id="stock"
                placeholder="20"
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
          </div>
          <div className="desktop-wrap2">
            <div className="image-wrap">
              <label htmlFor="image">Imagem do produto</label>
              <Input
                id="image"
                placeholder="URL da imagem"
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="brand-wrap">
              <label htmlFor="brand">Marca</label>
              <Input
                id="brand"
                placeholder="Ex.: Apple"
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="price-wrap">
              <label htmlFor="price">Preço</label>
              <Input
                id="price"
                placeholder="Ex.: 1500.00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="area-wrap">
            <label htmlFor="description">Descrição</label>
            <TextArea
              id="description"
              placeholder="Fale brevemente sobre o produto"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button title="Adicionar" onClick={handleNewProduct} />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
