# Plataforma DeBugMe

Este repositório reúne os projetos e exercícios da **Plataforma DeBugMe**, organizados em páginas numeradas de **01 a 15**.  
Cada página apresenta um objetivo claro, materiais de apoio e instruções práticas para construir e entender soluções em **HTML, CSS e JavaScript**.

---

## 📑 Índice
1. [Estrutura do Projeto](#estrutura-do-projeto)  
2. [Troca de Páginas](#troca-de-páginas)  
3. [Tema Dark/Light](#tema-darklight)  
4. [Marcação dos Exercícios](#marcação-dos-exercícios)  
5. [Funcionalidades Extras](#funcionalidades-extras)  
6. [Visão Geral dos Projetos (1–15)](#visão-geral-dos-projetos-1–15)  
7. [Créditos](#créditos)

---

## Estrutura do Projeto

### Arquitetura
- Cada exercício está em um arquivo HTML separado (`index.html`, `projeto2.html` … `projeto15.html`).  
- Isso mantém cada página independente, mas seguindo a mesma identidade visual e lógica de navegação.

### Componentes Comuns
- **Cabeçalho** com título e botões de navegação.  
- **Conteúdo central** com explicação + área prática + código.  
- **Rodapé** com botões de avanço/retorno.

---

## Troca de Páginas
- **Botões numerados:** No topo e rodapé, botões de **1 a 15** levam diretamente ao exercício correspondente.  
- **Navegação rápida:** Botões **“Voltar”** e **“Avançar”** permitem seguir a ordem natural dos projetos sem abrir o índice.

---

## Tema Dark/Light

- Alternância feita com `classList.toggle('modewhite')` no elemento `<body>`.  
- **Tema padrão:** escuro.  
- **Tema alternativo:** claro, ativado ao clicar no botão de tema.

---

## Marcação dos Exercícios

### Botões de Seleção
Cada exercício possui um botão que pode ser marcado para indicar conclusão.  
Ao clicar, o botão muda de estilo (cor, ícone ou destaque visual).

### Persistência (Opcional)
Em alguns projetos, como o **Relógio de Ponto**, é usado `localStorage`.  
Esse mesmo recurso pode marcar automaticamente quais exercícios já foram concluídos, mesmo após atualizar a página.

---

## Funcionalidades Extras

### Explicação + Prática
Cada página traz:
- uma explicação teórica inicial;  
- o código correspondente;  
- área de teste para o aluno praticar.

### Consistência Visual
Todos os 15 exercícios seguem o mesmo layout e estilo, reforçando a sensação de plataforma organizada e unificada.

---

## Visão Geral dos Projetos (1–15)

### Projeto 1 — Introdução ao DOM
**Objetivo:** primeiros passos com HTML e manipulação de elementos.  
**Conceitos:** `getElementById`, `innerText`, eventos (onclick, addEventListener, arrow function).  
**Desafio:** comparar diferentes formas de declarar funções.

---

### Projeto 2 — Simulação de Cadastro e Login
**Objetivo:** cadastrar nome e idade e validar login.  
**Conceitos:** `.value`, if/else, mensagens na tela.  
**Desafio:** trocar onclick por `addEventListener` com arrow functions.

---

### Projeto 3 — Calculadora
**Objetivo:** criar calculadora funcional.  
**Conceitos:** eventos de clique, variáveis globais, `eval()`.  
**Desafio:** refatorar o código e remover repetição.

---

### Projeto 4 — Cadastro de Pessoas com createElement
**Objetivo:** CRUD simples em tabela.  
**Conceitos:** `createElement`, `appendChild`, `deleteRow`, loops.  
**Desafio:** implementar edição de registros.

---

### Projeto 5 — Cálculo de CPF
**Objetivo:** calcular dígitos verificadores.  
**Conceitos:** `split`, loops, multiplicação por pesos, `slice`, template literals.  
**Desafio:** validar CPF completo e mensagens de erro.

---

### Projeto 6 — Carrossel
**Objetivo:** carrossel funcional.  
**Conceitos:** `querySelectorAll`, `classList.add/remove`.  
**Desafio:** adicionar autoplay com `setInterval`.

---

### Projeto 7 — Card Pessoal
**Objetivo:** criar card interativo.  
**Conceitos:** Flexbox, boxicons, eventos `mouseenter`, API `randomuser.me`.  
**Desafio:** atualizar dados automaticamente via API.

---

### Projeto 8 — Pokédex API
**Objetivo:** consumir PokeAPI.  
**Conceitos:** fetch, async/await, loops, montagem de cards.  
**Desafio:** implementar busca por nome/ID.

---

### Projeto 9 — Calculadora Refatorada
**Objetivo:** melhorar a calculadora.  
**Conceitos:** queries, `forEach`, arrow functions, clean code.  
**Desafio:** adicionar histórico de cálculos.

---

### Projeto 10 — Cadastro de Pessoas com Objetos
**Objetivo:** cadastrar pessoas em cards.  
**Conceitos:** objetos literais, arrays, `push`, `forEach`.  
**Desafio:** implementar edição e exclusão.

---

### Projeto 11 — Clicker (Jogo de Cliques)
**Objetivo:** ganhar moedas e comprar upgrades.  
**Conceitos:** estados, `setInterval`, eventos, lógica de jogo.  
**Desafio:** implementar upgrades crescentes e placares.

---

### Projeto 12 — Carrossel X-Men
**Objetivo:** trocar imagem e descrição ao passar o mouse.  
**Conceitos:** `querySelectorAll`, `mouseenter`, animações simples.  
**Desafio:** adicionar novos personagens e transições.

---

### Projeto 13 — Git/GitHub
**Objetivo:** introdução ao Git.  
**Conceitos:** `git init`, `git add`, `git commit`, `git push`.  
**Desafio:** versionar um projeto completo e criar branches.

---

### Projeto 14 — Alternância de Tema
**Objetivo:** tema claro/escuro.  
**Conceitos:** `classList.toggle`, CSS escopado.  
**Desafio:** aplicar alternância em três projetos.

---

### Projeto 15 — Relógio de Ponto
**Objetivo:** registrar horários usando localStorage.  
**Conceitos:** classe `Ponto`, JSON.stringify/parse, loops.  
**Desafio:** formatar registros e permitir exportação dos dados.

---

## Créditos
**Autor:** Julian Pedro De Alexandre  
**Ano:** 2025  
**Última atualização:** 2026  
**Fonte:** Plataforma DeBugMe
