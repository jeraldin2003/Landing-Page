import "./Products.css";

function ProductCard({ product }) {
  return (
    <article className="product-card card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <button type="button" className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default function Products({ products }) {
  return (
    <section className="section section-alt" id="products">
      <div className="container">
        <p className="eyebrow">Products</p>
        <h2 className="heading-sm">Best sellers</h2>

        {products.length === 0 ? (
          <p className="no-products text-muted">No products found</p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
