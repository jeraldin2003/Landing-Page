import "./App.css";
import { useState } from "react";

const products = [
  {
    name: "iPhone 17",
    image: "https://picsum.photos/400?random=1",
    price: "$999",
  },
  {
    name: "MacBook Pro",
    image: "https://picsum.photos/400?random=2",
    price: "$1999",
  },
  {
    name: "AirPods Pro",
    image: "https://picsum.photos/400?random=3",
    price: "$249",
  },
  {
    name: "iPad Air",
    image: "https://picsum.photos/400?random=4",
    price: "$699",
  },
  {
    name: "Apple Watch",
    image: "https://picsum.photos/400?random=5",
    price: "$399",
  },
  {
    name: "Magic Keyboard",
    image: "https://picsum.photos/400?random=6",
    price: "$149",
  },
];

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Orders", href: "#orders" },
  { label: "Offers", href: "#offers" },
  { label: "Categories", href: "#products" },
  { label: "Support", href: "#faq" },
];

const trustBadges = [
  "Authorized Retailer",
  "CES Featured",
  "Editor's Choice",
  "Trusted Reviews",
  "Best Buy Partner",
  "Tech Awards",
];

const features = [
  {
    title: "Fast Delivery",
    description: "Nationwide shipping with real-time tracking on every order.",
  },
  {
    title: "Genuine Products",
    description: "Authentic devices sourced from verified suppliers only.",
  },
  {
    title: "Expert Support",
    description: "Live help from specialists who know your gear inside out.",
  },
  {
    title: "Easy Returns",
    description: "Hassle-free 30-day returns if something is not quite right.",
  },
];

const whyItems = [
  {
    title: "Curated catalog",
    text: "Hand-picked electronics chosen for quality, performance, and value.",
  },
  {
    title: "Price match promise",
    text: "See a lower price elsewhere? We will match it on eligible items.",
  },
  {
    title: "Secure checkout",
    text: "Encrypted payments and buyer protection on every purchase.",
  },
  {
    title: "Warranty included",
    text: "Standard manufacturer coverage plus optional extended plans.",
  },
];

const steps = [
  {
    num: "01",
    title: "Browse",
    text: "Explore categories and compare specs side by side.",
  },
  {
    num: "02",
    title: "Compare",
    text: "Save favorites and read expert reviews before you buy.",
  },
  {
    num: "03",
    title: "Checkout",
    text: "Fast, secure payment with flexible delivery options.",
  },
  {
    num: "04",
    title: "Enjoy",
    text: "Unbox premium gear backed by our support team.",
  },
];

const offers = [
  {
    tag: "Limited time",
    title: "Free shipping $50+",
    text: "On all in-stock electronics across the U.S.",
  },
  {
    tag: "Students",
    title: "10% student discount",
    text: "Verify your status and save on laptops and tablets.",
  },
  {
    tag: "Bundle",
    title: "Accessory deals",
    text: "Pair any phone with cases and chargers at 20% off.",
  },
];

const faqItems = [
  {
    question: "How long does shipping take?",
    answer:
      "Most orders ship within 1–2 business days. Standard delivery is 3–5 days; express options are available at checkout.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You have 30 days to return unused items in original packaging. We provide a prepaid label for eligible returns.",
  },
  {
    question: "Is warranty included?",
    answer:
      "Yes. All products include the manufacturer's warranty. You can add extended coverage at checkout for extra peace of mind.",
  },
  {
    question: "Can I order multiple items in one checkout?",
    answer:
      "Absolutely. Add as many products as you like to your cart. Bundles and multi-item discounts apply automatically where eligible.",
  },
];

function PromoBar() {
  return (
    <div className="promo-bar">
      <p>Free shipping on orders over $50 — premium electronics, delivered.</p>
    </div>
  );
}

function NavBar({ searchTerm, setSearchTerm, menuOpen, setMenuOpen }) {
  return (
    <header className="nav-header">
      <nav className="nav-bar">
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="logo-container">
          <a href="#top" className="pifi-logo">
            <span className="logo-mark">P</span>
            <span className="logo-text">PIFI</span>
          </a>
        </div>

        <div className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="nav-search"
          />
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-outline btn-signin">
            Sign in
          </a>
        </div>
      </nav>
    </header>
  );
}

