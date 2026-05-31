import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-mark">P</span>
            <span className="logo-text">PIFI</span>
          </div>
          <p className="footer-tagline">Premium electronics for modern living.</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href="#products">Products</a>
          <a href="#faq">FAQ</a>
          <a href="#faq">Contact</a>
        </nav>

        <p className="footer-copy">© 2026 PIFI. All rights reserved.</p>
      </div>
    </footer>
  );
}
