import { useState } from "react";
import { products } from "./data/products";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Products from "./components/Products/Products";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import {faqItems} from "./data/faq.js"

import Map from "./components/Map/map"

import "leaflet/dist/leaflet.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(Array(faqItems.length).fill(false))

  const [cart, setCart] = useState(Array(products.length).fill(0))
  // console.log(cart)
  
  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Hero />
      <Features />
      <Products products={filteredProducts} cart ={cart} setCart ={setCart} />
      <Map/>
      <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <Footer />
      
    </>
  );
}
