import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark, LogoWord } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre", label: "A UNEX" },
  { href: "#cursos", label: "Cursos" },
  { href: "#ingresso", label: "Ingresso" },
  { href: "#unidades", label: "Unidades" },
  { href: "#noticias", label: "Notícias" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md shadow-[0_10px_30px_-24px_oklch(0.2_0.06_255)]"
          : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <a href="#hero" className="flex min-w-0 items-center gap-3" aria-label="UNEX — página inicial">
          <LogoMark />
          <span className="min-w-0">
            <LogoWord className="block text-xl leading-none text-foreground" />
            <span className="block truncate text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Centro Universitário de Excelência
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inscricao"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
          >
            Inscreva-se
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden"
      >
        <nav className="flex flex-col" aria-label="Navegação mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3.5 text-base font-medium text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inscricao"
            onClick={() => setOpen(false)}
            className="mt-5 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
          >
            Inscreva-se agora
          </a>
        </nav>
      </div>
    </header>
  );
}
