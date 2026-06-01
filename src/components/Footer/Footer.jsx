import Container from "../ui/Container";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-text py-10 text-white/85">
      <Container className="flex flex-wrap items-center justify-between gap-6 max-md:flex-col max-md:text-center">
        <div className="max-md:order-1">
          <Logo textClassName="text-white" className="mb-2 justify-center max-md:justify-center" />
          <p className="text-sm text-white/60">
            Premium electronics for modern living.
          </p>
        </div>

        <nav
          className="flex gap-6 max-md:order-2"
          aria-label="Footer"
        >
          <a
            href="#products"
            className="text-sm text-white/65 transition-colors hover:text-white"
          >
            Products
          </a>
          <a
            href="#faq"
            className="text-sm text-white/65 transition-colors hover:text-white"
          >
            FAQ
          </a>
          <a
            href="#faq"
            className="text-sm text-white/65 transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>

        <p className="text-sm text-white/50 max-md:order-3">
          © 2026 PIFI. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
