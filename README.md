<div align="center">

```
███╗   ███╗██╗ █████╗ ██╗    ██╗     ██████╗ █████╗ ███████╗███████╗
████╗ ████║██║██╔══██╗██║    ██║    ██╔════╝██╔══██╗██╔════╝██╔════╝
██╔████╔██║██║███████║██║ █╗ ██║    ██║     ███████║█████╗  █████╗
██║╚██╔╝██║██║██╔══██║██║███╗██║    ██║     ██╔══██║██╔══╝  ██╔══╝
██║ ╚═╝ ██║██║██║  ██║╚███╔███╔╝    ╚██████╗██║  ██║██║     ███████╗
╚═╝     ╚═╝╚═╝╚═╝  ╚═╝ ╚══╝╚══╝      ╚═════╝╚═╝  ╚═╝╚═╝     ╚══════╝
```

**Landing page premium para cat café moderno — Neo-Brutalismo Editorial 2026**

</div>

---

## 🐾 Sobre o Projeto

O **Miaw Café** é uma landing page de alta fidelidade para um cat café moderno fictício em São Paulo. O projeto foi concebido como um **case de portfolio**, com foco em direção visual autoral, componentização real e qualidade de produção.

A ideia central é provar que é possível unir **caos visual controlado** com **excelente hierarquia de informação**: grids quebrados, offsets propositais, texturas de papel, tipografia oversized — tudo funcionando perfeitamente em um produto front-end real.

---

## ✨ Features

### 🎨 Design

- **Neo-Brutalismo Editorial 2026** — bordas cruas, sombras secas, desalinhamentos propositais
- **Grid assimétrico** em todas as seções com equilíbrio visual cuidadoso
- **Paleta 70/20/10** — cream/parchment dominante, terra como secundária, lime como acento vibrante
- **Paper noise texture** via SVG inline — camada de textura artesanal sobre todo o layout
- **Stickers flutuantes** com animação CSS contínua (float keyframe)
- **Ticker marquee** infinito com destaques do café
- Cards com **offset vertical proposital** (ex: segundo cat card, card de depoimento central)
- Sombras brutalistas que **reagem ao hover** com `translate` e `box-shadow` dinâmico

### 🔤 Tipografia

| Família      | Uso                                  | Peso       |
| ------------ | ------------------------------------ | ---------- |
| **Syne**     | Headlines, títulos, badges, botões   | 700 / 800  |
| **Fraunces** | Corpo de texto, citações, subtítulos | 400 italic |
| **DM Mono**  | Labels, tags, preços, monotexto      | 400        |

### ⚡ Animações

- **Framer Motion** nos componentes React — `whileInView`, `whileHover`, `AnimatePresence`
- **Intersection Observer** nativo para elementos Astro
- `client:visible` nas ilhas React — hidratação lazy apenas quando entram na viewport
- Estado de sucesso do formulário de reserva com `AnimatePresence` (enter/exit suave)

### ♿ Acessibilidade

- Roles ARIA em todas as seções (`role="list"`, `role="listitem"...`)
- Labels descritivos em todos os links e botões interativos
- `focus-visible` styling para navegação por teclado
- `aria-live` no ticker e no estado de sucesso do form

### 🚀 Performance

- Fontes self-hosted via `@fontsource` — zero dependência do Google Fonts
- Sem imagens externas — emojis como ilustrações (zero requisições de mídia)
- CSS custom properties para theming — zero runtime overhead
- Build estático com Astro — HTML pré-renderizado

---

## 🗂️ Estrutura de Arquivos

```
miaw-cafe/
│
├── public/
│   └── favicon.svg                   # Favicon SVG inline
│
├── src/
│   │
│   ├── components/                   # Um componente por seção/responsabilidade
│   │   ├── Button.astro              # Design system de botões (estilos globais)
│   │   ├── Navbar.astro              # Nav fixa + smooth scroll + hamburger mobile
│   │   ├── Hero.astro                # Headline oversized, hero card, stats strip
│   │   ├── Ticker.astro              # Marquee infinito com itens duplicados
│   │   ├── About.astro               # Sobre o café, blockquote, horário de funcionamento
│   │   ├── Cats.astro                # Grid de gatos + strip de adoção
│   │   ├── CatCard.tsx               # ⚛️ React — card animado com Framer Motion
│   │   ├── Menu.astro                # Card editorial terra + sidebar de especiais
│   │   ├── Experience.astro          # Grid 3:2 assimétrico + features strip
│   │   ├── Testimonials.astro        # 3 cards com card central em destaque
│   │   ├── Reserva.astro             # CTA section com formulário React
│   │   ├── ReservaForm.tsx           # ⚛️ React — form com AnimatePresence (sucesso)
│   │   ├── Footer.astro              # 4 colunas + social + texto decorativo gigante
│   │   └── ScrollReveal.astro        # Intersection Observer para elementos Astro
│   │
│   ├── data/
│   │   └── index.ts                  # ✏️ Edite aqui — todos os dados da landing page
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro          # HTML base, meta tags, importa CSS global
│   │
│   ├── pages/
│   │   └── index.astro               # Composição final — importa e ordena seções
│   │
│   ├── styles/
│   │   └── global.css                # Design tokens, reset, utilitários, animações
│   │
│   └── types/
│       └── index.ts                  # Interfaces TypeScript (Cat, MenuItem, etc.)
│
├── astro.config.mjs                  # Config Astro: React integration
├── tsconfig.json                     # TypeScript config com paths alias
└── package.json                      # Dependências e scripts
```

