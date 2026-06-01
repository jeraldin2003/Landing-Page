import { cn } from "../../lib/cn";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Heading from "../ui/Heading";

const shopLinkClass =
  "inline-flex items-center justify-center rounded-pill bg-accent px-7 py-3.5 font-body text-[0.95rem] font-semibold text-white transition-colors duration-200 hover:bg-accent-dark";

export default function Hero() {
  return (
    <section className="py-12 pb-[60px] md:py-12" id="top">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="max-md:text-center">
            <Eyebrow>PIFI Electronics</Eyebrow>
            <Heading as="h1" size="lg" className="mb-0">
              Premium electronics, delivered.
            </Heading>
            <p className="mx-auto mt-4 mb-7 max-w-[420px] text-lg text-muted max-md:mx-auto">
              Free shipping on orders over $50. Authentic devices, expert support.
            </p>
            <a href="#products" className={shopLinkClass}>
              Shop now
            </a>
          </div>
          <div
            className={cn(
              "h-[30rem] overflow-hidden rounded-lg shadow-[var(--shadow-card)] max-md:order-first"
            )}
          >
            <img
              src="https://picsum.photos/700/800?random=hero"
              alt="Premium electronics showcase"
              className="h-full min-h-[280px] w-full object-cover md:min-h-[360px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
