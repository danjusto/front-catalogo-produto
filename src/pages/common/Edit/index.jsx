import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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

export function Edit() {
  const [product, setProduct] = useState([]);

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  function backToHome() {
    navigate(-1);
  }

  async function handleDeleteProduct() {
    const check = confirm("Tem certeza que deseja excluir o produto?");
    if (!check) {
      return;
    }

    await api.delete(`/products/${params.id}`);
    alert("Produto excluído com sucesso!");
    navigate("/");
  }

  async function handleUpdateProduct() {
    let newTitle;
    let newBrand;
    let newDescription;
    let newCategory;
    let newStock;
    let newPrice;
    let newImageUrl;

    !title ? (newTitle = product.title) : (newTitle = title);
    !brand ? (newBrand = product.brand) : (newBrand = brand);
    !description
      ? (newDescription = product.description)
      : (newDescription = description);
    !category ? (newCategory = product.category) : (newCategory = category);
    !stock ? (newStock = product.stock) : (newStock = stock);
    !price ? (newPrice = product.price) : (newPrice = price);
    !imageUrl ? (newImageUrl = product.image) : (newImageUrl = imageUrl);

    await api
      .put(`/products/${params.id}`, {
        title: newTitle,
        description: newDescription,
        category: newCategory,
        price: newPrice,
        brand: newBrand,
        stock: newStock,
        image: newImageUrl,
      })
      .then(() => {
        alert("Produto alterado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível alterar o produto");
        }
      });
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products/${params.id}`);
      setProduct(response.data);
    }
    fetchProducts();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <TextButton icon={CareLeft} title="voltar" onClick={backToHome} />
        <h1>Editar produto</h1>
        <Form>
          <div className="desktop-wrap1">
            <div className="name-wrap">
              <label htmlFor="name">Nome</label>
              <Input
                id="name"
                defaultValue={product?.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="category-wrap">
              <label htmlFor="category">Categoria</label>
              <SelectInput
                id="category"
                option1="smartphones"
                option2="laptops"
                category={product?.category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="stock-wrap">
              <label htmlFor="stock">Quantidade no estoque</label>
              <Input
                id="stock"
                defaultValue={product?.stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
          </div>
          <div className="desktop-wrap2">
            <div className="image-wrap">
              <label htmlFor="image">Imagem do prato</label>
              <Input
                id="image"
                defaultValue={product?.image}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="brand-wrap">
              <label htmlFor="brand">Marca</label>
              <Input
                id="brand"
                defaultValue={product?.brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="price-wrap">
              <label htmlFor="price">Preço</label>
              <Input
                id="price"
                defaultValue={product?.price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="area-wrap">
            <label htmlFor="description">Descrição</label>
            <TextArea
              id="description"
              defaultValue={product?.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="buttons">
            <Button title="Excluir produto" onClick={handleDeleteProduct} />
            <Button title="Salvar alterações" onClick={handleUpdateProduct} />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
