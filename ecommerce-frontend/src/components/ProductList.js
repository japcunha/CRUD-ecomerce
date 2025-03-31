import React, { useEffect, useState } from "react";
import api from "../services/api";


const ProductList = () => {
  const [products, setProducts] = useState([]);

// para que serve o useState? Armazena dados mutáveis dentro de um componente funcional.
// Permite que o React re-renderize automaticamente quando o estado muda.
// Facilita a criação de interações dinâmicas, como formulários, contadores e mudanças de estilo.

  useEffect(() => {
    api.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("Erro de buscar produtos:", err));

  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {products.length === 0 ? (
        <p>Nenhum produto encontrado</p>
      ) : (
        products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h2> {product.name}</h2>
            <p>{product.description}</p>
            <p> R${product.price.toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default ProductList;
