import React, { useEffect, useState } from "react";
import axios from "axios";

// Declaração de componente:
const ProdutosLista = () => {
    const [products, setProducts] = useState([]); // Estado para armazenar os produtos

    useEffect(() => {
        axios.get("http://localhost:5001/api/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Erro ao buscar produtos:", err));
    }, []);

    return (
        <div>
            <h1>Produtos</h1>
            {products.length === 0 ? (
                <p>Carregando produtos...</p>
            ) : (
                products.map((product) => (
                    <div key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>R$ {product.price.toFixed(2)}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProdutosLista;
