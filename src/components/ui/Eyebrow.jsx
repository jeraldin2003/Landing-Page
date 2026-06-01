import { cn } from "../../lib/cn";

export default function Eyebrow({ className, children }) {
  return (
    <p
      className={cn(
        "mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}
