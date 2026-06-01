import { cn } from "../../lib/cn";

const sizes = {
  lg: "text-[clamp(2rem,4vw,2.75rem)] leading-[1.15]",
  sm: "mb-8 text-[clamp(1.75rem,3vw,2.25rem)] leading-tight",
};

export default function Heading({
  as: Tag = "h2",
  size = "sm",
  className,
  children,
}) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold text-text",
        sizes[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
