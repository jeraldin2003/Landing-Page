import { cn } from "../../lib/cn";

export default function Logo({ textClassName, className }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-accent font-display text-xl font-bold text-white">
        P
      </span>
      <span
        className={cn(
          "font-display text-[1.35rem] font-bold tracking-wide text-text",
          textClassName
        )}
      >
        PIFI
      </span>
    </div>
  );
}
