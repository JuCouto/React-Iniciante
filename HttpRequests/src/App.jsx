import './App.css'

import { useState,useEffect } from 'react'

// URL da API
const url= "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    async function fetchData() {
    const res = await fetch(url)

    // passa os dados recebidos na requisição(que chegam em json) para um objeto e poder ser manipulado
    const data = await res.json();

    // armazena no set
    setProducts(data);
    }
    fetchData();

  },[]);


  return (
    
     <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}</li>
        ))}
      </ul>
      </div> 
    
  )
}

export default App
