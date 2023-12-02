import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { TextButton } from "../TextButton";
import { FiEdit } from "react-icons/fi";
import { Button } from "../Button";

export function Section({ title, products }) {
  const navigate = useNavigate();

  function moveToProduct(id) {
    navigate(`/produto/${id}`);
  }

  function handleEditProduct(id) {
    navigate(`/alterar/${id}`);
  }

  return (
    <Container>
      <h2>Produtos</h2>
      <div id="grid">
        {products.map((product) => (
          <div className="item" key={product.id}>
            <Button
              id="edit"
              icon={FiEdit}
              onClick={() => handleEditProduct(product.id)}
            />
            <div>
              <img
                src={product.image}
                alt="foto do produto"
                onClick={() => moveToProduct(product.id)}
              />
              <TextButton
                title={product.title}
                onClick={() => moveToProduct(product.id)}
              />
              <p>{product.brand}</p>
              <p>{product.description}</p>
              {product.stock <= 0 ? (
                <h5>Produto indisponível</h5>
              ) : (
                <h3>{Number(product.price).toFixed(2).replace(".", ",")}</h3>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
