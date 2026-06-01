import { cn } from "../../lib/cn";

export default function Section({ alt = false, id, className, children }) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-[60px]",
        alt && "bg-bg-alt",
        className
      )}
    >
      {children}
    </section>
  );
}
