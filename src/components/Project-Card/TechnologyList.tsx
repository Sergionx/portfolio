import { cn } from "@heroui/react";

export function TechnologyList({
  technologies,
  variant = "card",
  className,
}: {
  technologies: string[];
  variant?: "card" | "modal";
  className?: string;
}) {
  const isCard = variant === "card";
  const max = 6;
  const shouldTruncate = isCard && technologies.length > max;
  const items = shouldTruncate ? technologies.slice(0, max) : technologies;

  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-2 font-bold text-sm mt-auto pr-8",
        className
      )}
    >
      {items.map((technology, techIndex) => (
        <li
          className="bg-tertiary-300 text-tertiary-800 py-1 px-3 rounded-xl"
          key={techIndex}
        >
          {technology}
        </li>
      ))}
      {shouldTruncate && (
        <li className="bg-tertiary-300 text-tertiary-800 py-1 px-3 rounded-xl">
          …
        </li>
      )}
    </ul>
  );
}
