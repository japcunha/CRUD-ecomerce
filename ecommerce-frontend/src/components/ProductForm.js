import React, { useState } from " reaact";
import api from "../services/api";

const ProductForm = ({ onProductAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (a) => {
    a.preventDefault();
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
        onChange={(a) => setName(a.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(a) => setDescription(a.target.value)}
        required
      />
      <input
        type="number"
        placeholer="preço"
        value={price}
        onChange={(a) => setPrice(a.target.value)}
        required
      />
      <button type="submit"> Cadastrar </button>
    </Form>
  );
};
