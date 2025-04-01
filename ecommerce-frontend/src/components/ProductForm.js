import React, { useState } from " react";
import api from "../services/api";

const ProductForm = ({ onProductAdd }) => {
  const [name,setName] = useState("");
  const [description, setDescription] = useState("");
  const [price,setPrice] =useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = { name, description, price: parseFloat(price) };
      await api.post("/products", newProduct);
      alert("Produto cadastrado com sucesso!");
      setName("");
      setDescription("");
      setPrice("");
      onProductAdd(); //atualiza a lista de produtos
    } catch (err) {
      console.error("Erro ao cadastrar produto:", err);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2> Adicionar Produto </h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholer="preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit"> Cadastrar </button>
    </Form>
  );
};

export default ProductForm;