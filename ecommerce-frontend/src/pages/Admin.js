import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Admin = () => {
    const [refresh, setRefresh ] = useState(false); 
    //refresh atualiza a lista toda vez que um novo produto pe adicionado.

    return (
        <div>
            <h1>Painel administrativo</h1>
        <ProductForm onProductAdded={() => setRefresh(!refresh)} />
        <ProductList key={refresh} />
        </div>
        
    );
};
export default Admin;