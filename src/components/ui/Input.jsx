import { cn } from "../../lib/cn";

export default function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "rounded-pill border border-border bg-surface px-4 py-2.5 font-body text-sm outline-none transition-colors duration-200 focus:border-accent",
        className
      )}
      {...props}
    />
  );
}
