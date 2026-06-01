import { cn } from "../../lib/cn";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-dark border-none",
  ghost:
    "bg-transparent text-muted border border-border hover:border-accent hover:bg-bg hover:text-accent-dark",
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-pill border font-body text-[0.95rem] font-semibold transition-colors duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
