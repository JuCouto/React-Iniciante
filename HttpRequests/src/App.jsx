import './App.css'

import { useState,useEffect } from 'react'

// URL da API
const url= "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([])


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect( () =>{
    async function fetchData() {
    const res = await fetch(url)

    // passa os dados recebidos na requisição(que chegam em json) para um objeto e poder ser manipulado
    const data = await res.json();

    // armazena no set
    setProducts(data);
    }
    
    fetchData();

  },[]);
console.log(name,price)

const handleSubmit = async (e) => {
  e.preventDefault();

  const product = {
    name,
    price,
  };

  const res = await fetch (url, {
    method:"Post",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(product),
  });
  console.log(product)
};

  return (
    
     <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}</li>
        ))}
      </ul>

      <div className="add-product">
        <p>Adicionar produto:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
         <input type="submit" value="Criar" />
        </form>
      </div>
      </div> 
    
  )
}

export default App;
