# UNEX Landing Redesign

Landing page institucional da UNEX — Centro Universitário de Excelência, desenvolvida em React, TanStack Start, Vite e Tailwind CSS.

## Requisitos

- Node.js 22+
- npm 10+

## Desenvolvimento local

```bash
npm install
npm run dev
```

A aplicação será iniciada em `http://localhost:3000`.

## Validação

```bash
npm run typecheck
npm run lint
npm run build
```

Ou execute tudo em sequência:

```bash
npm run check
```

## Build de produção

```bash
npm run build
npm start
```

## Estrutura principal

```text
src/
├── assets/                 # Imagens da landing page
├── components/unex/        # Componentes visuais e seções da UNEX
├── lib/                    # Utilitários e tratamento de erros
├── routes/                 # Rotas TanStack
├── router.tsx              # Configuração do roteador
├── server.ts               # Entrada SSR
├── start.ts                # Middlewares do TanStack Start
└── styles.css              # Design system e Tailwind CSS
```

O projeto é independente de plataformas externas de geração de código e pode ser desenvolvido normalmente no VS Code ou em qualquer editor compatível com Node.js/TypeScript.
