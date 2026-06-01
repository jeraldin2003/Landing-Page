import { cn } from "../../lib/cn";

export default function Card({ className, children, padding = true }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface",
        padding && "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
