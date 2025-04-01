//criar a página inicial:
import React from "react";
import ProductList from "..components/ProductList";
const Home = () => {
    return (
        <div>
            <h1>Bem vindo ao nosso e-commerce!</h1>
            <ProductList/>
        </div>
    );
};
export default Home;