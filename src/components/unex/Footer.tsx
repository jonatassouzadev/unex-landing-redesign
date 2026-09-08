import { Instagram, Facebook, Linkedin } from "lucide-react";
import { LogoMark, LogoWord } from "./Logo";

export function FinalCta() {
  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-[1.2fr_auto] lg:px-8">
        <div>
          <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Sua vaga para 2026.1 está aberta
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Inscreva-se no vestibular online e receba o resultado em até 24 horas, com bolsas de
            até 60% na primeira mensalidade.
          </p>
        </div>
        <a
          href="#inscricao"
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
        >
          Fazer minha inscrição
        </a>
      </div>
    </section>
  );
}

const groups = [
  { title: "Institucional", links: ["Sobre a UNEX", "Missão e valores", "Comissão própria de avaliação", "Trabalhe conosco"] },
  { title: "Ensino", links: ["Graduação", "Pós-graduação", "Cursos técnicos", "Extensão"] },
  { title: "Aluno", links: ["Portal do aluno", "Biblioteca digital", "Calendário acadêmico", "Central de atendimento"] },
];

export function Footer() {
  return (
    <footer className="bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="ring-accent/60" />
              <span>
                <LogoWord className="block text-xl leading-none" />
                <span className="block text-[11px] uppercase tracking-[0.18em] opacity-70">
                  Centro Universitário de Excelência
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm opacity-70">
              Credenciada pelo MEC. Ensino superior de qualidade no interior da Bahia desde 1998.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={["Instagram da UNEX", "Facebook da UNEX", "LinkedIn da UNEX"][i]}
                  className="grid h-10 w-10 place-items-center rounded-full border border-background/25 transition-colors hover:bg-background/10"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-background/15 pt-6 text-xs opacity-60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} UNEX — Centro Universitário de Excelência.</p>
          <p>Ouvidoria: ouvidoria@unex.edu.br · 0800 000 0000</p>
        </div>
      </div>
    </footer>
  );
}
