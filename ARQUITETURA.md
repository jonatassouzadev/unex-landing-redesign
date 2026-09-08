# Arquitetura do projeto

## Stack

- React 19
- TypeScript
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS 4
- Lucide React
- React Query

## Fluxo da aplicação

`src/routes/index.tsx` monta a página inicial e organiza as seções nesta ordem:

1. `Header`
2. `Hero`
3. `About`
4. `Courses`
5. `Admission`
6. `Benefits`
7. `Testimonials`
8. `Units`
9. `News`
10. `FinalCta`
11. `LeadForm`
12. `Footer`

## Componentes principais

- `src/components/unex/Header.tsx`: navegação desktop/mobile e comportamento sticky.
- `src/components/unex/Hero.tsx`: banner principal e indicadores institucionais.
- `src/components/unex/Sections.tsx`: sobre, cursos, ingresso e benefícios.
- `src/components/unex/Testimonials.tsx`: depoimentos e carousel responsivo.
- `src/components/unex/UnitsNews.tsx`: unidades e notícias.
- `src/components/unex/LeadForm.tsx`: formulário de captação e validação.
- `src/components/unex/Footer.tsx`: CTA final e rodapé.
- `src/components/unex/Logo.tsx`: marca vetorial reutilizável.

## Infraestrutura

- `src/routes/__root.tsx`: shell HTML, metadados globais, tratamento de 404/erro e providers.
- `src/router.tsx`: criação do TanStack Router.
- `src/start.ts`: middleware e proteção CSRF das server functions.
- `src/server.ts`: entrada SSR e tratamento de falhas do servidor.
- `src/styles.css`: tokens do design system, Tailwind e animações.
- `src/routeTree.gen.ts`: arquivo gerado automaticamente pelo TanStack Router; não editar manualmente.

## Independência de plataforma

A configuração de build usa diretamente os plugins oficiais de Vite/TanStack/Tailwind. Não existe dependência, telemetria ou pasta de configuração associada à plataforma que originou o template.

## Desenvolvimento no VS Code

Abra a pasta do projeto e execute uma das tarefas em **Terminal > Run Task**:

- `UNEX: instalar dependências`
- `UNEX: iniciar desenvolvimento`
- `UNEX: validar projeto`

Também é possível usar o terminal:

```bash
npm install
npm run dev
```

URL local: `http://localhost:3000`.
