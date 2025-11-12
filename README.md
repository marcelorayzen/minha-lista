# Minha-lista

Aplicativo Todo-List construído com Next.js (App Router) + TypeScript.

**Autor:** Marcelo Rayzen  
**Email:** marcelo.rayzen@live.com

## Visão geral

Aplicação para gerenciar tarefas (adicionar, editar, marcar como concluída, excluir e filtrar),
com persistência local via `localStorage`, tema manual (light/dark) e animações com Framer Motion.

## Tecnologias
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Vitest + React Testing Library

## Como rodar localmente

```bash
# instalar dependências
npm install

# rodar em desenvolvimento
npm run dev

# executar testes
npm run test
```

Abra http://localhost:3000

## Estrutura do projeto

- `app/` - rotas e componentes do Next.js App Router
- `app/components` - componentes reutilizáveis
- `app/lib/storage.ts` - helpers de persistência (localStorage)
- `app/types.ts` - tipos TypeScript
- `vitest.config.ts` - configuração de testes

## Decisões técnicas

- Persistência local com `localStorage` para simplicidade e offline básico.
- `framer-motion` para microanimações (adicionar/excluir/entradas).
- Tema manual salvo em `localStorage` por preferência do usuário.

## Melhorias possíveis

- Autenticação e sincronização com backend (Supabase/Firebase).
- PWA / Service Worker para offline avançado.
- Deploy contínuo via Vercel com CI.

## Licença

MIT
