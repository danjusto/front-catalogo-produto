import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { Container, Content } from "./style";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { TextButton } from "../../../components/TextButton";
import { Button } from "../../../components/Button";
import { CareLeft } from "../../../components/Icons/CareLeft";

export function Product() {
  const [product, setProduct] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  function backToHome() {
    navigate(-1);
  }

  function moveToEditProduct() {
    navigate(`/alterar/${params.id}`);
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);
      setProduct(response.data);
    }
    fetchProduct();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <TextButton icon={CareLeft} title="voltar" onClick={backToHome} />
        <Content>
          <img src={product?.image} alt="foto do produto" />
          <div>
            <h2>{product?.title}</h2>
            <h3>{product?.brand}</h3>
            <p>{product?.description}</p>
            <div className="numbers">
              <p>
                Preço: {Number(product?.price).toFixed(2).replace(".", ",")}
              </p>
              <p>Estoque: {product?.stock}</p>
            </div>

            <Button title="Editar produto" onClick={moveToEditProduct} />
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
