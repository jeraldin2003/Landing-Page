import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import ProductCard from "./ProductCard";

export default function Products({ products, cart, setCart }) {
  return (
    <Section alt id="products">
      <Container>
        <Eyebrow>Products</Eyebrow>
        <Heading>Best sellers</Heading>

        {products.length === 0 ? (
          <p className="py-10 text-center font-display text-muted">
            No products found
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
