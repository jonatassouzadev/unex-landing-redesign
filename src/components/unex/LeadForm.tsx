import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Fields = { nome: string; email: string; telefone: string; curso: string; unidade: string };
type Errors = Partial<Record<keyof Fields, string>>;

const cursos = [
  "Medicina",
  "Enfermagem",
  "Biomedicina",
  "Direito",
  "Administração",
  "Engenharia de Software",
  "Outro curso",
];
const unidades = ["Feira de Santana", "Vitória da Conquista", "Itabuna"];

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.nome.trim().length < 3) e.nome = "Informe seu nome completo.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Informe um e-mail válido.";
  if (v.telefone.replace(/\D/g, "").length < 10)
    e.telefone = "Informe um telefone com DDD (ex.: 75 99999-0000).";
  if (!v.curso) e.curso = "Selecione o curso de interesse.";
  if (!v.unidade) e.unidade = "Selecione a unidade.";
  return e;
}

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const inputBase =
  "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40";

export function LeadForm() {
  const [values, setValues] = useState<Fields>({
    nome: "",
    email: "",
    telefone: "",
    curso: "",
    unidade: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = (k: keyof Fields) => (v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("done"), 900);
  };

  return (
    <section id="inscricao" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
            Fale com a UNEX
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Receba informações sobre bolsas e matrícula
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Preencha o formulário e nossa equipe de atendimento entra em contato em até um dia
            útil com valores, descontos disponíveis e o passo a passo da sua inscrição.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground">
            {[
              "Atendimento por WhatsApp, telefone ou presencial",
              "Simulação de mensalidade com bolsa aplicada",
              "Seus dados são usados apenas para contato (LGPD)",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[var(--radius-4xl)] border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:p-8">
          {status === "done" ? (
            <div role="status" className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-accent" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl text-card-foreground">
                Inscrição enviada com sucesso!
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Obrigado, {values.nome.split(" ")[0]}. Nossa equipe entrará em contato pelo telefone{" "}
                {values.telefone}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setValues({ nome: "", email: "", telefone: "", curso: "", unidade: "" });
                  setStatus("idle");
                }}
                className="mt-7 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Enviar outra inscrição
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <Field id="nome" label="Nome completo" error={errors.nome}>
                <input
                  id="nome"
                  name="nome"
                  autoComplete="name"
                  value={values.nome}
                  onChange={(e) => set("nome")(e.target.value)}
                  placeholder="Maria Oliveira Santos"
                  aria-invalid={!!errors.nome}
                  aria-describedby={errors.nome ? "nome-erro" : undefined}
                  className={`${inputBase} ${errors.nome ? "border-destructive" : "border-input"}`}
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="email" label="E-mail" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => set("email")(e.target.value)}
                    placeholder="voce@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-erro" : undefined}
                    className={`${inputBase} ${errors.email ? "border-destructive" : "border-input"}`}
                  />
                </Field>
                <Field id="telefone" label="Telefone / WhatsApp" error={errors.telefone}>
                  <input
                    id="telefone"
                    name="telefone"
                    inputMode="tel"
                    autoComplete="tel"
                    value={values.telefone}
                    onChange={(e) => set("telefone")(maskPhone(e.target.value))}
                    placeholder="(75) 99999-0000"
                    aria-invalid={!!errors.telefone}
                    aria-describedby={errors.telefone ? "telefone-erro" : undefined}
                    className={`${inputBase} ${errors.telefone ? "border-destructive" : "border-input"}`}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="curso" label="Curso de interesse" error={errors.curso}>
                  <select
                    id="curso"
                    name="curso"
                    value={values.curso}
                    onChange={(e) => set("curso")(e.target.value)}
                    aria-invalid={!!errors.curso}
                    aria-describedby={errors.curso ? "curso-erro" : undefined}
                    className={`${inputBase} ${errors.curso ? "border-destructive" : "border-input"}`}
                  >
                    <option value="">Selecione</option>
                    {cursos.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="unidade" label="Unidade" error={errors.unidade}>
                  <select
                    id="unidade"
                    name="unidade"
                    value={values.unidade}
                    onChange={(e) => set("unidade")(e.target.value)}
                    aria-invalid={!!errors.unidade}
                    aria-describedby={errors.unidade ? "unidade-erro" : undefined}
                    className={`${inputBase} ${errors.unidade ? "border-destructive" : "border-input"}`}
                  >
                    <option value="">Selecione</option>
                    {unidades.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Enviando...
                  </>
                ) : (
                  "Quero receber informações"
                )}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Ao enviar, você concorda em receber contato da UNEX sobre processos seletivos.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-card-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-erro`} role="alert" className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}