---

## 🧩 Seções da Landing Page

| #   | Seção           | Descrição                                                        | Componente                          |
| --- | --------------- | ---------------------------------------------------------------- | ----------------------------------- |
| 1   | **Hero**        | Headline 9.5rem, card do gato do dia sticky, stats strip escura  | `Hero.astro`                        |
| 2   | **Ticker**      | Marquee infinito com destaques em fundo terra                    | `Ticker.astro`                      |
| 3   | **Sobre**       | História em grid 1:1, blockquote das fundadoras, horário         | `About.astro`                       |
| 4   | **Gatos**       | Grid 3 cards com offset no card do meio, strip de adoção         | `Cats.astro` + `CatCard.tsx`        |
| 5   | **Cardápio**    | Card editorial terra com lista de bebidas + sidebar de especiais | `Menu.astro`                        |
| 6   | **Experiência** | Grid 3:2 assimétrico + stack de fotos + 4 features               | `Experience.astro`                  |
| 7   | **Depoimentos** | 3 cards brutalistas, central deslocado e em cor terra            | `Testimonials.astro`                |
| 8   | **Reserva**     | CTA lime com form React animado e estado de confirmação          | `Reserva.astro` + `ReservaForm.tsx` |
| 9   | **Footer**      | 4 colunas, redes sociais, texto decorativo 6rem                  | `Footer.astro`                      |

---

## 🛠️ Stack Técnica

| Tecnologia                                     | Versão    | Papel                                             |
| ---------------------------------------------- | --------- | ------------------------------------------------- |
| [Astro](https://astro.build)                   | `^6.3.2`  | Framework SSG — renderiza tudo como HTML estático |
| [React](https://react.dev)                     | `^19.2.6` | Ilhas interativas (CatCard, ReservaForm)          |
| [TypeScript](https://typescriptlang.org)       | `^6.x`    | Tipagem em toda a base de código                  |
| [Framer Motion](https://www.framer.com/motion) | `^12`     | Animações declarativas nos componentes React      |
| [@fontsource](https://fontsource.org)          | `^5.x`    | Fontes self-hosted (Syne, Fraunces, DM Mono)      |

---

## 🚀 Como Rodar

### Pré-requisitos

- **Node.js** `>=22.12.0`

### 1. Clone ou extraia o projeto

```bash
# Se veio como .zip
unzip miaw-cafe.zip
cd miaw-cafe
```

```bash
# Se veio de um repositório git
git clone https://github.com/seu-user/miaw-cafe.git
cd miaw-cafe
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Rode em desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:4321`

### 4. Build de produção

```bash
npm run build
```

Os arquivos gerados ficam em `dist/` — pronto para deploy estático.

### 5. Preview do build

```bash
npm run preview
```

---

## 🎨 Design System

### Paleta de Cores

```css
:root {
	/* Dominantes (70%) — neutros quentes */
	--color-cream: #f0e8d0; /* Fundo principal */
	--color-parchment: #e4d9bc; /* Fundo alternativo */
	--color-white: #faf7f0; /* Cards, formulários */

	/* Secundárias (20%) — contraste alto */
	--color-ink: #1a1510; /* Texto, bordas, sombras */
	--color-warm-black: #241e16; /* Fundos escuros (about, exp, footer) */
	--color-terra: #c4622d; /* Cor de marca — hero, ticker, menu */
	--color-terra-light: #d97a47; /* Labels em fundo escuro */
	--color-rust: #7b3520; /* Labels CTA */

	/* Vibrante (10%) — acento energético */
	--color-lime: #c8e800; /* CTAs, badges de adoção, preços */

	/* Neutros de suporte */
	--color-sage: #6b7a55; /* Segundo cat card */
	--color-sand: #b8a880; /* Labels secundários */
}
```

### Botões

```html
<!-- Primário — terra -->
<a class="btn btn--primary">Texto</a>

<!-- Secundário — lime -->
<a class="btn btn--secondary">Texto</a>

<!-- Dark — ink -->
<a class="btn btn--dark">Texto</a>

<!-- Ghost — transparente -->
<a class="btn btn--ghost">Texto</a>

<!-- Outline claro — para fundos escuros -->
<a class="btn btn--outline-light">Texto</a>

<!-- Modificadores -->
<a class="btn btn--primary btn--sm">Pequeno</a>
<a class="btn btn--primary btn--full">Largura total</a>
```

### Tipografia

```html
<!-- Display: headlines, títulos -->
<h1 class="text-display">HEADLINE</h1>

<!-- Mono: labels, badges, preços -->
<p class="text-mono">LABEL · 01</p>

<!-- Italic: subtítulos, citações -->
<p class="text-italic">Subtítulo elegante em Fraunces</p>
```

### Sombras Brutalistas

```css
.bb {
	box-shadow: 7px 7px 0px var(--color-ink);
}
.bb-terra {
	box-shadow: 7px 7px 0px var(--color-terra);
}
.bb-lime {
	box-shadow: 7px 7px 0px var(--color-lime-dark);
}
.bb-sm {
	box-shadow: 4px 4px 0px var(--color-ink);
}
```

<div align="center">

**Feito com ☕ e 🐾**

_MIAW CAFÉ — Where Cats & Coffee Meet_

</div>