function TrustPill({ icon, label }) {
  return (
    <div className="trust-pill">
      <span className="trust-pill-icon" aria-hidden="true">
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner container">
        <div className="hero-content">
          <p className="hero-tag">NEW COLLECTION 2026</p>
          <h1>
            Shop Smart.
            <br />
            Live Connected.
            <br />
            Unwrap Peace of Mind.
          </h1>
          <p className="hero-sub">
            Premium electronics and accessories crafted for modern lifestyles.
          </p>
          <div className="hero-ctas">
            <a href="#products" className="btn btn-primary">
              Shop now
            </a>
            <a href="#offers" className="btn btn-secondary">
              Explore offers
            </a>
          </div>
          <div className="trust-pills">
            <TrustPill icon="🚚" label="Free Shipping" />
            <TrustPill icon="↩" label="30-Day Returns" />
            <TrustPill icon="✓" label="1-Year Warranty" />
          </div>
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

function TrustStrip() {
  return (
    <section className="trust-strip section">
      <div className="container">
        <p className="trust-strip-label">Trusted by shoppers nationwide</p>
        <div className="trust-strip-scroll">
          {trustBadges.map((badge) => (
            <span key={badge} className="trust-badge">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="section">
      <div className="container feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <div className="feature-icon" aria-hidden="true">
              ◆
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="section section-alt" id="why">
      <div className="container why-grid">
        <div className="why-image">
          <img
            src="https://picsum.photos/600/700?random=why"
            alt="Person using premium electronics"
          />
        </div>
        <div className="why-content">
          <p className="section-eyebrow">WHY PIFI</p>
          <h2>Every purchase deserves confidence. Because quality is personal.</h2>
          <ul className="why-list">
            {whyItems.map((item) => (
              <li key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <a href="#products" className="btn btn-primary">
            Shop now
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-eyebrow">HOW IT WORKS</p>
        <h2 className="section-title">From browse to doorstep in four simple steps</h2>
        <div className="step-grid">
          {steps.map((step) => (
            <article key={step.num} className="step-card">
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OffersSection() {
  return (
    <section className="section section-alt" id="offers">
      <div className="container">
        <p className="section-eyebrow">OFFERS</p>
        <h2 className="section-title">Deals worth unwrapping</h2>
        <div className="offers-grid">
          {offers.map((offer) => (
            <article key={offer.title} className="offer-card">
              <span className="offer-tag">{offer.tag}</span>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrdersSection() {
  return (
    <section className="section orders-section" id="orders">
      <div className="container orders-inner">
        <div className="orders-copy">
          <p className="section-eyebrow">ORDERS</p>
          <h2>Track your order</h2>
          <p>Enter your order number and email to see delivery status and updates.</p>
        </div>
        <form className="orders-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Order number" aria-label="Order number" />
          <input type="email" placeholder="Email address" aria-label="Email address" />
          <button type="submit" className="btn btn-primary">
            Look up order
          </button>
        </form>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <div className="section-heading container" id="products">
      <p className="section-eyebrow">CATEGORIES</p>
      <h2 className="section-title">Best sellers</h2>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">{product.price}</p>
        <button type="button">Add to cart</button>
      </div>
    </div>
  );
}

function ProductGrid({ products: items }) {
  if (items.length === 0) {
    return <h2 className="no-products">No products found</h2>;
  }

  return (
    <div className="product-grid container">
      {items.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}

function FAQSection({ openIndex, setOpenIndex }) {
  return (
    <section className="section section-alt" id="faq">
      <div className="container faq-container">
        <p className="section-eyebrow">SUPPORT</p>
        <h2 className="section-title">We are with you every step of the way</h2>
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`faq-item ${isOpen ? "accordion-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && <div className="faq-answer">{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="section newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <h2>Be the first to know</h2>
          <p>New arrivals, exclusive offers, and tech tips — straight to your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" aria-label="Email" />
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo-mark">P</span>
          <span className="logo-text">PIFI</span>
          <p>Premium electronics for modern living.</p>
        </div>
        <div className="footer-col">
          <h4>Home</h4>
          <a href="#top">Home</a>
          <a href="#why">Why PIFI</a>
          <a href="#faq">FAQs</a>
        </div>
        <div className="footer-col">
          <h4>Shop</h4>
          <a href="#products">Categories</a>
          <a href="#offers">Offers</a>
          <a href="#orders">Orders</a>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a href="#faq">Help center</a>
          <a href="#orders">Track order</a>
          <a href="#faq">Contact</a>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>© 2026 PIFI. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PromoBar />
      <NavBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Hero />
      <TrustStrip />
      <FeatureGrid />
      <WhySection />
      <HowItWorks />
      <OffersSection />
      <OrdersSection />
      <ProductsSection />
      <ProductGrid products={filteredProducts} />
      <FAQSection openIndex={faqOpen} setOpenIndex={setFaqOpen} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
