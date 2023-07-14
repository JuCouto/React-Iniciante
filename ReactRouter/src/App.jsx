import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

import Navbar from "./components/NavBar"

import "./App.css"

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
