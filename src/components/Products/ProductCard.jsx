import { products as allProducts } from "../../data/products";
import { cn } from "../../lib/cn";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function ProductCard({ product, cart, setCart }) {
  const cartIndex = allProducts.findIndex((p) => p.id === product.id);
  const qty = cart[cartIndex] ?? 0;

  function addToCart() {
    const copyCart = cart.slice();
    copyCart[cartIndex] = copyCart[cartIndex] + 1;
    setCart(copyCart);
  }

  function removeFromCart() {
    const copyCart = cart.slice();
    copyCart[cartIndex] = Math.max(0, copyCart[cartIndex] - 1);
    setCart(copyCart);
  }

  function clearFromCart() {
    const copyCart = cart.slice();
    copyCart[cartIndex] = 0;
    setCart(copyCart);
  }

  return (
    <Card padding={false} className="overflow-hidden transition-colors duration-200 hover:border-accent">
      <img
        src={product.image}
        alt={product.name}
        className="h-[220px] w-full object-cover"
      />
      <div className="flex flex-col gap-2 p-5">
        <h3 className="font-display text-[1.1rem]">{product.name}</h3>
        <p className="text-[1.05rem] font-bold text-accent-dark">
          {product.price}
        </p>

        <div className="mt-1 flex flex-col">
          <Button
            variant="primary"
            onClick={addToCart}
            disabled={qty > 0}
            className={cn(
              "max-h-12 w-full overflow-hidden py-3 text-sm transition-all duration-300",
              qty > 0 &&
                "pointer-events-none max-h-0 scale-[0.98] py-0 opacity-0"
            )}
          >
            Add to cart
          </Button>

          <div
            className={cn(
              "grid transition-[grid-template-rows,opacity,transform] duration-300 ease-out",
              qty > 0
                ? "pointer-events-auto translate-y-0 grid-rows-[1fr] opacity-100"
                : "pointer-events-none -translate-y-1.5 grid-rows-[0fr] opacity-0"
            )}
            aria-hidden={qty === 0}
          >
            <div className="flex min-h-0 flex-col gap-2.5 overflow-hidden">
              <div
                className="flex w-full items-center justify-between rounded-pill border border-border bg-bg px-1.5 py-1"
                role="group"
                aria-label="Quantity"
              >
                <button
                  type="button"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-none bg-transparent font-body text-xl font-semibold text-text transition-colors hover:bg-bg-alt hover:text-accent-dark"
                  onClick={removeFromCart}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span
                  key={qty}
                  className="min-w-[2ch] animate-qty-pop text-center text-base font-bold tabular-nums"
                >
                  {qty}
                </span>
                <button
                  type="button"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-none bg-transparent font-body text-xl font-semibold text-text transition-colors hover:bg-bg-alt hover:text-accent-dark"
                  onClick={addToCart}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <Button
                variant="ghost"
                onClick={clearFromCart}
                className={cn(
                  "w-full py-3 text-sm",
                  qty > 0 && "animate-cart-fade-in"
                )}
              >
                Remove from cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
