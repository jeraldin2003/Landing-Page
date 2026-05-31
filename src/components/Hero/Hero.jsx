import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner container">
        <div className="hero-content">
          <p className="eyebrow">PIFI Electronics</p>
          <h1 className="heading">Premium electronics, delivered.</h1>
          <p className="hero-sub text-muted">
            Free shipping on orders over $50. Authentic devices, expert support.
          </p>
          <a href="#products" className="btn btn-primary">
            Shop now
          </a>
        </div>
        <div className="hero-visual">
          <img
            src="https://picsum.photos/700/800?random=hero"
            alt="Premium electronics showcase"
          />
        </div>
      </div>
    </section>
  );
}
