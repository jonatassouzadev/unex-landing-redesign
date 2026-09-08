import { cn } from "@/lib/utils";

/** Marca UNEX: bloco navy com o "x" em verde-lima. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary ring-1 ring-inset ring-accent/40",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" role="presentation">
        <path
          d="M4 4.5 L12 12 L4 19.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary-foreground"
        />
        <path
          d="M20 4.5 L12 12 L20 19.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        />
      </svg>
    </span>
  );
}

/** "UNEX" com o X em verde-lima. */
export function LogoWord({ className }: { className?: string }) {
  return (
    <span className={cn("font-display tracking-tight", className)}>
      UNE<span className="text-accent">X</span>
    </span>
  );
}
