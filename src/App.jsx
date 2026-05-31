import { useState } from "react";
import { products } from "./data/products";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Products from "./components/Products/Products";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

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
      <Products products={filteredProducts} />
      <FAQ openIndex={faqOpen} setOpenIndex={setFaqOpen} />
      <Footer />
    </>
  );
}
