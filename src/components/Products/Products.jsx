import "./Products.css";

function ProductCard({ product, cart, setCart, index }) {
  function addToCart(index){
    const copyCart = cart.slice()
    copyCart[index] = copyCart[index]+1;
    setCart(copyCart)
  }
  function removeFromCart(index){
    const copyCart = cart.slice()
    copyCart[index] = copyCart[index]-1;
    setCart(copyCart)
  }
  return (
    <article className="product-card card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <button type="button" className="btn btn-primary" onClick={()=> addToCart(index)}>
          Add to cart
        </button>
        {cart[index] > 0 && (<button type="button" className="btn btn-primary" onClick={()=> removeFromCart(index)}>
          Remove From Cart
        </button>)}
        {cart[index] > 0 &&<span className="product-info" >
          In Cart - {cart[index]}
        </span>}
        
      </div>
    </article>
  );
}

export default function Products({ products, cart, setCart }) {
  
  return (
    <section className="section section-alt" id="products">
      <div className="container">
        <p className="eyebrow">Products</p>
        <h2 className="heading-sm">Best sellers</h2>

        {products.length === 0 ? (
          <p className="no-products text-muted">No products found</p>
        ) : (
          <div className="products-grid">
            {products.map((product, index) => (
              <ProductCard index = {index} key={product.id} product={product} cart = {cart} setCart = {setCart} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
