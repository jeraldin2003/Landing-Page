import { navLinks } from "../../data/navigation";
import "./NavBar.css";

export default function NavBar({
  searchTerm,
  setSearchTerm,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <header className="nav-header">
      <nav className="nav-bar container">
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

        <a href="#top" className="nav-logo">
          <span className="logo-mark">P</span>
          <span className="logo-text">PIFI</span>
        </a>

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

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input nav-search"
          aria-label="Search products"
        />
      </nav>
    </header>
  );
}
