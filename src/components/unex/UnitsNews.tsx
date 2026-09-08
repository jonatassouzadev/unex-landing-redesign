import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { SectionTitle } from "./Sections";
import unitImg from "@/assets/unit-campus.jpg";
import newsImg from "@/assets/news-lab.jpg";

const units = [
  { city: "Feira de Santana", address: "Av. Getúlio Vargas, 1240 — Centro", phone: "(75) 3600-1000" },
  { city: "Vitória da Conquista", address: "Av. Olívia Flores, 890 — Candeias", phone: "(77) 3420-2000" },
  { city: "Itabuna", address: "Rua Miguel Calmon, 315 — São Caetano", phone: "(73) 3210-3000" },
];

const news = [
  {
    tag: "Extensão",
    title: "Mutirão de saúde da UNEX atende 2 mil pessoas em Feira de Santana",
    date: "12 de agosto de 2026",
    image: newsImg,
  },
  {
    tag: "Pesquisa",
    title: "Alunos de Biomedicina apresentam estudo em congresso nacional",
    date: "29 de julho de 2026",
    image: unitImg,
  },
];

export function Units() {
  return (
    <section id="unidades" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Unidades"
          title="Perto de você, no coração da Bahia"
          description="Campi com bibliotecas, clínicas-escola e laboratórios completos."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <img
            src={unitImg}
            alt="Fachada de vidro de uma unidade da UNEX"
            width={1200}
            height={800}
            loading="lazy"
            className="aspect-[3/2] w-full rounded-[var(--radius-4xl)] object-cover shadow-[var(--shadow-elegant)]"
          />
          <ul className="space-y-4">
            {units.map((u) => (
              <li key={u.city} className="rounded-[var(--radius-2xl)] border border-border bg-card p-6">
                <h3 className="font-display text-xl text-card-foreground">{u.city}</h3>
                <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {u.address}
                </p>
                <p className="mt-1.5 flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {u.phone}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function News() {
  return (
    <section id="noticias" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Notícias" title="O que acontece na UNEX" />
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {news.map((n) => (
            <li key={n.title}>
              <article className="group h-full overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <img
                  src={n.image}
                  alt={n.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground">
                    {n.tag}
                  </span>
                  <h3 className="mt-3 font-display text-xl leading-snug text-card-foreground">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{n.date}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Ler notícia <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
