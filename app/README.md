# 🧩 Minha Lista — Gerenciador de Tarefas com Next.js + TypeScript

Um aplicativo simples e funcional de gerenciamento de tarefas com suporte a **modo escuro**, **armazenamento local (localStorage)** e **filtros inteligentes** (“Todas”, “Pendentes” e “Concluídas”).  
Desenvolvido em **Next.js 14 + TypeScript + TailwindCSS**, com transições animadas utilizando **Framer Motion**.

---

## 🚀 Funcionalidades

✅ Adicionar, editar e excluir tarefas  
✅ Marcar tarefas como concluídas ou reabrir  
✅ Filtros dinâmicos: **Todas / Pendentes / Concluídas**  
✅ Modo escuro com persistência automática  
✅ Salvamento local com **localStorage**  
✅ Interface moderna e responsiva  
✅ Código organizado em componentes reutilizáveis  

---

## 🏗️ Estrutura do Projeto

app/
├─ components/
│ ├─ TaskList.tsx
│ ├─ TaskForm.tsx
│ ├─ TaskFilter.tsx
│ ├─ ThemeToggle.tsx
│
├─ hooks/
│ ├─ useTasks.ts
│
├─ page.tsx
├─ layout.tsx
├─ globals.css

yaml
Copiar código

---

## ⚙️ Instalação e Execução

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/marcelorayzen/minha-lista.git
cd minha-lista
2️⃣ Instalar dependências
bash
Copiar código
npm install
3️⃣ Rodar o projeto em modo de desenvolvimento
bash
Copiar código
npm run dev
A aplicação estará disponível em:
👉 http://localhost:3000

🧱 Build de Produção
Para gerar o build otimizado:

bash
Copiar código
npm run build
npm start
🧠 Decisões Técnicas
Next.js + TypeScript: fornece tipagem estática e SSR opcional.

TailwindCSS: simplifica o design responsivo e o dark mode.

Framer Motion: animações suaves para entrada/remoção de tarefas.

LocalStorage: garante persistência sem necessidade de backend.

Componentização: facilita manutenção e escalabilidade futura.

📂 Estrutura de Componentes
Componente	Função
TaskList	Exibe a lista de tarefas e controla filtros
TaskForm	Gerencia criação e edição de tarefas
TaskFilter	Exibe botões de filtro (todas, pendentes, concluídas)
ThemeToggle	Alterna entre tema claro e escuro
useTasks	Hook responsável por adicionar, excluir e persistir tarefas

🧪 Testes
O projeto conta com estrutura de testes unitários no diretório app/components/__tests__.

Rodar testes:

bash
Copiar código
npm test
👨‍💻 Autor
Marcelo Rayzen
💼 QA • Desenvolvedor • Analista de Governança
🌐 GitHub: @marcelorayzen

🪶 Licença
Este projeto é distribuído sob a licença MIT.
Sinta-se livre para usar e aprimorar.

