import {
  Stethoscope,
  Scale,
  Cpu,
  Briefcase,
  HeartPulse,
  Dna,
  FileText,
  PenLine,
  RefreshCcw,
  Award,
  Users,
  FlaskConical,
  Handshake,
  Clock,
  ArrowRight,
} from "lucide-react";
import aboutImg from "@/assets/about-campus.jpg";

export function SectionTitle({
  eyebrow,
  title,
  description,
  light,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={
          light
            ? "text-xs font-semibold uppercase tracking-[0.18em] text-accent"
            : "text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          light
            ? "mt-3 font-display text-3xl leading-tight tracking-tight text-primary-foreground sm:text-4xl"
            : "mt-3 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
        }
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            light
              ? "mt-4 text-base leading-relaxed text-primary-foreground/75"
              : "mt-4 text-base leading-relaxed text-muted-foreground"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <img
          src={aboutImg}
          alt="Biblioteca da UNEX com estudantes em estudo coletivo"
          width={1200}
          height={900}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-[var(--radius-4xl)] object-cover shadow-[var(--shadow-elegant)]"
        />
        <div>
          <SectionTitle
            eyebrow="Quem somos"
            title="Uma universidade construída para formar profissionais completos"
            description="Fundada com o propósito de levar ensino superior de qualidade ao interior, a UNEX
            une infraestrutura moderna, corpo docente qualificado e forte conexão com o mercado
            regional. Nossos projetos de extensão atendem mais de 30 mil pessoas por ano nas
            comunidades onde estamos presentes."
          />
          <ul className="mt-8 space-y-4">
            {[
              "Metodologia ativa com prática desde o primeiro semestre",
              "Clínicas-escola, hospitais e empresas parceiras para estágio",
              "Núcleo de carreira e empregabilidade acompanhando cada aluno",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const courses = [
  { icon: Stethoscope, name: "Medicina", mode: "Bacharelado · Integral", duration: "12 semestres" },
  { icon: HeartPulse, name: "Enfermagem", mode: "Bacharelado · Noturno", duration: "10 semestres" },
  { icon: Dna, name: "Biomedicina", mode: "Bacharelado · Noturno", duration: "8 semestres" },
  { icon: Scale, name: "Direito", mode: "Bacharelado · Manhã e noite", duration: "10 semestres" },
  { icon: Briefcase, name: "Administração", mode: "Bacharelado · Noturno", duration: "8 semestres" },
  { icon: Cpu, name: "Engenharia de Software", mode: "Bacharelado · Híbrido", duration: "8 semestres" },
];

export function Courses() {
  return (
    <section id="cursos" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Cursos"
          title="Graduações reconhecidas pelo MEC e alinhadas ao mercado"
          description="Mais de 20 cursos de graduação, pós-graduação e cursos técnicos. Confira alguns dos
          destaques da UNEX."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(({ icon: Icon, name, mode, duration }) => (
            <li
              key={name}
              className="group rounded-[var(--radius-2xl)] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl text-card-foreground">{name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{mode}</p>
              <p className="text-sm text-muted-foreground">{duration}</p>
              <a
                href="#inscricao"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Ver detalhes <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const paths = [
  {
    icon: PenLine,
    title: "Vestibular online",
    text: "Prova de redação feita de casa, com resultado em até 24 horas.",
  },
  {
    icon: FileText,
    title: "Nota do ENEM",
    text: "Use sua nota a partir de 450 pontos e garanta sua vaga sem prova.",
  },
  {
    icon: RefreshCcw,
    title: "Transferência",
    text: "Venha de outra instituição aproveitando as disciplinas já cursadas.",
  },
  {
    icon: Award,
    title: "Segunda graduação",
    text: "Já é graduado? Ingresse com processo simplificado e grade reduzida.",
  },
];

export function Admission() {
  return (
    <section id="ingresso" className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          light
          eyebrow="Formas de ingresso"
          title="Escolha o caminho mais simples para começar"
          description="Quatro maneiras de entrar na UNEX, todas com atendimento humano acompanhando você
          do cadastro à matrícula."
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="rounded-[var(--radius-2xl)] border border-primary-foreground/15 bg-primary-foreground/5 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-display text-2xl text-primary-foreground/25">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg">{title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const benefits = [
  { icon: FlaskConical, title: "Laboratórios de simulação", text: "Ambientes realistas de saúde, tecnologia e engenharia." },
  { icon: Users, title: "Professores mestres e doutores", text: "85% do corpo docente com titulação stricto sensu." },
  { icon: Handshake, title: "Estágio garantido", text: "Rede com mais de 400 empresas e instituições parceiras." },
  { icon: Clock, title: "Horários flexíveis", text: "Turmas integrais, noturnas e disciplinas híbridas." },
];

export function Benefits() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Por que a UNEX"
          title="Estrutura, acompanhamento e oportunidade real de carreira"
        />
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-5 border-t border-border pt-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
