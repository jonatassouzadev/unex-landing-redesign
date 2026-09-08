import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionTitle } from "./Sections";

const items = [
  {
    name: "Larissa Amorim",
    course: "Enfermagem · turma 2024",
    text: "Os laboratórios de simulação mudaram minha formação. Cheguei ao estágio no hospital com segurança para atender de verdade.",
  },
  {
    name: "Rafael Nunes",
    course: "Direito · egresso 2023",
    text: "O núcleo de prática jurídica me colocou em audiências reais desde o quinto semestre. Passei na OAB na primeira tentativa.",
  },
  {
    name: "Camila Sousa",
    course: "Engenharia de Software · turma 2025",
    text: "Consegui conciliar trabalho e faculdade pelo formato híbrido, e fui contratada como desenvolvedora ainda no terceiro ano.",
  },
  {
    name: "Douglas Pereira",
    course: "Administração · egresso 2022",
    text: "A rede de empresas parceiras abriu portas na região. Hoje coordeno a operação de uma indústria em Feira de Santana.",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(i, items.length - 1));
    const child = track.children[clamped] as HTMLElement | undefined;
    if (child) track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setIndex(clamped);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const w = track.clientWidth || 1;
      setIndex(Math.round(track.scrollLeft / w));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-secondary py-20 lg:py-28" aria-labelledby="depoimentos-titulo">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div id="depoimentos-titulo">
            <SectionTitle
              eyebrow="Depoimentos"
              title="Quem estudou na UNEX conta como foi"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollTo(index - 1)}
              aria-label="Depoimento anterior"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo(index + 1)}
              aria-label="Próximo depoimento"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((t) => (
            <li
              key={t.name}
              className="w-full min-w-0 shrink-0 snap-start sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
            >
              <figure className="flex h-full flex-col rounded-[var(--radius-2xl)] border border-border bg-card p-7">
                <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-card-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <span className="block font-display text-lg text-card-foreground">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">{t.course}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Ir para o depoimento ${i + 1}`}
              aria-current={i === index}
              className={
                i === index
                  ? "h-2 w-8 rounded-full bg-primary transition-all"
                  : "h-2 w-2 rounded-full bg-border transition-all"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
