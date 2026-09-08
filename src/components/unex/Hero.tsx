import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";

const stats = [
  { value: "28 anos", label: "de tradição no ensino superior" },
  { value: "+45 mil", label: "alunos formados" },
  { value: "Nota 5", label: "máxima em avaliações do MEC" },
  { value: "6 unidades", label: "no interior da Bahia" },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]">
            <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
            Inscrições abertas 2026.1
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Excelência que transforma o futuro da sua região
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Na UNEX, você aprende com professores mestres e doutores, laboratórios de ponta e
            estágios desde os primeiros semestres. Graduação, pós-graduação e técnico com
            reconhecimento do MEC.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#inscricao"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
            >
              Quero me inscrever
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#cursos"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Conhecer os cursos
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <img
            src={heroImg}
            alt="Estudantes da UNEX caminhando pelo campus"
            width={1600}
            height={1200}
            className="aspect-[4/3] w-full rounded-[var(--radius-4xl)] object-cover shadow-[var(--shadow-elegant)]"
          />
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-background p-4 text-foreground shadow-[var(--shadow-elegant)] sm:left-8 sm:right-8">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Vestibular online</p>
            <p className="mt-1 text-sm font-semibold">
              Resultado em até 24h e bolsas de até 60% na primeira mensalidade.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 bg-primary/60">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-12 pt-16 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl text-accent sm:text-4xl">{s.value}</dt>
              <dd className="mt-2 text-sm text-primary-foreground/75">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
