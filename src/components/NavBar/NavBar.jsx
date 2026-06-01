import { navLinks } from "../../data/navigation";
import { cn } from "../../lib/cn";
import Container from "../ui/Container";
import Input from "../ui/Input";
import Logo from "../ui/Logo";

export default function NavBar({
  searchTerm,
  setSearchTerm,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <Container className="relative grid grid-cols-[auto_1fr_auto] items-center gap-6 py-3.5 max-md:grid-cols-[auto_1fr_auto]">
        <button
          type="button"
          className="hidden cursor-pointer flex-col gap-1.5 border-none bg-transparent p-2 max-md:flex"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block h-0.5 w-[22px] rounded-sm bg-text" />
          <span className="block h-0.5 w-[22px] rounded-sm bg-text" />
          <span className="block h-0.5 w-[22px] rounded-sm bg-text" />
        </button>

        <a href="#top" className="max-md:justify-self-center">
          <Logo />
        </a>

        <div
          className={cn(
            "flex items-center justify-center gap-1 max-md:absolute max-md:top-full max-md:right-0 max-md:left-0 max-md:hidden max-md:flex-col max-md:border-b max-md:border-border max-md:bg-bg/98 max-md:px-6 max-md:py-4",
            menuOpen && "max-md:flex"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-pill px-3.5 py-2.5 text-sm font-medium transition-colors hover:bg-bg-alt hover:text-accent-dark"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[200px] justify-self-end max-md:col-span-full max-md:order-3 max-md:w-full"
          aria-label="Search products"
        />
      </Container>
    </header>
  );
}
